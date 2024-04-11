<script>
export default {
    data() {
        return {
            showText: true,
            modelText: "",
            modelLazy: "",
            modelNumber: "",
            modelTrim: "",
            modelRadio:"",
            modelCheckbox:[],    // 複選資料型態的宣告要是陣列
            modelSelect:""
        }
    },
    components: {

    }
}
</script>

<template>
    <!-- v-text -->
    <h1 v-text="showText ? 'xxx' : 'yyy'"></h1>
    <h1>CCC</h1>
    <h1>{{ showText ? 'xxx' : 'yyy' }}</h1> <!-- 效果同 v-text -->
    <h1 v-text="`shvuifhuhlfdul${this.showText ? 'xxx' : 'yyy'}`"></h1>
    <h1 v-text="'dsfsgbf' + (this.showText ? 'xxx' : 'yyy')"></h1>
    <h1>{{ 'dsfsgbf' + (this.showText ? 'xxx' : 'yyy') }}</h1>

    <!-- v-model -->
    <input type="number" v-model="this.modelText">
    <h1>{{ this.modelText }}</h1>

    <input type="text" v-model.lazy="this.modelLazy">
    <h1>v-model.lazy={{ this.modelLazy }}</h1>

    <input type="number" v-model.number="this.modelNumber">
    <h1>v-model.number={{ this.modelNumber }}</h1>

    <input type="text" v-model.trim="this.modelTrim">
    <h1>v-model.trim={{ this.modelTrim }}</h1>

    <!-- 單選題 -->
    <label for="">小火龍</label>
    <input type="radio" value="小火龍" v-model="this.modelRadio" name="pokemon">
    <label for="">傑尼龜</label>
    <input type="radio" value="傑尼龜" v-model="this.modelRadio" name="pokemon">
    <label for="">妙蛙種子</label>
    <input type="radio" value="妙蛙種子" v-model="this.modelRadio" name="pokemon">
    <h1>{{ this.modelRadio }}</h1>

    <!-- 多選題 -->
    <label for="">雞肉</label>
    <input type="checkbox" value="雞肉" v-model="this.modelCheckbox" name="food">
    <label for="">牛肉</label>
    <input type="checkbox" value="牛肉" v-model="this.modelCheckbox" name="food">
    <label for="">豬肉</label>
    <input type="checkbox" value="豬肉" v-model="this.modelCheckbox" name="food">
    <h1>{{ this.modelCheckbox }}</h1>
    
    <!-- 選單 -->
    <select name="" id="" v-model="this.modelSelect">
        <option value="">請選擇</option>
        <option value="早餐">早餐</option>
        <option value="中餐">中餐</option>
        <option value="晚餐">晚餐</option>
    </select>
    <h1>{{ this.modelSelect }}</h1>

</template>

<style scoped lang="scss"></style>
