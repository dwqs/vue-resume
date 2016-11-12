<template>
    <main class="resume-content" v-show="show">
       <article :class="{active:prev,inactive:!prev}" @click="prev = false">
           <div class="left">
               <div class="wisdom" v-show="data.wisdom">{{data.wisdom}}</div>
               <div class="info">
                   <div class="tag">联系方式</div>
                   <ul class="social-contact-list">
                       <li v-for="(value,key) in data.social">
                           {{key}}: {{value}}
                       </li>
                   </ul>
               </div>
               <div class="info">
                   <div class="tag">求职意向</div>
                   <ul class="job-intent">
                       <li v-for="(value,key) in data.jobs">
                           {{key}}: {{value}}
                       </li>
                   </ul>
               </div>
               <div class="info">
                   <div class="tag">技能掌握</div>
                   <ul class="skills">
                       <li v-for="(value,key) in data.skills">
                           <span class="skill-name">{{key}}</span>
                           <div class="skill-bar-wrap">
                               <div class="skill-bar" :style="{width:value +'%'}"></div>
                           </div>
                       </li>
                   </ul>
               </div>
               <div class="info">
                   <div class="tag">自我评价</div>
                   <p class="self-evaluation">
                       {{data.evaluation}}
                   </p>
               </div>
           </div>
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
                       <div class="timeline">
                           <div class="timeline-item" v-for="work in data.works">
                               <div class="timeline-item-time">{{work.time}}</div>
                               <div class="timeline-item-project">
                                   <div class="circle"></div>
                                   <div class="project-info">
                                       <span class="project-name">{{work.company}}</span>
                                       <span class="work-title">{{work.title}}</span>
                                   </div>
                                   <ul class="work-project-list" >
                                       <li v-for="wp in work.projects">
                                           <h4>{{wp.name}}</h4>
                                           <ul class="project-desc" v-show="hasDesc(wp.description)">
                                               <li v-for="desc in wp.description">
                                                   {{desc}}
                                               </li>
                                           </ul>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
           </div>
       </article>
       <article :class="{active:!prev,inactive:prev}" @click="prev = true">
           <div class="left">
               <div class="wisdom" v-show="data.wisdom">{{data.wisdom}}</div>
               <div class="info">
                   <div class="tag">联系方式</div>
                   <ul class="social-contact-list">
                       <li v-for="(value,key) in data.social">
                           {{key}}: {{value}}
                       </li>
                   </ul>
               </div>
               <div class="info">
                   <div class="tag">求职意向</div>
                   <ul class="job-intent">
                       <li v-for="(value,key) in data.jobs">
                           {{key}}: {{value}}
                       </li>
                   </ul>
               </div>
               <div class="info">
                   <div class="tag">技能掌握</div>
                   <ul class="skills">
                       <li v-for="(value,key) in data.skills">
                           <span class="skill-name">{{key}}</span>
                           <div class="skill-bar-wrap">
                               <div class="skill-bar" :style="{width:value +'%'}"></div>
                           </div>
                       </li>
                   </ul>
               </div>
               <div class="info">
                   <div class="tag">自我评价</div>
                   <p class="self-evaluation">
                       {{data.evaluation}}
                   </p>
               </div>
           </div>
           <div class="right">
               <section class="projects">
                   <div class="title-wrap">
                       <span>个人项目</span>
                   </div>
                   <div class="content">
                       <div class="timeline">
                           <div class="timeline-item" v-for="project in data.projects">
                                <div class="timeline-item-time">{{project.time}}</div>
                                <div class="timeline-item-project">
                                    <div class="circle"></div>
                                    <div class="project-info">
                                        <span class="project-name">{{project.name}}</span>
                                        <a class="project-code" :href="project.source" @click.stop="" target="_blank">&nbsp;源代码</a>
                                        <a class="project-code" v-show="project.online" :href="project.online" @click.stop="" target="_blank">&nbsp;线上地址</a>
                                    </div>
                                    <ul class="project-desc" v-show="hasDesc(project.description)">
                                        <li v-for="desc in project.description">
                                            {{desc}}
                                        </li>
                                    </ul>
                                </div>
                           </div>
                       </div>
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

            &>div{
                height: 100%;
                &.left{
                    flex:1;
                    padding: 15px 15px;
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                    background-color: #00BFA5;
                    .wisdom{
                        margin: 25px 0 20px;
                        font-size:16px;
                        line-height: 1.5;
                        color: #FFFFFF;
                        text-align: center;
                    }
                    .info{
                        margin-bottom: 25px;
                        .tag{
                            position: relative;
                            font-size: 18px;
                            color: #9f3;
                            &:before{
                                font-family: FontAwesome;
                                content: '\f02e';
                                padding-right: 5px;
                            }
                        }

                        li{
                            color: #FFF;
                            padding: 10px 0 0 20px;
                            cursor: default;
                        }

                        .self-evaluation{
                            color: #004d40;
                            font-size: 18px;
                            text-indent: 18px;
                            margin-top: 15px;
                            line-height: 1.5;
                            word-break: break-all;
                            overflow : hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 7;
                            -webkit-box-orient: vertical;
                        }
                    }

                    .social-contact-list{
                        li{
                            &:first-child{
                                &:before{
                                    font-family: FontAwesome;
                                    content: '\f1d7';
                                }
                            }
                            &:last-child{
                                &:before{
                                    font-family: FontAwesome;
                                    content: '\f1d6';
                                    padding-right: 2px;
                                }
                            }
                        }
                    }

                    .job-intent{
                        li{
                            &:nth-child(1){
                                &:before{
                                    font-family: FontAwesome;
                                    content: '\f297';
                                }
                            }
                            &:nth-child(2){
                                &:before{
                                    font-family: FontAwesome;
                                    content: '\f2c6';
                                }
                            }
                            &:nth-child(3){
                                &:before{
                                    font-family: FontAwesome;
                                    content: '\f02b';
                                }
                            }
                        }
                    }

                    .skills{
                        li{
                            position: relative;
                            word-break: normal;
                        }
                        .skill-name {
                            position: relative;
                            top: -3px;
                            width: 75px;
                            font-size: 14px;
                            display: inline-block;
                        }
                        .skill-bar-wrap {
                            height: 17px;
                            width: 120px;
                            background: #00796b;
                            display: inline-block;
                            border-radius: 20px;
                            .skill-bar {
                                height: 17px;
                                background: #fff;
                                border-radius: 20px 0 0 20px;
                            }
                        }
                    }
                }

                &.right{
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
    }

    .timeline{
        flex: 1;
        display: flex;
        flex-direction: column;
        .timeline-item{
            position: relative;
            display: flex;
            padding-bottom: 18px;
            .timeline-item-time{
                flex:1;
                color:#3b3b3b;
                padding-top: 3px;
            }
            .timeline-item-project{
                position: relative;
                flex: 3;
                padding-left: 15px;
                .circle{
                    position: absolute;
                    left: -8px;
                    top: 3px;
                    height: 14px;
                    width: 14px;
                    border-radius: 100%;
                    background: #00796b;
                }
                .project-info {
                    display: flex;
                    align-items: center;
                    .project-name {
                        display: inline-block;
                        font-weight: bold;
                    }
                    .project-code {
                        font-size: 12px;
                        color: #4db6ac;
                        border: 1px solid #4db6ac;
                        padding: 2px 5px;
                        border-radius: 5px;
                        margin-left: 15px;
                        &:before {
                            font-family: FontAwesome;
                            content: "\f0c1";
                        }
                    }

                    .work-title{
                        display: inline-block;
                        font-weight: bold;
                        margin-left: 20px;
                    }
                }
                .project-desc{
                    padding-top: 10px;
                    padding-left: 15px;
                    border-left: 2px solid #00796b;
                    margin-left: -17px;
                    li{
                        padding-bottom: 5px;
                        font-size: 15px;
                        line-height: 1.5;
                        &:last-child{
                            padding-bottom: 0;
                        }
                        &:before{
                            font-family: FontAwesome;
                            content: '\f069';
                            //padding-right: 7px;
                            font-size: 14px;
                        }
                    }
                }

                .work-project-list{
                    border-left: 2px solid #00796b;
                    margin-left: -17px;
                    margin-top: 1px;
                    h4{
                        padding-top: 10px;
                        padding-left: 15px;
                        font-weight: bold;
                    }
                    .project-desc{
                        border:none;
                        margin-left: 0;
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

    export default{

        data(){
            return{
                prev: true
            }
        },

        props:{
            show:Boolean
        },

        computed: {
            ...mapState({
                data: state => state.resume.profile
            })
        },

        methods: {
            changePage(type){
                this.prev = type;
            },

            hasDesc(desc){
                return desc && desc.length;
            }
        }
    };
</script>
