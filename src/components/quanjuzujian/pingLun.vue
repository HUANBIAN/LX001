<template>
  <div>
    <br />
    <br />
    <h4>用户评论</h4>
    <hr />
    <div class="mui-input-row" style="margin: 10px 5px;">
      <textarea id="textarea" rows="5" placeholder="最多吐槽120字" maxlength="120"></textarea>
    </div>
    <button type="button" class="mui-btn mui-btn-primary mui-btn-block">发表评论</button>
    <ul class="mui-table-view" v-for="item in pinglunneirong" :key="item.id">
      <li class="mui-table-view-cell">
        <p>
          <span>{{item.yonghu}} 发表时间：{{item.shijian | dateFormat}}</span>
          <span>{{item.id+1}}楼</span>
        </p>
        <p>{{item.pinglun}}</p>
      </li>
    </ul>
    <br />
    <button type="button" class="mui-btn mui-btn-block mui-btn-outlined" @click="xiaoxitishi">加载更多</button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pinglunneirong: [],
      pinglunneirongindex: 1
    };
  },
  created() {
    this.getppinglunneirong();
  },
  methods: {
    getppinglunneirong() {
      this.$axios
        .get("pinglunneirong.json")
        .then(res => {
          this.pinglunneirong = res.data.neirong;
        })
        .catch(err => {
          console.log(err);
        });
    },
        xiaoxitishi() {
      Toast({
        message: "没有更多了",
        duration: 1000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
select,
textarea {
  font-size: 14px;
}
.mui-btn-block {
  font-size: 14px;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 0;
}

.mui-table-view-cell {
  padding: 1px;
  p:nth-child(1) {
    display: flex;
    justify-content: space-between;
    background-color: #ccc;
    color: #000;
    span {
      padding: 2px 5px;
    }
  }
  p:nth-child(2) {
    padding: 5px 15px;
  }
}
</style>


