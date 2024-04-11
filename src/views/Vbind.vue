<script>
export default {
    data(){
        return{
            isRed: false,
            title: "title",
            imgText: "",
            h1Arr: [],
            selectArr: ["哈", "哈哈", "哈哈哈"],
            selectVal: "",
            isLarge: false,
            isDuration: false,
            imgArr: [
                {
                    name: "小火龍",
                    path: "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png"
                },
                {
                    name: "傑尼龜",
                    path: "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
                },
                {
                    name: "妙蛙種子",
                    path: "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png"
                }
            ]
        }
    },
    methods: {
        changeRed(){
            this.isRed = !this.isRed;
        },
        showText(Text){
            console.log(Text);
        }
    },
}
</script>

<template>
    <!-- v-model：雙向綁定變數與輸入標籤的value，包括select, textarea -->
    <!-- v-bind：雙向綁定變數與標籤的屬性 -->
    <div class="block" v-bind:class="{'red':this.isRed}"></div>
    <div class="block" :class="this.title"></div>
    <button type="button" @click="this.changeRed()">btn</button>



    <div>
        <label for="">小火龍</label>
        <input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png" v-model="this.imgText" name="cool">
        <label for="">傑尼龜</label>
        <input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png" v-model="this.imgText" name="cool">
        <label for="">妙蛙種子</label>
        <input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" v-model="this.imgText" name="cool">
        <img :src="this.imgText" alt="">
    </div>



    <div>
        <label for="">Large</label>
        <input type="checkbox" value="large" v-model="h1Arr">
        <label for="">Color</label>
        <input type="checkbox" value="color" v-model="h1Arr">
        <label for="">Duration</label>
        <input type="checkbox" value="duration" v-model="h1Arr">
        <h1 :class="this.h1Arr">COOL</h1>
    </div>


    <div>
        <select name="" id="" @change="this.showText(this.selectVal)" v-model="this.selectVal">
            <option value=""></option>
            <option :value="item" v-for="item in selectArr">{{ item }}</option> <!-- 用v-bind搭配v-for創建下拉選單的選項 -->
        </select>
    </div>



    <div>
        <label for="">Large</label>
        <input type="checkbox" value="true" v-model="this.isLarge">
        <label for="">Duration</label>
        <input type="checkbox" value="true" v-model="this.isDuration">
        <h1 :class="{
            large:this.isLarge,
            duration:this.isDuration
        }">TEST yooo!!!</h1>
    </div>



    <div>
        <img :src="item.path" alt="" v-for="item in imgArr">
    </div>

</template>

<style lang="scss" scoped>
    div{
        margin-bottom: 3%;
        background-color: rgb(194, 227, 255);
        border: 1px solid black;
    }

    .block{
        width: 200px;
        height: 200px;
        background: rgb(17,56,198);
        transition: all 0.3s;
    }

    .red{
        width: 300px;
        height: 300px;
        background: rgb(174,25,25);
    }

    .title{
        width: 300px;
        height: 300px;
        background: rgb(25, 174, 47);
    }

    .large{
        font-size: 10vw;
    }
    .color{
        color: burlywood;
    }
    .duration{
        text-decoration: underline;
    }

    img{
        width: 15dvw;
        height: 20dvh;
    }

</style>