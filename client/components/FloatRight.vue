<template>
    <div class="float-right">
        {{msg}}
    </div>
</template>

<style scoped lang="less">
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
