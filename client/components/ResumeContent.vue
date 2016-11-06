<template>
    <article class="resume-content" v-show="show">
        {{data.name}} content
    </article>
</template>

<style scoped lang="less">
    .resume-content{
        color:blue
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
