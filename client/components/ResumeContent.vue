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
                       <time-line :items="data.projects" :page="2"></time-line>
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
