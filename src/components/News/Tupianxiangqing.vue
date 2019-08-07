<template>
  <div>
    <mt-navbar v-model="selected">
  <mt-tab-item id="1" @click.native="getfeileitp">全部</mt-tab-item>
  <mt-tab-item id="2" @click.native="getfeileitp">旅游</mt-tab-item>
  <mt-tab-item id="3" @click.native="getfeileitp">静物</mt-tab-item>
</mt-navbar>



<ul class="lianjiazai">
  <router-link to="/home/Tupianxiangqing/Zaixiangqing" tag="li" v-for="item in tplist" :key="item.id">
    <img v-lazy="item.src">
    <div class="wenzi">
      <h4>{{item.title}}</h4>
      <p>{{item.zhaiyao}}</p>
    </div>
  </router-link>
</ul>
  </div>
</template>



<script>


export default {
  data() {
    return {
      selected:'1',
      tplist:[]
    };
  },
  created(){
    this.gettupianlist('1')
  },
  methods:{
    gettupianlist(id){
      this.$axios
      .get(`tupianku${id}.json`)
      .then(res => {
        this.tplist = res.data.tupianku
      })
      .catch(err => {
        console.log(err)
      })
    },
    getfeileitp(){
      this.gettupianlist(this.selected)
    }
  }
 
};
</script>

<style lang="scss" scoped>
a{
  color: #222;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
  li{
    position: relative;
    margin: 5px;
    p{
      color: #fff;
      font-size: 13px;
    }
    h4{
      font-size: 16px;
    }
  .wenzi{
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    background-color: rgba(0,0,0,0.3)
  }

  img{
    width: 100%;
    max-height: 220px;
    min-height: 220px;
    vertical-align: middle;
  }
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
}
}
</style>

