<template>
    <article class="resume-content" v-show="show">
       content
    </article>
</template>

<style scoped lang="less">
    .resume-content{
        margin-top: 20px;
        border-radius: 4px;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
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
