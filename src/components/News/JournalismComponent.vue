<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsListDetails" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.touxiang" />
          <div class="mui-media-body">
            <h1>{{item.biaoti}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间: {{item.fabiaoshijian | dateFormat}}</span>
              <span>点击次数: {{item.dianjicishu}}}</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            newsListDetails: []
        }
    },
    created(){
        this.getNewsListDetails()
    },
    methods: {
        getNewsListDetails(){
            this.$axios
            .get('xinwenxiangqing.json')
            .then(res => {
                this.newsListDetails = res.data.xinwenxiangqing
            })
            .catch( err => {
                console.log( err )
            } )
        }
    }
};
</script>

<style lang="scss" scoped>
.mui-media-body {
  h1 {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mui-ellipsis {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }
}
</style>

