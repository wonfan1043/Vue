<script>
import Header from '../components/Header.vue'
export default {
    data() {
        return {
            arr: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
        }
    },
    components:{
        Header
    }
}
</script>

<template lang="">
    <div class="big">
        <div class="block" v-for="(item, index) in arr">
            <h1>{{ item }}</h1>
            <h1 v-text="index"></h1>
        </div>
    </div>

    <Header v-for="item in arr" />
</template>

<style lang="scss" scoped>
.big{
    width: 400px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
}
.block {
    width: 100px;
    height: 100px;
    background: rgb(239, 159, 159);
    margin: 1%;
}
</style>