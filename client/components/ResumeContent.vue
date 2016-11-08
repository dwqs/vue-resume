<template>
    <main class="resume-content" v-show="show">
       <article :class="{active:prev,inactive:!prev}" @click="prev = false">
           page1
       </article>
       <article :class="{active:!prev,inactive:prev}" @click="prev = true">
            page222222
       </article>
       <footer class="main-footer">
           <span @click="changePage(true)" v-show="!prev">上一页</span>
           <span @click="changePage(false)"  v-show="prev">下一页</span>
       </footer>
    </main>
</template>

<style scoped lang="less">
    .resume-content{
        position: relative;
        height: 780px;
        margin-top: 20px;
        article{
            position: absolute;
            width: 100%;
            height: 730px;
            transform-origin: 50% 0%;
            transition: 1s;
            backface-visibility:hidden;
            cursor: pointer;
            background-color: #f0f2f1;
            box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
            border-radius: 4px;
            &.active{
                transform: rotateY(0deg);
            }

            &.inactive{
                transform: rotateY(180deg);
            }
        }

        .main-footer{
            position: absolute;
            left: 0;
            bottom: 10px;
            width: 100%;
            span{
                cursor: pointer;
                display: inline-block;
                padding: 6px 12px;
                border-radius: 4px;
                color: rgba(0,191,165,0.8);
                &:hover{
                    color: rgba(0,191,165,1);
                }
                &:last-child{
                    float: right;
                    &:after{
                        clear: both;
                    }
                }
            }
        }
    }
</style>

<script>
    import {mapState} from 'vuex';

    export default{

        data(){
            return{
                prev: true
            }
        },

        props:{
            show:Boolean
        },

        computed: {
            ...mapState({
                data: state => state.resume.profile
            })
        },

        methods: {
            changePage(type){
                this.prev = type;
            }
        }
    };
</script>
