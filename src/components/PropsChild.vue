<script>
export default {
    data(){
        return{
            childOne: "childOne",
        }
    },
    props: [
        "valParent",
        "arrParent",
        "objParentName",
        "objParentType",
        "objParentSPecies",
        "objParentColor"
    ]
}
</script>

<template>
    <div class="childArea">
        <p>子元件自己的變數：{{ childOne }}</p>
        <p>來自父元件的變數1: {{ this.valParent }}</p>
        <p>來自父元件的變數2: {{ this.arrParent }}</p>
        <p>來自父元件的變數3: {{ this.objParentName }}</p>

        <input type="text" v-model="this.objParentName">
        <input type="text" v-model="this.objParentType">
        <input type="text" v-model="this.objParentSPecies">
        <input type="text" v-model="this.objParentColor">
    </div>
</template>

<style lang="scss" scoped>
    
    .childArea{
        width: 40%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid black;
    }

</style>