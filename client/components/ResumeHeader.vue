<template>
    <header class="resume-header">
        {{msg}} - {{data.age}}
    </header>
</template>

<style scoped lang="less">
    .resume-header{
        color:blue
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
