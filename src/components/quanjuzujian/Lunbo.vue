<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.src" :class="{'shiying':isshiying}"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbotuList", "isshiying"]
};
</script>

<style lang="scss">
.mint-swipe {
  height: 200px!important;
  text-align: center;
  background-color: #F8F8FF;
  img {
    height: 100%;
  }
}
.shiying{
  width: 100%;
}
</style>


