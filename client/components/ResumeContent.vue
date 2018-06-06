<template>
    <main class="resume-content" v-show="show">
       <article :class="{active:prev,inactive:!prev}" @click="prev = false">
           <Left :data="data"></Left>
           <div class="right">
               <section class="education">
                    <div class="title-wrap">
                        <span>教育经历</span>
                    </div>
                   <div class="content">
                       <span v-for="(value,key) in data.education" :class="key">
                           {{value}}
                       </span>
                   </div>
               </section>
               <section class="works">
                   <div class="title-wrap">
                       <span>项目与工作经验</span>
                   </div>
                   <div class="content">
                       <time-line :items="data.works" :page="1"></time-line>
                   </div>
               </section>
           </div>
       </article>
       <article :class="{active:!prev,inactive:prev}" @click="prev = true">
           <Left :data="data"></Left>
           <div class="right">
               <section class="projects">
                   <div class="title-wrap">
                       <span>个人项目</span>
                   </div>
                   <div class="content">
                       <time-line :time="false" :items="data.projects" :page="2"></time-line>
                   </div>
               </section>
               <section class="skill-desc">
                   <div class="title-wrap">
                       <span>技能</span>
                   </div>
                   <div class="content">
                        <ul class="skill-desc">
                            <li v-for="skill in data.skillsDesc">
                                {{skill}}
                            </li>
                        </ul>
                   </div>
               </section>
           </div>
       </article>
       <article class="print">
           <div class="right">
               <section class="education">
                   <div class="title-wrap">
                       <span>教育经历</span>
                   </div>
                   <div class="content">
                       <span v-for="(value,key) in data.education" :class="key">
                           {{value}}
                       </span>
                   </div>
               </section>
               <section class="works">
                   <div class="title-wrap">
                       <span>项目与工作经验</span>
                   </div>
                   <div class="content">
                       <time-line :items="data.works" :page="1"></time-line>
                   </div>
               </section>
           </div>
           <div class="right">
               <section class="projects">
                   <div class="title-wrap">
                       <span>个人项目</span>
                   </div>
                   <div class="content">
                       <time-line :time="false" :items="data.projects" :page="2"></time-line>
                   </div>
               </section>
               <section class="skill-desc">
                   <div class="title-wrap">
                       <span>技能</span>
                   </div>
                   <div class="content">
                       <ul class="skill-desc">
                           <li v-for="skill in data.skillsDesc">
                               {{skill}}
                           </li>
                       </ul>
                   </div>
               </section>
           </div>
       </article>
       <footer class="main-footer">
           <span @click="changePage(true)" v-show="!prev">上一页</span>
           <span @click="changePage(false)"  v-show="prev">下一页</span>
       </footer>
    </main>
</template>

<style scoped lang="less">
    @media screen {
        .resume-content {
            .print {
                display: none;
            }
        }
    }
    .resume-content{
        position: relative;
        height: 1175px;
        margin-top: 20px;
        article{
            display: flex;
            align-items: flex-start;
            position: absolute;
            width: 100%;
            height: 1175px;
            transform-origin: 50% 0%;
            transition: 1s;
            backface-visibility:hidden;
            cursor: pointer;
            background-color: #f0f2f1;
            border-radius: 4px;
            box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
            &.active{
                transform: rotateY(0deg);
            }

            &.inactive{
                transform: rotateY(180deg);
            }

            .right{
                flex: 3;
                padding: 15px 20px;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;

                section{
                    margin-bottom: 25px;
                    .content{
                        display: flex;
                        margin: 15px 0 10px 33px;
                        font-size: 17px;
                    }
                    .title-wrap{
                        font-size: 22px;
                        color: #00796b;
                        line-height: 30px;
                        border-bottom: 1px solid #00796b;
                        span{
                            padding-left: 7px;
                        }
                    }
                    &.education{
                        .title-wrap:before{
                            font-family: FontAwesome;
                            content: '\f02d';
                        }
                        .content{
                            span{
                                flex:1
                            }
                        }
                    }
                    &.works{
                        .title-wrap:before{
                            font-family: FontAwesome;
                            content: '\f0b1';
                        }
                    }
                    &.projects{
                        .title-wrap:before{
                            font-family: FontAwesome;
                            content: '\f0f6';
                        }
                    }
                    &.skill-desc{
                        .title-wrap:before{
                            font-family: FontAwesome;
                            content: '\f0ad';
                        }
                    }
                }

                .skill-desc{
                    li{
                        padding-bottom: 5px;
                        font-size: 15px;
                        line-height: 1.5;
                        &:last-child{
                            padding-bottom: 0;
                        }
                        &:before{
                            font-family: FontAwesome;
                            content: "\f005";
                            //padding-right: 7px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

    .main-footer{
        position: absolute;
        left: 0;
        bottom: -30px;
        width: 100%;
        span{
            cursor: pointer;
            display: inline-block;
            padding: 6px 12px;
            border-radius: 4px;
            color: rgba(0,191,165,0.8);
            &:hover{
                color: rgba(0,191,165,1);
            }
            &:last-child{
                float: right;
                &:after{
                    clear: both;
                }
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 940px){
        .resume-content{
            article{
                .right{
                    section{
                        .content{
                            margin-left: 0;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 625px){
        .resume-content{
            article{
                .right{
                    section{
                        &.education{
                            .content{
                                span:nth-child(3){
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 520px){
        .resume-content{
            height: 1275px;
            article{
                height: 1275px;
            }
        }
    }

    @media screen and (max-width: 414px){
        .resume-content{
            height: 1475px;
            article{
                height: 1475px;
                .right{
                    section{
                        &.education{
                            .content{
                                span:last-child{
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 320px){
        .resume-content{
            height: 1675px;
            article{
                height: 1675px;
            }
        }
    }

    @media print {
        .resume-content {
            article,footer{
                box-shadow: none;
                border: none;
                display: none;
            }
            .print {
                display: flex;
                flex-direction: column;
                width: 1100px;
            }
        }
    }
</style>

<script>
    import {mapState} from 'vuex';

    import Left from '../common/left.vue';
    import TimeLine from '../common/timeline.vue';

    export default{

        data(){
            return{
                prev: true
            }
        },

        props:{
            show:Boolean
        },

        components:{
            Left,
            TimeLine
        },

        computed: {
            ...mapState({
                data: state => state.resume.profile
            })
        },

        methods: {
            changePage(type){
                this.prev = type;
            }
        }
    };
</script>
