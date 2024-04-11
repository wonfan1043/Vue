<script>
export default {
    data(){
        return{
            text:"Test"
        }
    },
    methods:{
        test(){  //test: function(){}
            console.log(this.text)
        },
        inputVal(){
            console.log("keydown.Enter = > EventVal")
        },
        selectVal(){
            console.log("change => Event");
        }
    }
}
</script>

<template lang="">
    <div>
        <h1>測試標籤</h1>
        <!-- <button type="button" v-on:click="this.test">BTN</button> -->
        <button type="button" @click="this.test">BTN</button>
        <input type="text" @input="this.test">
        <input type="text" @keydown.enter="this.inputVal">

        <select @change="this.selectVal">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
</template>

<style lang="scss">
    
</style>