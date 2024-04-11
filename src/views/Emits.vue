<script>
import emitsChild from '../components/EmitsChild.vue'
export default {
    data(){
        return{
            emitsVal:"",
        }
    },
    components:{
        emitsChild,
    },
    methods: {
        inputFromChild(x){
            this.emitsVal = x;
        }
    }
}
</script>

<template>
<h1>資料傳遞子傳父( Event out )</h1>
<h1>{{ this.emitsVal }}</h1>
<emitsChild @valChild="inputFromChild"/>
</template>

<style lang="scss" scoped>
    
</style>