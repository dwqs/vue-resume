<template>
    <div class="resume-content">
        {{data.name}} - {{msg}}
    </div>
</template>

<style scoped lang="less">
    .resume-content{
        color:blue
    }
</style>

<script>
    import {mapState} from 'vuex';

    export default{
        data (){
            return{
                msg:'resume-content'
            };
        },

        computed: {
            ...mapState({
                data: state => state.resume.profile
            })
        }
    };
</script>
