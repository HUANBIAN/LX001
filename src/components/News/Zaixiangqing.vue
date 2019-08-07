<template>
  <div class="neirong">
    <h3>图片详情</h3>
    <hr />

    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>

    <pinglun></pinglun>
  </div>
</template>

<script>
import pinglun from "../quanjuzujian/pingLun.vue";

export default {
  data() {
    return {
      slide1: [
        {
          src:
          "../../images/fab31b151b539ba82150d872b6a381f5.jpg",
           
          msrc:
             "../../images/0807225523.PNG",
          alt: "picture1",
          title: "Image Caption 1",
          w: 1200,
          h: 800
        },
        {
          src:
           "../../images/59a3aa12ebc76.jpg",
            
          msrc:
           "../../images/0807225426.PNG",
          alt: "picture2",
          title: "Image Caption 2",
           w: 1200,
          h: 800
        },
        {
          src:
          "../../images/59e41690c3794.jpg",
           
          msrc:
             "../../images/0807225453.PNG",
          alt: "picture2",
          title: "Image Caption 3",
           w: 1200,
          h: 800
        },
        {
          src:
          "../../images/5a6c1c841bac4.jpg",
           
          msrc:
            "../../images/0807225315.PNG",
          alt: "picture2",
          title: "Image Caption 4",
           w: 1200,
          h: 800
        }
      ]
    };
  },
  components: {
    pinglun
  },
  methods: {
    handleClose() {
      console.log("close event");
    }
  }
};
</script>

<style lang="scss" scoped>
.thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>


