<template>
    <div class="vue" :class="{test:dev}">
        12my resume powered by vue
        <div v-show='data'>{{data.profile}}</div>
    </div>
</template>

<style scoped>
    .test{
        color:'red'
    }
</style>

<script>
    export default {
        data () {
            return {
                dev: true,
                data:''
            };
        },

        created () {
            console.log('vue created',this.dev);
            /**fetch('/resume').then((res)=>{
                return res.json();
            }).then((data)=>{
                console.log('data',data);
                this.data=data;
            })*/;
        },

        beforeMount (){
        },

        mounted (){

        },

        beforeUpdate (){

        }
    };
</script>
