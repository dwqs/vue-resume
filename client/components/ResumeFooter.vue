<template>
    <footer class="resume-footer">
        <p>
            {{text}} by <a href="https://github.com/dwqs/vue-resume.git" target="_blank">Pomy's resume generator</a>
        </p>
    </footer>
</template>

<style scoped lang="less">
    @media screen and (min-width: 960px){
        .resume-footer{
            position: absolute;
            padding: 20px 6px;
            z-index:1;
            left:0;
            bottom:-496px;
            width:100%;
            text-align:center;
            font-size:16px;
            color:#333;
            a{
                color:#00BFA5
            }
        }
    }

    @media screen and (max-width: 960px){
        .resume-footer{
            display: none;
        }
    }

    @media print {
        .resume-footer {
            display: none;
        }
    }
</style>

<script>

    export default{
        data (){
            return{
                text:'This resume is powered with Vue,Node.js and Webpack'
            };
        }
    };
</script>
