<template>
  <div class="recommend">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="(item, index) in recommendList" :key="index">
        <div class="swiper-slide-item">
          <div class="cover">
            <img v-lazy="item.cover" alt="">
          </div>
          <h4 class="title">
            <a :href="`https://y.qq.com/n/yqq/playsquare/${item.content_id}.html#stat=y_new.index.playlist.name`">{{item.title}}</a>
          </h4>
          <div class="listen-number">
            <span>播放量: <span class="number">{{item.listen_num}}</span></span>
          </div>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  import { getRecommendList } from './getRecommendList'
  export default {
    data() {
      return {
        recommendList: [],
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
    },
    created() {
      this.initRecommendList()
    },
    methods: {
      initRecommendList() {
        getRecommendList()
          .then((res) => {
            this.recommendList = res.recomPlaylist.data.v_hot
          }).catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
.recommend{
  // position: relative;
  margin: 0 10px;
}
.swiper{
  // padding: 5px;
  .swiper-slide:last-child{
    margin-right: 0;
  }
  .swiper-slide-item{
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    .title, .listen-number{
      max-width: 90%;
      text-overflow:ellipsis;
      white-space:nowrap;
      overflow:hidden;
    }
    .listen-number{
      .number{
        font-weight: 800;
        line-height: 1.2;
      }
    }
  }
  .swiper-button-prev{
    left: 0px;
  }
  .swiper-button-next{
    right: 0px;
  }
}
</style>
