<template>
  <div class="mv-list">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="(item, index) in mvList" :key="index">
        <div class="swiper-slide-item">
          <div class="cover">
            <img v-lazy="`https://shp.qpic.cn/qqvideo_ori/0/${item.vid}_360_204/0`" alt="">
          </div>
          <h2 class="album-name">
            <a :href="`https://y.qq.com/n/yqq/mv/v/${item.vid}.html#stat=y_new.index.mv.mvname`">{{item.mvtitle}}</a>
          </h2>
          <h3 class="singer-name">
            <a :href="`https://y.qq.com/n/yqq/singer/${item.singers[0].mid}.html#stat=y_new.index.mv.singername`">{{item.singers[0].name}}</a>
          </h3>
          <div class="listen-num">
            <Icon class="icon-videocam" type="ios-videocam-outline" size="20" color="rgba(15, 255, 15, 0.75)"></Icon>
            <span class="num">{{item.listennum}}</span>
          </div>
          <br>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      mvList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 20,
          slidesPerGroup: 5,
          // loop: true,
          loopFillGroupWithBlank: false,
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // },
          navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.mv-list{
  // position: relative;
  margin: 0 10px;
}
.swiper{
  // padding-left: 5px;
  .swiper-slide:last-child{
    margin-right: 0;
  }
  .swiper-slide-item{
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:last-child{
      margin-right: 0;
    }
    .cover{
      flex: 0 0 80%;
      height: 80%;
      margin-bottom: 6px;
      img{
        width: 100%;
        overflow: hidden;
        transition: transform 1s;
        &:hover{
          cursor: pointer;
          transform: scale(1.05);
        }
      }
    }
    .album-name, .singer-name{
      text-align: left;
      max-width: 90%;
      text-overflow:ellipsis;
      white-space:nowrap;
      overflow:hidden;
      a {
        line-height: 20px;
      }
    }
    .listen-num{
      height: 20px;
      .num{
        vertical-align: top;
        font-size: 14px;
        font-weight: bold;
        padding-left: 4px;
      }
    }
  }
}
</style>
