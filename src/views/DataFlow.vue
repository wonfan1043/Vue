<script>
import FlowChild from '../components/FlowChild.vue'

export default {
    data(){
        return{
            flowParentVal: "",
        }
    },
    components:{
        FlowChild,
    }
}
</script>

<template>
<h1>{{ this.flowParentVal }}</h1>
<FlowChild v-model:parentFlowVal="this.flowParentVal" />

</template>

<style lang="scss" scoped>
    
</style>