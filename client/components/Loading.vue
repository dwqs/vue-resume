<template>
    <div class="resume-loading" v-show="show">
        <div class="loading-icon">正在加载...</div>
        <span>正在拼命加载中...</span>
    </div>
</template>

<style scoped lang="less">
    .resume-loading{
        display: inline-block;
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        text-align: center;
        font-size: 0;
        z-index: 11;
        background-color:#f0f2f1;
        @keyframes loadingCircle {
            0% {
                transform-origin: 50% 50%;
                transform: rotate(0deg);
            }
            100% {
                transform-origin: 50% 50%;
                transform: rotate(360deg);
            }
        }
        &:before{
            //垂直居中
            content: '';
            display: inline-block;
            vertical-align: middle;
            font-size: 0;
            width: 0;
            height: 100%;
        }
        .loading-icon{
            //steps:http://www.cnblogs.com/aaronjs/p/4642015.html
            animation: 0.85s loadingCircle steps(8) infinite;
            width: 16px;
            height: 16px;
            background-image:url(/images/loading.png);
            background-size: cover;
            position: relative;
            display: inline-block;
            vertical-align: middle;
        }
        span{
            vertical-align: middle;
            position: relative;
            display: inline-block;
            margin-left: 7px;
            color: #118BFA;
            font-size: 14px;
        }
    }
</style>

<script>

    export default{
        props:{
            //show:Boolean | [Boolean,String]
            show:{
                type:Boolean,
                default:false,
                required: true
            }
        }
    };
</script>
