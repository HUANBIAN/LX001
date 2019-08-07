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
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 800,
          h: 600
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
           w: 800,
          h: 600
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
           w: 800,
          h: 600
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
           w: 800,
          h: 600
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


