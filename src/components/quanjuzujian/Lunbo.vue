<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.src" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbotuList"]
};
</script>

<style lang="scss">
.mint-swipe {
  height: 200px!important;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>


