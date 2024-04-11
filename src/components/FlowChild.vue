<script>
export default {
    data(){
        return{
            
        }
    },
    props: [
        "parentFlowVal",
    ]
}
</script>

<template>
    <div class="childArea">
        <input type="text" :value="this.parentFlowVal" @input="$emit('update:parentFlowVal', $event.target.value)">
    </div>
</template>

<style lang="scss" scoped>
    .childArea{
        width: 400px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }
</style>