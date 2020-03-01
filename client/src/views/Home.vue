<template>
  <div class="Home">
    <TopNav :hover="true"></TopNav>
    <TopMenu></TopMenu>
    <!-- 主体内容 -->
    <section class="main-wrapper">
      <!-- 轮播图 -->
      <swiper class="swiper main-swiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in slideShowData" :key="item.id">
          <a :href="item.link">
            <img class="swiper-img" :src="item.img" alt />
          </a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- 活动区域 -->
      <div class="activity-wrap">
        <figure v-for="item in activityData" :key="item.id">
          <img :src="item.img" alt />
          <a :href="item.link"></a>
        </figure>
      </div>

      <!-- 热门商品板块 -->
      <div class="hot-goods-wrap common-wrap">
        <div class="wrap-top">
          <div class="title">{{hotGoods.title}}</div>
          <!-- 前后退按钮 -->
          <div class="navigation">
            <div class="swiper2-button-prev" slot="button-prev">
              <i class="iconfont icon-left"></i>
            </div>
            <div class="swiper2-button-next" slot="button-next">
              <i class="iconfont icon-right"></i>
            </div>
          </div>
        </div>
        <!-- 热门商品轮播图 -->
        <swiper class="swiper hot-goods-swiper" :options="hotGoodsSwiperOption">
          <!-- slides -->
          <swiper-slide v-for="item in hotGoods.data" :key="item.id">
            <a href>
              <GoodsCart :goods="item"></GoodsCart>
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 多个商品板块，一个板块为一组 -->
      <div class="common-wrap" v-for="(groupItem, index) in allWrapData" :key="index">
        <div class="wrap-top">
          <div class="title">{{groupItem.title}}</div>
        </div>
        <div class="wrap-main">
          <div class="first-item">
            <a href>
              <img :src="groupItem.firstData.img" alt />
            </a>
          </div>
          <div class="wrap-item" v-for="goodsItem in groupItem.mainData" :key="goodsItem.id">
            <a href>
              <GoodsCart :goods="goodsItem"></GoodsCart>
            </a>
          </div>
        </div>
      </div>

      <!-- 尾部 -->
      <Footer></Footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      //轮播图设置属性
      swiperOption: {
        // spaceBetween: 30, //板块间距
        loop: true, //无缝轮播
        centeredSlides: true,
        autoplay: {
          //自动轮播
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        effect: 'fade',
      },

      hotGoodsSwiperOption:{
        navigation: {
          // 自定义上下按钮
          nextEl: '.swiper2-button-next',
          prevEl: '.swiper2-button-prev',
          disabledClass: "swiper2-button-disabled"
        },
        slidesPerView : 4,
        slidesPerGroup : 4,
      },
      
      // 轮播图数据
      slideShowData: [],

      // 活动区域数据
      activityData: [],

      // 热门商品-临时数据
      hotGoods: {},

      // 所有板块数据
      allWrapData: []
    }
  },
  methods: {
    async getSwiperData(){
      const res = await this.$axios.get('/slidedata');
      this.slideShowData = res.data
    },
    async getActivityData(){
      const res = await this.$axios.get('/activity');
      this.activityData = res.data
    },
    async getHotGoods(){
      const res = await this.$axios.get('/hotgoods');
      this.hotGoods = res.data
    },
    async getAllWrapData(){
      const res = await this.$axios.get('/allgoodswrap');
      this.allWrapData = res.data
    }
  },
  created(){
    this.getSwiperData()
    this.getActivityData()
    this.getHotGoods()
    this.getAllWrapData()
  }
}
</script>

<style lang="scss" scoped>
// 主体内容
.main-wrapper {
  background: #ededed;
  padding-top: 24px;
}
// 轮播图
.main-swiper {
  width: $min-width;
  height: 499px;
  margin: 0px auto;
  position: relative;
  border: 1px solid $border-color;
  border-radius: $radius;
  .swiper-img {
    width: 100%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
// 活动板块
.activity-wrap {
  margin: 26px auto;
  height: 200px;
  width: $min-width;
  display: flex;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-sizing: border-box;
  figure {
    position: relative;
    img {
      width: 100%;
    }
    a {
      transition: all 0.2s ease-out;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      &:hover {
        box-shadow: 0 0 30px -5px rgba(219, 219, 219, 0.8) inset; /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
      }
    }
  }
}

// 热门商品板块
.hot-goods-wrap {
  .navigation {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .swiper2-button-prev,
    .swiper2-button-next {
      box-sizing: border-box;
      padding: 4px 10px;
      color: #4d4d4d;
      cursor: pointer;
      outline: none;
      &:hover {
        color: #ff6700;
      }
      i {
        font-size: 22px;
      }
    }
    .swiper2-button-disabled {
      outline: none;
      color: #e0e0e0;
      cursor: default;
      &:hover {
        color: #e0e0e0;
      }
    }
  }
}

// 公用板块
.common-wrap {
  width: $min-width;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px solid $border-color;
  border-radius: $radius;
  .wrap-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    line-height: 50px;
    background: #fafafa;
    border-bottom: 1px solid $border-color;
    .title {
      color: #666666;
      font-size: 19px;
      font-weight: bold;
    }
  }
  .wrap-main {
    display: flex;
    flex-wrap: wrap;
    .first-item {
      img {
        width: 610px;
        height: 429px;
      }
    }
  }
}
</style>

// 轮播图分页器样式
<style lang="scss">
.swiper-pagination-bullet-active {
  background: #ffffff;
}
</style>
