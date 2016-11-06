<template>
    <div class="resume-loading" v-show="show">
        <div class="loading-icon">正在加载...</div>
    </div>
</template>

<style scoped lang="less">
    .resume-loading{
        display: flex;
        justify-items: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 11;
        background-color:#f0f2f1;
        text-align: center;
        .loading-icon{
            flex: 1;
            &:before {
                content: '\f110';
                font-family: FontAwesome;
                padding-right: 5px;
            }
        }
    }
</style>

<script>

    export default{
        props:{
            show:Boolean
        }
    };
</script>
