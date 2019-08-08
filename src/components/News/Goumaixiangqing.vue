<template>
  <div>
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterenter">
      <div class="xiaoqiu" v-show="isshow" ref="ball"></div>
    </transition>

    <div class="mui-card">
      <lunbo :lunbotuList="lunbolist" :isshiying="false"></lunbo>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{shangpingxiangqing.xinghao}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价:
            <del>￥{{shangpingxiangqing.shichangjiang}}</del>
            &nbsp;&nbsp;&nbsp;&nbsp;
            销售价:
            <span>￥{{shangpingxiangqing.xiaoshoujia}}</span>
          </p>
          <p>
            购买数量:
            <jianshuqi @zzsl="goumaishuliangzhongzhuan" :max="shangpingxiangqing.kucun"></jianshuqi>
          </p>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="jiarugouwuchedonghua">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>编号：{{shangpingxiangqing.bianhao}}</p>
          <p>库存：{{shangpingxiangqing.kucun}}</p>
          <p>上架时间：{{shangpingxiangqing.sahngjiashijian}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <router-link
          to="/home/Goumai/Goumaixiangqing/tuwenjieshao"
          tag="button"
          type="button"
          class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined"
        >图文介绍</router-link>
        <button
          type="button"
          class="mui-btn mui-btn-warning mui-btn-block mui-btn-outlined"
          @click="gopinglun"
        >商品评论</button>
      </div>
    </div>
  </div>
</template>

<script>
import lunbo from "../quanjuzujian/Lunbo.vue";
import jianshuqi from "../quanjuzujian/jianshuqi.vue";

export default {
  data() {
    return {
      lunbolist: [],
      shangpingxiangqing: {},
      isshow: false,
      goumaishuliang:1
    };
  },
  created() {
    this.getlunbo();
    this.getshangpingxiangqing();
  },
  methods: {
    getlunbo() {
      this.$axios
        .get("shoujisuolue.json")
        .then(res => {
          this.lunbolist = res.data.luoboobj;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getshangpingxiangqing() {
      this.$axios
        .get("shangpingxiangqing.json")
        .then(res => {
          this.shangpingxiangqing = res.data.spxq;
        })
        .catch(err => {
          console.log(err);
        });
    },
    gopinglun() {
      this.$router.push("/home/Goumai/Goumaixiangqing/pinglun");
    },
    jiarugouwuchedonghua() {
      this.isshow = !this.isshow;
    },
    beforeEnter(el){
        el.style.transform = 'translate(0, 0)'

    },
    enter(el,done){
        el.offsetWidth;
        const ballweizhi = this.$refs.ball.getBoundingClientRect()
        const huibiaoweizhi = document.getElementById('huibiao').getBoundingClientRect()
        const x = huibiaoweizhi.left - ballweizhi.left
        const y = huibiaoweizhi.top - ballweizhi.top 
        el.style.transform = `translate(${x}px, ${y}px)`
        el.style.transition = 'all 0.75s ease'
        done()

    },
    afterenter(el){
        this.isshow = !this.isshow

    },
    goumaishuliangzhongzhuan( zgoumaishuliang ){
      this.goumaishuliang = zgoumaishuliang
      // console.log(`子组件传过来的值：${zgoumaishuliang}`)
    }
  },
  components: {
    lunbo,
    jianshuqi
  }
};
</script>



<style lang="scss" scoped>
.mui-card-content-inner {
  span {
    color: red;
  }
}
.mui-card-footer,
.mui-card-header {
  display: block;
}
.mui-btn-block {
  padding: 8px 0;
}
.xiaoqiu {
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  left: 140px;
  top: 318px;
}
</style>


