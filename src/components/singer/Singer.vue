<template>
  <div class="singer">

    <div class="header">
      <h1>万千歌手 近在眼前</h1>
      <h2>登录查看你的关注歌手</h2>
      <div class="go-login">
        <a href="javascirpt:">立即登录</a>
      </div>
    </div>

    <div class="nav">
      <div class="nav-category">
        <ul class="list">
          <li class="item" :class="{current: item.key === currentNavCategory}" v-for="(item, index) in categoryNav" :key="index" @click="categoryNavChange(item.key)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>

      <div class="nav-alphabet">
        <ul class="list">
          <li class="item" :class="{current: item.key === currentNavAlphabet}" v-for="(item, index) in alphabetNav" :key="index" @click="alphabetNavChange(item.key)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="content-container">
      <ul class="list">
        <li class="item" v-for="(item, index) in singerList" :key="index">
          <div class="cover" v-if="(index < 10 && currentPageNum === 1)">
            <a :href="`https://y.qq.com/n/yqq/singer/${item.Fsinger_mid}.html#stat=y_new.singerlist.singerpic`">
              <img :src="`https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`" alt="" onerror="this.src='https://y.gtimg.cn/mediastyle/global/img/singer_150.png?max_age=2592000'">
            </a>
          </div>
          <a class="description" :href="`https://y.qq.com/n/yqq/singer/${item.Fsinger_mid}.html#stat=y_new.singerlist.singername`"><span class="name" >{{item.Fsinger_name}}</span></a>
        </li>
      </ul>
    </div>

    <Page class="singer-pagination" :total="totalNum" :page-size="pageSize" :current.sync="currentPageNum" @on-change="pageChange"></Page>

  </div>
</template>

<script>
import { getSinger } from './getSinger'
import { categoryNav, alphabetNav } from './cagegoryAlphabet'

export default {
  data() {
    return {
      currentNavCategory: 'all_all_',
      currentNavAlphabet: 'all',
      currentPageNum: 1,
      totalNum: 0,
      totalPage: 0,
      pageSize: 100,
      singerList: [],
      categoryNav: categoryNav,
      alphabetNav: alphabetNav
    }
  },
  computed: {
    currentNav: function() {
      return this.currentNavCategory + this.currentNavAlphabet
    }
  },
  created() {
    this.initSingerList()
  },
  methods: {
    initSingerList() {
      getSinger(this.currentNav, this.currentPageNum)
        .then((res) => {
          this.totalPage = res.data.total_page
          this.totalNum = res.data.total
          this.pageSize = res.data.per_page
          this.singerList = res.data.list
        })
        .catch((error) => {
          console.log(error)
        })
    },
    pageChange(currentPage) {
      this.currentPageNum = currentPage
      console.log(this.currentPageNum)
      this.initSingerList()
    },
    categoryNavChange(key) {
      this.currentNavCategory = key
      this.currentPageNum = 1
    },
    alphabetNavChange(key) {
      this.currentNavAlphabet = key
      this.currentPageNum = 1
    }
  },
  watch: {
    currentNav: function(val) {
      if (val) {
        this.initSingerList()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.singer{
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
    .nav-category{
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
        padding: 16px;
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
    .nav-alphabet{
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
      display: flex;
      flex-wrap: wrap;
      padding: 60px;
      .item{  
        background: rgba(245, 245, 245, 0.1);
        border-radius: 6px;
        box-shadow: 0 0 6px 1px rgba(245, 245, 245, 0.8);
        flex: 1 1 200px;
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
      }
    }
  }
  .singer-pagination{
    margin-bottom: 50px;
  }
}
</style>

