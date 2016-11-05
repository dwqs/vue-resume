<template>
    <div class="resume-content">
        {{msg}}
    </div>
</template>

<style scoped>
    .resume-content{
        color:blue
    }
</style>

<script>

    export default{
        data (){
            return{
                msg:'resume-content'
            };
        }
    };
</script>
