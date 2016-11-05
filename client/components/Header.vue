<template>
    <div class="resume-header">
        {{msg}}
    </div>
</template>

<style scoped>
    .resume-header{
        color:blue
    }
</style>

<script>

    export default{
        data (){
            return{
                msg:'resume-header'
            };
        }
    };
</script>
