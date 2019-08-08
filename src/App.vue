<template>
  <div class="content">
    <!-- <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">项目001</h1>
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    </header> -->

    <transition>
      <router-view></router-view>
    </transition>


    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-fb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-fb" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-fb" to="/shopping">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="huibiao">0</span>
        </span>
        <span class="mui-tab-label">购物</span>
      </router-link>
      <router-link class="mui-tab-item-fb" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
  // margin-top: 44px;
  overflow: hidden;
  margin-bottom: 50px;
}
// .mui-active {
//   background-color: #999;
// }
.v-enter{
    opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}

.mui-bar-tab .mui-tab-item-fb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-fb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-fb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>



