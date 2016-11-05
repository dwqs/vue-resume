<template>
    <div class="resume-header">
        {{msg}} - {{data.age}}
    </div>
</template>

<style scoped>
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
