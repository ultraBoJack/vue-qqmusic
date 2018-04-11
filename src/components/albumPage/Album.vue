<template>
  <div class="album">

    <div class="header">
      <h1>原声大碟 尽在QQ音乐</h1>
      <h2>登录查看您的收藏</h2>
      <div class="go-login">
        <a href="javascirpt:">立即登录</a>
      </div>
    </div>

    <div class="nav">
      <div class="nav-area">
        <ul class="list">
          <li class="item" :class="{current: item.id === currentNavArea}" v-for="(item, index) in areaNav" :key="index" @click="areaNavChange(item.id)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>

      <div class="nav-genre">
        <ul class="list">
          <li class="item" :class="{current: item.id === currentNavGenre}" v-for="(item, index) in genreNav" :key="index" @click="genreNavChange(item.id)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>

      <div class="nav-type">
        <ul class="list">
          <li class="item" :class="{current: item.id === currentNavType}" v-for="(item, index) in typeNav" :key="index" @click="typeNavChange(item.id)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>

      <div class="nav-year">
        <ul class="list">
          <li class="item" :class="{current: item.id === currentNavYear}" v-for="(item, index) in yearNav" :key="index" @click="yearNavChange(item.id)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>
      
      <div class="nav-company">
        <ul class="list">
          <li class="item" :class="{current: item.id === currentNavCompany}" v-for="(item, index) in companyNav" :key="index" @click="companyNavChange(item.id)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>

      <div class="nav-sort">
        <ul class="list">
          <li class="item" :class="{current: item.id === currentNavSort}" v-for="(item, index) in sortNav" :key="index" @click="sortNavChange(item.id)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="content-container">
      <ul class="list">
        <li class="item" v-for="(item, index) in albumList" :key="index">
          <div class="cover">
            <a :href="`https://y.qq.com/n/yqq/album/${item.album_mid}.html#stat=y_new.album_lib.album_pic`">
              <img :src="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`" alt="" onerror="this.src='y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;">
            </a>
          </div>
          <a class="description album-name" :href="`https://y.qq.com/n/yqq/album/${item.album_mid}.html#stat=y_new.album_lib.album_name`"><span class="name" >{{item.album_name}}</span></a>
          <br>
          <a class="description album-singer" :href="`https://y.qq.com/n/yqq/singer/${item.singers[0].singer_mid}.html`"><span class="name" >{{item.singers[0].singer_name}}</span></a>
          <br>
          <a class="description album-public-time" href="javascript:;"><span class="public-time">{{item.public_time}}</span></a>
        </li>
      </ul>
    </div>

    <Page class="album-pagination" :total="totalNum" :page-size="pageSize" :current.sync="currentPageNum" @on-change="pageChange"></Page>

  </div>
</template>

<script>
import { getAlbum } from './getAlbum'

export default {
  data() {
    return {
      currentNavArea: 1,
      currentNavGenre: -1,
      currentNavType: -1,
      currentNavYear: -1,
      currentNavCompany: -1,
      currentNavSort: 2,
      currentNavSin: 0,

      sortNav: [
        {
          id: 2,
          name: '最新'
        },
        {
          id: 5,
          name: '最热'
        }
      ],
      
      albumList: [],
      tagList: [],

      currentPageNum: 1,
      totalNum: 0,
      totalPage: 0,
      pageSize: 20,
    }
  },
  computed: {
    areaNav: function() {
      return this.tagList.area
    },
    genreNav: function() {
      return this.tagList.genre
    },
    typeNav: function() {
      return this.tagList.type
    },
    yearNav: function() {
      return this.tagList.year
    },
    companyNav: function() {
      return this.tagList.company
    }
  },
  created() {
    this.initAlbumList()
  },
  methods: {
    initAlbumList() {
      getAlbum(this.currentNavArea, this.currentNavGenre, this.currentNavType, this.currentNavYear, this.currentNavCompany, this.currentNavSort, this.currentNavSin)
        .then((res) => {
          this.totalNum = res.albumlib.data.total
          this.totalPage = this.totalNum / this.pageSize
          this.albumList = res.albumlib.data.list
          this.tagList = res.albumlib.data.tags
        })
        .catch((error) => {
          console.log(error)
        })
    },
    pageChange(currentPage) {
      this.currentPageNum = currentPage
      this.currentNavSin = this.pageSize * (currentPage - 1)
      this.initAlbumList()
    },
    areaNavChange(id) {
      this.currentNavArea = id
      this.currentPageNum = 1
      this.currentNavSin = 0
      this.initAlbumList()
    },
    genreNavChange(id) {
      this.currentNavGenre = id
      this.currentPageNum = 1
      this.currentNavSin = 0
      this.initAlbumList()
    },
    typeNavChange(id) {
      this.currentNavType = id
      this.currentPageNum = 1
      this.currentNavSin = 0
      this.initAlbumList()
    },
    yearavChange(id) {
      this.currentNavYear = id
      this.currentPageNum = 1
      this.currentNavSin = 0
      this.initAlbumList()
    },
    companyNavChange(id) {
      this.currentNavCompany = id
      this.currentPageNum = 1
      this.currentNavSin = 0
      this.initAlbumList()
    },
    sortNavChange(id) {
      this.currentNavSort = id
      this.currentPageNum = 1
      this.currentNavSin = 0
      this.initAlbumList()
    }
  }
}
</script>

