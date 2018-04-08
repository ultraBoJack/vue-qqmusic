<template>
  <div class="focus-list">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="(item, index) in focusList" :key="index">
        <div class="swiper-slide-item">
          <div class="cover">
            <img v-lazy="item.pic_info.url" alt="">
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
  export default {
    props: {
      focusList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          spaceBetween: 20,
          slidesPerGroup: 2,
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
*{
  box-sizing: border-box;
}
.focus-list{
  // position: relative;
  margin: 0 10px;
  background:linear-gradient(to bottom, rgba(245,245,245,0.5), rgba(255,255,255,1));
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
