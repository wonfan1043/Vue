<script>
export default {
    data() {
        return {
            showBlock: false,
            car: 1,
        }
    },
    methods: {
        change() {
            this.showBlock = !this.showBlock;
        }
    }
}
</script>

<template>
    <div v-show="this.showBlock" class="show">我是v-show</div>
    <!-- 即 if(this.showBlock) -->
    <div v-if="!this.showBlock" class="ifshow">我是v-if</div>
    <button type="button" @click="change()">btn</button>



    <select name="" id="" v-model="car">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>

    <!-- if(this.car == 1) -->
    <h1 v-if="this.car == 1">董卓有豪宅</h1>
    <h1 v-else-if="this.car == 2">董卓有跑車</h1>
    <h1 v-else>董卓開火箭</h1>

    <h1 v-if="this.car == 1">董卓有豪宅</h1> <!-- 這個if會變獨立的，因為else只會往上抓一個if -->
    <h1 v-if="this.car == 2">董卓有跑車</h1>
    <h1 v-else>董卓開火箭</h1>
</template>

<style lang="scss" scoped>
.show {
    width: 200px;
    height: 200px;
    background: rgb(244, 25, 6);
}

.ifshow {
    width: 200px;
    height: 200px;
    background-color: rgb(25, 177, 42);
}
</style>