<template>
    <aside class="float-right">
        <ul>
            <li v-for="item in items">
                <a :href="item.link" @click.stop="printResume(item.isPrint)" target="_blank">{{item.text}}</a>
            </li>
        </ul>
    </aside>
</template>

<style scoped lang="less">
    @media print {
        .float-right {
            display: none;
        }
    }

    @media screen and (min-width: 1140px){
        .float-right{
            position: fixed;
            right: 0;
            top: 30%;
            z-index: 2;
            li{
                margin-bottom: 10px;
                border-radius: 10px 0 0 10px;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
                background-color: #00BFA5;
                cursor: pointer;
                a{
                    display: inline-block;
                    width: 80px;
                    height: 38px;
                    line-height: 38px;
                    padding-left: 10px;
                    color: rgba(255,255,255,0.8);
                    transition: all .3s ease-out;
                    &:hover{
                        color: rgba(255,255,255,1);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1140px){
        .float-right{
            display: none;
        }
    }
</style>

<script>

    export default{
        data (){
            return{
                items:[{
                    text:"源代码",
                    link:"https://github.com/dwqs/vue-resume.git",
                    isPrint: false
                },{
                    text:"Github",
                    link:"https://github.com/dwqs",
                    isPrint:false
                },{
                    text:"Blog",
                    link:"https://github.com/dwqs/blog",
                    isPrint:false
                },{
                    text:"PDF下载",
                    link:"/袁康-前端开发.pdf",
                    isPrint:false
                },{
                    text:"打印简历",
                    link:"#",
                    isPrint:true
                }]
            };
        },

        methods:{
            printResume(isPrint){
                if(isPrint){
                    window.print();
                }
            }
        }
    };
</script>
