<template>
  <div class="shangping-list">

    <div class="shangping" v-for="item in shoujikulist" :key="item.src" @click="tiaozhaung">
      <img :src="item.src" alt />
      <h1>{{item.title}}</h1>
      <div>
        <p class="jiage">
          <span>{{item.xianjia}}</span>
          <span>{{item.jiujia}}</span>
        </p>
        <p class="kuquan">
          <span>{{item.zhuangtai}}</span>
          <span>库存:{{item.kucun}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      shoujikulist:[]
    }
  },
  created(){
    this.getshoujiku()
  },
  methods:{
    getshoujiku(){
      this.$axios
      .get('shoujiku.json')
      .then(res => {
        this.shoujikulist = res.data.shoujiku
      })
      .catch(err => {
        console.log(err)
      })
    },
    tiaozhaung(){
      this.$router.push('/home/Goumai/Goumaixiangqing')
    }
  }
};
</script>

<style lang="scss" scoped>
.shangping-list {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;
  .shangping {
    width: 49%;
    border: 1px #ccc solid;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 260px;
    p {
      margin: 0;
      padding: 0;
    }
    img {
      width: 100%;
      max-height: 150px;
      min-height: 150px;
    }
    h1 {
      font-size: 16px;
      margin-left: 4px;
    }
    div {
        padding: 5px;
      background-color: #ccc;
      .jiage{
          span:nth-child(1){
              color: red;
              font-weight: bold;
          }
          span:nth-child(2){
            //   color: red;
            font-size: 12px;
            text-decoration: line-through;
            margin-left: 20px
          }
      }
      .kuquan{
          font-size: 13px;
          display: flex;
          justify-content: space-between;
      }
    }
  }
}
</style>


