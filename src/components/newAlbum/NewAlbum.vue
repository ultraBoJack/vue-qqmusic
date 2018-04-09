<template>
  <div class="newAlbum-list">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="(item, index) in newAlbumList" :key="index">
        <div class="swiper-slide-item">
          <div class="cover">
            <img v-lazy="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`" alt="">
          </div>
          <h3 class="album-name">
            <a :href="`https://y.qq.com/n/yqq/album/${item.album_mid}.html#stat=y_new.index.album.albumname`">{{item.album_name}}</a>
          </h3>
          <h4 class="singer-name">
            <a :href="`https://y.qq.com/n/yqq/singer/${item.singers[0].singer_mid}.html#stat=y_new.index.album.singername`">{{item.singers[0].singer_name}}</a>
          </h4>
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
      newAlbumList: {
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
.newAlbum-list{
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
      max-width: 100%;
      text-overflow:ellipsis;
      white-space:nowrap;
      overflow:hidden;
      a {
        line-height: 20px;
      }
    }
  }
}
</style>
