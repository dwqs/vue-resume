<template>
    <div class="vue-resume">
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

    import ResumeHeader from '@components/Header.vue';
    import ResumeContent from '@components/Content.vue';
    import ResumeFooter from '@components/Footer.vue';
    import ResumeFloatRight from '@components/FloatRight.vue';

    export default {
        components:{
            ResumeHeader,
            ResumeContent,
            ResumeFooter,
            ResumeFloatRight
        }
    };
</script>
