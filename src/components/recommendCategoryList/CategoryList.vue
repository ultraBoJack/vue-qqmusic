<template>
  <div class="category-list">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="(item, index) in categoryList" :key="index">
        <div class="swiper-slide-item">
          <div class="cover">
            <img v-lazy="item.cover_url_small" alt="">
          </div>
          <h4 class="title">
            <a :href="`https://y.qq.com/n/yqq/playsquare/${item.tid}.html#stat=y_new.index.playlist.name`">{{item.title}}</a>
          </h4>
          <div class="listen-number">
            <span class="number">{{`播放量: ${item.access_num}`}}</span>
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
      categoryList: {
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
.category-list{
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
}
</style>
