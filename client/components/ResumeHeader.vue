<template>
    <header class="resume-header" v-show="show">
        <figure class="avatar">
            <img :src="data.avatar" alt="user avatar" >
        </figure>
        <address class="contact">
            <ul>
                <li class="tel" id='tel'>
                    <a href="#">18800169213</a>
                </li>
                <li class="email">
                    <a :href="'mailto:'+data.email">{{data.email}}</a>
                </li>
                <li class="github">
                    <a :href="data.github" target="_blank">{{data.github}}</a>
                </li>
                <li class="blog">
                    <a :href="data.blog" target="_blank">{{data.blog}}</a>
                </li>
                <li class="weibo" id="weibo">
                    <a :href="data.weibo" target="_blank">{{data.weiboNickname}}</a>
                </li>
            </ul>
        </address>
        <section class="title">
            <div class="user-name">{{data.name}}</div>
            <div class="job-title">{{data.jobTitle}}</div>
        </section>
    </header>
</template>

<style scoped lang="less">

    .resume-header{
        display: flex;
        align-items: center;
        position: relative;
        padding: 30px 45px;
        background-color: #00BFA5;
        border-radius: 4px;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
        .avatar{
            img{
                width: 160px;
                height: 160px;
                border-radius: 50%;
                vertical-align: middle;
            }
        }
        li{
            position: relative;
            font-style: normal;
            padding: 10px 0;
            font-size: 18px;
            word-break: break-all;
            a{
                color: rgba(255,255,255,0.8);
                transition: all .3s ease-out;
                padding-left: 5px;
                vertical-align: middle;
                &:hover{
                    color: rgba(255,255,255,1);
                }
            }
            &:before{
                font-family: FontAwesome;
                color: rgba(255,255,255,0.9);
            }
            &.tel:before{
                content: "\f095";
            }
            &.email:before{
                content: "\f0e0";
            }
            &.github:before{
                content: "\f092";
            }
            &.blog:before{
                content: "\f09e";
            }
            &.weibo:before{
                content: "\f18a";
            }

            &#tel{
                display:none
            }
        }

        .contact{
            flex: 2;
            padding-left: 15px;
        }
        .title{
            flex: 1;
            padding-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .user-name{
                flex: 1;
                font-size: 72px;
                color: rgba(255,255,255,0.8);
                margin: 5px 0;
            }
            .job-title{
                flex: 1;
                font-size: 36px;
                color: rgba(255,255,255,0.8);
                margin: 5px 0;
            }
        }
    }

    @media screen and (max-width: 835px){
        .avatar{
            display: none;
        }
    }

    @media screen and (max-width: 675px){
        .resume-header{
            padding: 0;
            .contact{
                flex: 1;
            }
        }
    }

    @media screen and (max-width: 520px){
        .resume-header{
            padding: 0;
            .title{
                flex: 0.5;
                .user-name{
                    font-size: 36px;
                }
                .job-title{
                    font-size: 18px;
                }
            }
        }
    }

    @media print {
        .resume-header{
            border: none;
            box-shadow: none;
            figure{
                display: none;
            }
            li{
                a{
                    color: #000;
                }
                &#tel{
                    display:inline-block;
                }
                &#weibo{
                    display:none;
                }
            }
            .title{
                .user-name,.job-title{
                    color: #000;
                }
            }
        }
    }
</style>

<script>
    import {mapState} from 'vuex';

    export default{

        props:{
            show:Boolean
        },

        computed: {
            ...mapState({
                data: state => state.resume.profile
            })
        }
    };
</script>
