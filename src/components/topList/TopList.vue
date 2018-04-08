<template>
  <div class="top-list">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide class="swiper-slide-item" v-for="(item, index) in topList" :key="index">
        <div class="slide-item-wrapper">
          <div class="title1">巅峰榜</div>
          <h1 class="title2">{{item.name.split('·')[item.name.split('·').length - 1]}}</h1>
          <div class="divider"></div>
          <div class="list-container">
            <ul>
              <li class="item" v-for="(item2, index2) in item.songlist" :key="index2">
                <div class="item-index">{{index2 + 1}}</div>
                <div class="description">
                  <h3 class="track-name">{{item2.track_name}}</h3>
                  <h4 class="singer-name">{{item2.singer_name}}</h4>
                </div>
              </li>
            </ul>
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
      topList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 6,
          slidesPerColumn: 1,
          spaceBetween: 20,
          slidesPerGroup: 6,
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
.top-list{
  // position: relative;
  margin: 0 10px;
}
.swiper{
  // padding-left: 5px;
  .swiper-slide-item{
    padding: 30px 0;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .slide-item-wrapper{
      width: 100%;
    }
    .title1{
      color: #fff;
      font-size: 20px;
      line-height: 36px;
      letter-spacing: 2px;
    }
    .title2{
      color: #fff;
      font-size: 26px;
      line-height: 48px;
      min-width: 100px;
      max-width: 100%;
      text-align: center;
      text-overflow:ellipsis;
      white-space:nowrap;
      overflow:hidden;
      letter-spacing: 2px;
      padding: 0 10px;
    }
    .divider{
      width: 60px;
      margin: 40px auto;
      height: 0;
      border: 2px solid #fff;
    }
    .list-container{
      ul{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .item{
          position: relative;
          list-style: none;
          width: 100%;
          padding: 1px 10px 10px 36px;
          text-align: left;
          color: #fdfdfd;
          .item-index{
            position: absolute;
            left: 10px;
            top: 12px;
            width: 16px;
            height: 16px;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            // line-height: 36px
            background-color: rgba(9, 243, 60, 0.1);
            padding: 1px;
            border: 1px solid #fff;
            border-radius: 4px;
          }
          .description{
            width: 100%;
            .track-name, .singer-name{
              min-width: 100px;
              max-width: 100%;;
              text-overflow:ellipsis;
              white-space:nowrap;
              overflow:hidden;
            }
            .track-name{
              font-size: 1rem;
              font-weight: 800;
              line-height: 36px;
              &:hover{
                color: #fff;
              }
            }
          }
          .singer-name{
            color: #f8f8f8;
          }
        }
      }
    }
    &:nth-child(5n + 1) {
      background: rgb(82%, 46%, 56%);
    }
    &:nth-child(5n + 2) {
      background: rgb(42%, 59%, 69%);
    }
    &:nth-child(5n + 3) {
      background: rgb(43%, 76%, 72%);
    }
    &:nth-child(5n + 4) {
      background: rgb(32%, 56%, 58%);
    }
    &:nth-child(5n + 5) {
      background: rgb(95%, 65%, 45%);
    }
    &:hover{
      transition: transform 0.3s;
      transform: scale(1.02);
      // background: orangered;
    }
  }
}
</style>
