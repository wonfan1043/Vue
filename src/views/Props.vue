<script>
import propsChild from '../components/PropsChild.vue';
export default {
    data(){
        return{
            parentVal: "parent",
            parentArr: ["挖系", "拎老爸"],
            parentObj: {
                name:"可口可樂",
                type: "臘腸",
                species: "狗",
                color: "金黃色",
            }
        }
    },
    components:{
        propsChild,
    }
}
</script>

<template>
    <div>
        <h1>資料傳遞父傳子 (Props In)</h1>
        <h1>我是父層</h1>
        <propsChild :valParent="this.parentVal"
                    :arrParent="this.parentArr"
                    :objParentName="this.parentObj.name"
                    :objParentType="this.parentObj.type"
                    :objParentSPecies="this.parentObj.species"
                    :objParentColor="this.parentObj.color"/>
    </div>
</template>

<style lang="scss" scoped>
    
</style>