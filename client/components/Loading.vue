<template>
    <div class="resume-loading" v-show="show">
        正在加载...
    </div>
</template>

<style scoped>
    .resume-loading{
        background-color:#ff0000;
    }
</style>

<script>

    export default{
        props:{
            show:Boolean
        }
    };
</script>
