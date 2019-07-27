<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <mt-button type="primary" size="normal">点击</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getluobotu()
  },
  methods: {
    getluobotu() {
      this.$axios
        .get("./apiInterface/lunbo.json")
        .then( res => {
             this.lunbotuList = res.data.luoboobj 
        })
        .catch( err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img{
    height: 100%;
    width: 100%;
  }
}
</style>
