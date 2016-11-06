<template>
    <header class="resume-header">
        {{msg}} - {{data.age}}11
    </header>
</template>

<style scoped lang="less">
    .resume-header{
        color:blue;
        position: relative;
    }
    .resume-header:before {
        content: "\f000";
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        /*--adjust as necessary--*/
        /*color: red;*/
        /*font-size: 18px;*/
        /*padding-right: 0.5em;*/
        /*position: absolute;*/
        /*top: 10px;*/
        /*left: 0;*/
    }
</style>

<script>
    import {mapState} from 'vuex';

    export default{

        data(){
            return {
                msg:'header'
            }
        },

        computed: {
            ...mapState({
                data: state => state.resume.profile
            })
        }
    };
</script>
