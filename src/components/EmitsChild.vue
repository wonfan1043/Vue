<script>
export default {
    data(){
        return{
            childVal: "來自子元件的變數",
        }
    },
    methods:{
        outputToParent(){
            this.$emit('valChild', this.childVal);
        }
    }
}
</script>

<template>
    <div class="block">
        <button type="button" @click="this.outputToParent()">將值傳給父層</button>
    </div>
</template>

<style lang="scss" scoped>

    .block{
        width: 400px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid black;

        button{
            width: 200px;
            height: 50px;
            font-size: 24pt;
        }
    }


</style>