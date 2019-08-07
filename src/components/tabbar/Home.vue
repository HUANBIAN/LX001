<template>
  <div>
    <lunbo :lunbotuList="lunbotuList"></lunbo>

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
import lunbo from '../quanjuzujian/Lunbo.vue'

export default {
  data() {
    return {
      lunbotuList: [],
      xinwentt: []
    };
  },
  components:{
    lunbo
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
  }
};
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  // display: flex;
  margin: 0 2px;
  li{
    width: 33%;
  }
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
