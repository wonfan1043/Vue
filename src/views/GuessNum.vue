<script>
export default {
    data() {
        return {
            ans:"",
            title:"猜一個數字",
            lowest:"1",
            result:"-",
            heighest:"100",
            number:""
        }
    },
    methods: {
        createAns(){
            this.lowest = "1";
            this.result = "-";
            this.heighest = "100";
            let ansNew = Math.floor(Math.random() * 100);
            this.ans = ansNew;
            console.log(ans);
        },
        hint() {
            console.log(this.ans);
            console.log(this.number);

            this.title = "猜一個數字";

            if(this.number < 1 || this.number > 100){
                this.title = "眼盲??? 範圍錯誤!!!";
                return;
            }
            if(this.ans == this.number){
                this.lowest = "";
                this.result = `${this.ans}　BINGO!!!`;
                this.heighest = "";
                return;
            }
            if(this.ans < this.number){
                this.heighest = this.number;
                return;
            }
            if(this.ans > this.number){
                this.lowest = this.number;
                return;
            }
        },
        earse(){
            this.number = "";
        }
    }
}
</script>

<template> <!-- 就是html的Body標籤 -->
    <div class="sec">
        <div class="start">
            <button type="button" id="btn1" @click="this.createAns">Click to Start or Reset</button>
        </div>
        <h1 id="title" v-text="this.title"></h1>
        <div class="numRange">
            <h1 id="lowest" v-text="this.lowest"></h1>
            <h1 id="result" v-text="this.result"></h1>
            <h1 id="heighest" v-text="this.heighest"></h1>
        </div>
        <div class="keyIn">
            <input type="number" id="number" v-model="this.number" @click="this.earse">
        </div>
        <div class="go">
            <button type="button" id="btn2" @click="this.hint">GO!</button>
        </div>
    </div>
</template>

<!-- scoped 獨立化的意思，不會去影響其他vue檔案 -->
<style lang="scss" scoped>
    .sec{
        width:50%;
        height: 80vh;
        margin-left: 25%;
        border: 1px solid black;

        .start{
            height: 5%;
            margin-top: 10%;
            margin-bottom: 10%;

            #btn1{
                width: 30%;
                height: 100%;
                border-radius: 10px;
                padding-top: 2px;
                cursor: pointer;
            }
        }

        #title{
            font-size: xx-large;
            margin-top: 3%;
        }

        .numRange{
            margin-top: 3%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
        }

        .keyIn{
            height: 5%;
            margin-top: 3%;

            #number{
                width: 50%;
                height: 100%;
                border-radius: 10px;
            }
        }

        .go{
            height: 5%;
            margin-top: 3%;

            #btn2{
                width: 25%;
                height: 100%;
                border-radius: 10px;
                padding-top: 2px;
                cursor: pointer;
            }
        }
    }
</style>