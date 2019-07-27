<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <mt-button type="primary" size="normal">点击</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // this.getLunbotu();
  },
  methods: {
    // getLunbotu() {
    //   this.$http
    //     .get("http://vue.studyit.io/api/getnewslist")
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(`错误信息：${error}`);
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
</style>
