<template>
    <div class="timeline">
        <div class="timeline-item" v-for="item in items">
            <div class="timeline-item-time" v-if="time">{{item.time}}</div>
            <div class="timeline-item-project">
                <div class="circle"></div>
                <div class="project-info">
                    <span class="project-name">{{item.company || item.name}}</span>
                    <span class="work-title">{{item.title}}</span>
                    <span class="project-time">{{item.time}}</span>
                    <span class="project-link">{{item.source}}</span>
                    <a class="project-code" :href="item.source" v-show="page===2 && item.source" @click.stop="" target="_blank">&nbsp;源代码</a>
                    <a class="project-code" :href="item.online" v-show="page===2 && item.online" @click.stop="" target="_blank">&nbsp;线上地址</a>
                </div>
                <ul class="work-project-list" v-if="page===1">
                    <li v-for="wp in reverseArr(item.projects)">
                        <h4>{{wp.name}}</h4>
                        <ul class="project-desc" v-show="hasDesc(wp.description)">
                            <li v-for="desc in wp.description">
                                {{desc}}
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="project-desc" :style="[{marginTop:item.name === '其它'?'1px':0}]" v-if="hasDesc(item.description) && page === 2">
                    <li v-for="desc in item.description">
                        <span v-if="typeof desc === 'string'" :style="{paddingLeft:'5px'}">{{desc}}</span>
                        <span v-if="typeof desc === 'object'">
                            <span class="other-text">{{desc.title}}--{{desc.text}}</span>
                            <a class="project-code" :href="desc.link" v-show="desc.link" @click.stop="" target="_blank">&nbsp;源代码</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
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
                    color: #00bfa5;
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

                    .project-time,.project-link{
                        display: none;
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
                        .other-print{
                            display: none;
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

    @media screen and (max-width: 695px){
        .timeline{
            .timeline-item{
                .project-desc{
                    .project-code {
                        display: none;
                    }
                }
                .timeline-item-time{
                    display: none;
                }
                .timeline-item-project{
                    .project-info{
                        .project-code {
                            display: none;
                        }
                        .project-time{
                            display: inline-block;
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 414px){
        .timeline{
            .timeline-item{
                .timeline-item-time{
                    display: none;
                }
                .timeline-item-project{
                    .project-info{
                        .work-title{
                            display: none;
                        }
                    }
                }
            }
        }
    }

    @media print {
        .timeline {
            .project-desc{
                margin-top: 10px;
                .project-code {
                    display: none;
                }
            }
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
                    .circle{
                        display: none;
                    }
                    .project-info {
                        margin-left: -20px;
                        a{
                            display: none;
                        }
                        .project-link{
                            display: inline-block;
                        }
                    }
                    .project-desc{
                        li{
                            .other-print{
                                display: inline-block;
                            }
                        }
                    }
                    .work-project-list,.project-desc{
                        margin-top: 7px;
                    }
                }
            }
        }
    }
</style>

<script>

    export default{
        props:{
            items:{
                type:Array,
                required:true,
                default: function(){
                    return []
                }
            },
            page:{
                type:Number,
                required:true
            },
            time: {
                type: Boolean,
                default: true
            }
        },

        methods:{
            hasDesc(desc){
                return desc && desc.length;
            },

            reverseArr(arr){
                //return arr.reverse() will throw err in Vue
                //because store in the vue is immutable, don't support modify it directly
                let t = [].concat(arr);
                return t.reverse();
            }
        }
    }
</script>
