<template>
  <div class="home-container">
    <h1 class="header-title">QQ音乐</h1>
    <h2 class="header-sub-title">音乐馆首页</h2>
    <div class="loading" v-show="loadingFlag">
      <loading></loading>
    </div>

    <section>
      <h1>歌单推荐</h1>
      <br>
      <div class="link-wrapper">
        <ul class="link-list">
          <li class="link-item" @click="currentIndex = 0">为您推荐</li>
          <li class="link-item" v-for="item in category" :key="item.item_id" @click="initCategoryList(item.item_id)"><span class="name">{{item.item_name}}</span></li>
        </ul>
      </div>
      <div class="component-wrapper">
        <recommend-list v-if="currentIndex === 0"></recommend-list>
        <category-list v-else :categoryList="categoryList"></category-list>
      </div>
    </section>
    <br>
    <br>

    <section>
      <h1>新歌首发</h1>
      <br>
      <div class="link-wrapper">
        <ul class="link-list">
          <li class="link-item" v-for="item in newSongType" :key="item.id" @click="changeNewSongType(item.id)"><span class="name">{{item.title}}</span></li>
        </ul>
      </div>
      <div class="component-wrapper">
        <new-song-list :newSongList="newSongList"></new-song-list>
      </div>
    </section>
    <br>
    <br>

    <section>
      <h1>精彩推荐</h1>
      <br>
      <div class="component-wrapper">
        <focus :focusList="focusList"></focus>
      </div>
    </section>
    <br>
    <br>

    <section>
      <h1>新碟首发</h1>
      <br>
      <div class="link-wrapper">
        <ul class="link-list">
          <li class="link-item" v-for="item in newAlbumArea" :key="item.id" @click="changeNewAlbumArea(item.id)"><span class="name">{{item.name}}</span></li>
        </ul>
      </div>
      <div class="conponent-wrapper">
        <new-album :newAlbumList="newAlbumList"></new-album>
      </div>
    </section>
    <br>
    <br>

    <section>
      <h1>排行榜</h1>
      <br>
      <div class="component-wrapper">
      <top-list :topList="topList"></top-list>
      </div>
    </section>
    <br>
    <br>

    <section>
      <h1>MV</h1>
      <br>
      <div class="link-wrapper">
        <ul class="link-list">
          <li class="link-item" v-for="(item, index) in mvArea" :key="index" @click="changeMvArea(item.area)"><span class="name">{{item.name}}</span></li>
        </ul>
      </div>
      <div class="conponent-wrapper">
        <mv :mvList="mvList"></mv>
      </div>
    </section>
    <br>
    <br>

  </div>
</template>

<script>
import { getRecommendList } from './getRecommendList'
import { getCategoryList } from '../recommendCategoryList/getCategoryList'
import { getNewSongList } from '../newSong/getNewSongList'
import { getNewAlbumList } from '../newAlbum/getNewAlbum'
import { getMvList } from '../mv/getMv'

import mvArea from '../mv/mvArea'

import Loading from '../loading/Loading2'

import RecommendList from './RecommendList'
import CategoryList from '../recommendCategoryList/CategoryList'
import NewSongList from '../newSong/NewSongList'
import Focus from '../focus/Focus'
import NewAlbum from '../newAlbum/newAlbum'
import TopList from '../topList/TopList'
import Mv from '../mv/Mv'

export default {
  components: {
    RecommendList,
    CategoryList,
    NewSongList,
    Focus,
    NewAlbum,
    TopList,
    Mv,
    Loading
  },
  data() {
    return {
      loadingFlag: true,

      currentIndex: 0,
      recommendList: [],

      newSongType: [],
      currentNewSongType: 1,
      newSongList: [],

      category: [],
      categoryList: [],

      focusList: [],

      currentNewAlbumArea: 1,
      newAlbumArea: [],
      newAlbumList: [],

      topList: [],

      currentMvArea: 'all',
      mvArea: mvArea,
      mvList: []
    }
  },
  created() {
    this.initRecommendList()
    this.initNewSongList(this.currentNewSongType)
    this.initNewAlbumList(this.currentNewAlbumArea)
    this.initMvList(this.currentMvArea)
  },
  methods: {
    initRecommendList() {
      getRecommendList()
        .then((res) => {
          this.recommendList = res.recomPlaylist.data.v_hot
          this.focusList = res.focus.data.content
          this.topList = res.toplist.data.group_list[0].list
          this.category = res.category.data.category[0].items
          this.newSongType = res.new_song.data.type_info
          this.newAlbumArea = res.new_album.data.tags.area
          this.loadingFlag = false
        }).catch((error) => {
          console.log(error)
        })
    },
    initCategoryList(id) {
      this.currentIndex = id
      getCategoryList(id)
        .then((res) => {
          this.categoryList = res.playlist.data.v_playlist
        })
        .catch((error) => {
          console.log(error)
        })
    },
    initNewSongList(type) {
      getNewSongList(type)
        .then(res => {
          this.newSongList = res.new_song.data.song_list
        })
    },
    initNewAlbumList(area) {
      getNewAlbumList(area)
        .then(res => {
          this.newAlbumList = res.new_album.data.list
        })
    },
    initMvList(area) {
      getMvList(area)
        .then((res) => {
          console.log(res)
          this.mvList = res.data.mvlist
        })
    },
    selectItem(index) {
      this.currentIndex = index
    },
    changeNewSongType(type) {
      this.currentNewSongType = type
      this.initNewSongList(type)
    },
    changeNewAlbumArea(area) {
      this.currentNewAlbumArea = area
      this.initNewAlbumList(area)
    },
    changeMvArea(area) {
      this.currentMvArea = area
      this.initMvList(area)
    }
  }
}
</script>

<style lang="scss" scoped>
*:hover{
  cursor: pointer;
}
.header-title{
  padding: 30px;
  color: #fff;
  background: rgb(19%, 76%, 49%);
}
.header-sub-title{
  padding: 20px;
  color: rgb(21, 143, 225);
  background: #fff;
}
section{
  margin: 10px 20px;
  padding-top: 20px;
  background: linear-gradient(rgba(227, 219, 243, 0.2), rgba(219, 209, 241, 0.1));
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.8);
  border-radius: 20px;
}
.loading{
  position: fixed;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background:aliceblue;
  color: orange;
}
.link-wrapper{
  margin: 10px 0;
  .link-list{
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    .link-item{
      display: block;
      border-radius: 5px;
      font-size: 18px;
      line-height: 36px;
      min-width: 160px;
      flex: 1;
      .name{
        word-spacing: 6px;
      }
      &:hover{
        background: rgb(40%, 82%, 62%);
        color: #fff;
        border: 0;
      }
    }
  }
}
</style>
