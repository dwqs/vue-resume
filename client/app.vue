<template>
    <div class="vue-resume">
        <loading :show="fetching"></loading>
        <resume-header :show="!fetching"></resume-header>
        <resume-content :show="!fetching"></resume-content>
        <float-right></float-right>
        <resume-footer></resume-footer>
    </div>
</template>

<style scoped lang="less">
    //@import "./test.less";
    @media screen and (min-width:960px){
        .vue-resume{
            position: relative;
            max-width: 960px;
            height: 1024px;
            margin: 15px auto;
        }
    }

    @media print {
        body {
            background: transparent;
        }

        .vue-resume{
            background: transparent;
            width: 1000px;
            margin-top: 0;
        }
    }

</style>

<script>
    import {mapGetters,mapActions} from 'vuex';

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

        methods:mapActions(['getResumeData']),

        created (){
            //实例的属性已经生成,可以通过 this.fetching 访问
            //this.$store.dispatch('getResumeData');
            //same as
            this.getResumeData();
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
