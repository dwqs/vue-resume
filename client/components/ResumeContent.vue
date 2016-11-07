<template>
    <main class="resume-content" v-show="show">
       <article id="paga1">
           page1
       </article>
       <article id="paga2">
            page211
       </article>
    </main>
</template>

<style scoped lang="less">
    .resume-content{
        position: relative;
        margin-top: 20px;
        border-radius: 4px;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
        article{

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
