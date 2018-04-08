<template>
  <div class="new-song">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="(item, index) in newSongList" :key="index">
        <div class="swiper-slide-item">
          <div class="cover left">
            <img v-lazy="`https://y.gtimg.cn/music/photo_new/T002R90x90M000${item.album.mid}.jpg?max_age=2592000`" alt="">
          </div>
          <div class="middle">
            <h4 class="title">
            <a :href="`https://y.qq.com/n/yqq/song/${item.mid}.html#stat=y_new.index.new_song.songname`">{{item.name}}</a>
            </h4>
            <span>{{item.singer[0].name}}</span>
            <br>
          </div>
          <div class="right">
            <span class="interval">{{item.interval | formatDuration}}</span>
          </div>
        </div>
        <br>
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
      newSongList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          slidesPerGroup: 3,
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
    },
    filters: {
      formatDuration: function(val) {
        let min = val / 60 | 0
        let sec = val % 60
        return (min > 10 ? `${min}` : `0${min}`) + ':' + (sec > 10 ? `${sec}` : `0${sec}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
.new-song{
  // position: relative;
  margin: 0 40px;
}
.swiper{
  // padding-left: 5px;
  .swiper-slide-item{
    height: 100%;
    display: flex;
    align-content: flex-start;
    .cover{
      height: 80%;
      img{
        width: 90px;
        height: 90px;
        transition: transform 0.5s;
        &:hover{
          cursor: pointer;
          transform: scale(1.05);
        }
      }
    }
    .middle{
      padding: 20px;
      text-align: left;
    }
    .right{
      position: absolute;;
      top: 40px;
      right: 40px;
    }
  }
}
</style>