<style lang="scss" scoped>
.album{
  .header{
    display: flex;
    flex-direction: column;
    background: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_singer.jpg');
    background-size: contain;
    padding: 60px 0;
    h1{
      font-size: 4rem;
      font-weight: normal;
      color: #fff;
      line-height: 6rem;
    }
    h2{
      font-size: 2rem;
      font-weight: normal;
      color: #fff;
      line-height: 4rem;
    }
    .go-login{
      margin: 20px auto 0px;
      border: 2px solid #888;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      a {
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: #fff;
        transition: color 1s;
        &:hover{
          color: rgb(19%, 76%, 49%);
        }
      }
      transition: border 1s;
      &:hover{
        border: 2px solid #FFF;
      }
    }
  }
  .nav{
    margin: 60px 60px 0;
    .nav-area{
      margin-bottom: 20px;
    }
    .list{
      list-style: none;
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      .item{
        flex: 0 0 auto;
        font-size: 16px;
        line-height: 20px;
        padding: 12px;
        margin: 5px 0;
        text-align: left;
        a{
          color: #333;
          &:hover{
            color: rgba(48, 193, 123, 1);
          }
        }
      }
      .current{
        background: rgba(48, 193, 123, 1);
        color: #fff;
        a{
          color: #fff;
            &:hover{
              color: #fff;
          }
        }
      }
    }
    .nav-genre{
      .item{
        padding: 10px 16px;
      }
    }
  }
  .content-container{
    display: block;
    width: 100%;
    .list{
      display: inline-block;
      width: 100%;
      // display: grid;
      // grid-template-columns: repeat(5, 1fr);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 60px;
      .item{  
        background: rgba(245, 245, 245, 0.1);
        border-radius: 6px;
        box-shadow: 0 0 6px 1px rgba(245, 245, 245, 0.8);
        flex: 0 1 200px;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1rem;
        list-style: none;
        margin: 10px;
        max-width: 100%;
        overflow:hidden;
        padding: 10px;
        text-align: center;
        text-overflow:ellipsis;
        transition: all 1s;
        white-space:nowrap;
        .cover{
          margin-bottom: 20px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            transition: transform 1s;
          }
        }
        a{
          color: #333;
          font-size: 1rem;
          line-height: 2rem;
          font-weight: normal;
          transition: all 0.1s;
          text-align: left;
          letter-spacing: 1px;
        }
        
        &:hover{
          background: rgba(48, 193, 123, 1);
          .cover{
            img{
              transform: scale(1.05);
            }
          }
          a {
            color: rgba(255, 255, 255, 1);
          }
        }
        .album-name{
          font-weight: bold;
        }
        .album-singer{
          font-size: 0.9rem;
        }
        .album-public-time{
          font-size: 0.85rem;
          font-style: italic;
          letter-spacing: 0.5px;
        }
      }
    }
  }
  .album-pagination{
    margin-bottom: 50px;
  }
}
</style>
