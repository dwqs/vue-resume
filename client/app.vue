<template>
    <div class="vue" :class="{test:dev}">
        12my resume powered by vue
        <div v-show='data'>{{data.name}}</div>
    </div>
</template>

<style scoped>
    .test{
        color:red
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
            fetch('/resume').then((res)=>{
                return res.json();
            }).then((data)=>{
                this.data = data.resume;
            }).catch((err) => console.log('error',err));
        },

        beforeMount (){
        },

        mounted (){

        },

        beforeUpdate (){

        }
    };
</script>
