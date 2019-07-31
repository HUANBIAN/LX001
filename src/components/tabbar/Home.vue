<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.src" alt />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li
        class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
        v-for="item in xinwentt"
        :key="item.id"
      >
        <router-link :to="item.to">
          <img :src="item.tubiaosrc" alt />
          <div class="mui-media-body">{{ item.biaoti }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [],
      xinwentt: []
    };
  },
  created() {
    this.getluobotu(), this.getxinwentt();
  },
  methods: {
    getluobotu() {
      this.$axios
        .get("lunbo.json")
        .then(res => {
          this.lunbotuList = res.data.luoboobj;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getxinwentt() {
      this.$axios
        .get("xinwenliebiao.json")
        .then(res => {
          this.xinwentt = res.data.xinwenliebiaobt;
        })
        .catch(err => {
          console.log(err);
        });
    }
    // handleClick(){
    //   Toast({
    //      message:'加载失败！',
    //      duration: 1000
    //   })
    // }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img {
    height: 100%;
    width: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-table-view-cell {
    border: none;
  }
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
</style>
