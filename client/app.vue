<template>
    <div class="vue-resume">
        {{fetching}} - {{msg}}
        <loading :show="fetching"></loading>
        <resume-header></resume-header>
        <resume-content></resume-content>
        <resume-footer></resume-footer>
        <float-right></float-right>
    </div>
</template>

<style scoped>
    .vue-resume{
        margin: 0 auto;
        width: 960px;
        border: 1px solid blue
    }
</style>

<script>
    import {mapGetters} from 'vuex';

    import Loading from '@components/Loading.vue';
    import ResumeHeader from '@components/ResumeHeader.vue';
    import ResumeContent from '@components/ResumeContent.vue';
    import ResumeFooter from '@components/ResumeFooter.vue';
    import FloatRight from '@components/FloatRight.vue';

    //:todo='fetching' 是传递父组件的属性fetching给子组件
    //todo='fetching' 是传递一个字符串('fetching')给子组件

    export default {
        data(){
            return{
                msg:"APP"
            }
        },
        computed:{
            ...mapGetters({
               fetching:'getFetching'
            })
        },
        created (){
            //实例的属性已经生成,可以通过 this.fetching 访问
            this.$store.dispatch('getResumeData');
        },

        components:{
            ResumeHeader,
            ResumeContent,
            ResumeFooter,
            FloatRight,
            Loading
        }
    };
</script>
