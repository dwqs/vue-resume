<template>
    <div class="vue-resume">
        {{fetching}} - {{msg}}
        <resume-header></resume-header>
        <resume-content></resume-content>
        <resume-footer></resume-footer>
        <resume-float-right></resume-float-right>
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
    import {mapGetters,mapState} from 'vuex';

    import ResumeHeader from '@components/Header.vue';
    import ResumeContent from '@components/Content.vue';
    import ResumeFooter from '@components/Footer.vue';
    import ResumeFloatRight from '@components/FloatRight.vue';

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
            ResumeFloatRight
        }
    };
</script>
