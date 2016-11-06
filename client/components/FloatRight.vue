<template>
    <aside class="float-right">
        <ul>
            <li>
                <a href="https://github.com/dwqs/vue-resume.git" :target="target">源代码</a>
            </li>
            <li>
                <a href="https://github.com/dwqs" :target="target">Github</a>
            </li>
            <li>
                <a href="https://github.com/dwqs/blog" :target="target">Blog</a>
            </li>
            <li>
                <a href="#" :target="target">PDF下载</a>
            </li>
        </ul>
    </aside>
</template>

<style scoped lang="less">
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
</style>

<script>

    export default{
        data (){
            return{
                target:'_blank'
            };
        }
    };
</script>
