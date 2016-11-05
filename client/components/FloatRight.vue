<template>
    <div class="float-right">
        {{msg}}
    </div>
</template>

<style scoped>
    .float-right{
        color:blue
    }
</style>

<script>

    export default{
        data (){
            return{
                msg:'float-right'
            };
        }
    };
</script>
