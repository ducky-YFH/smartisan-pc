<template>
  <div class="TopMenu">
    <div class="menu-content">
      <ul class="menu-title">
        <li
          v-for="(item, index) in menuList"
          :key="item.id"
          @mouseenter="menuDetailShow($event, index, item.type)"
          @mouseleave="menuDetailHide"
        >
          <router-link :to="item.link">{{item.title}}</router-link>
        </li>
      </ul>
      <div class="menu-search" v-if="srollDistance < 45">
        <input type="text" @focus="focusInput" @blur="blurInput" />
        <i class="iconfont icon-iconfontsousuo"></i>
        <div class="show-word">
          <a href class="blue">坚果Pro 3</a>
          <a href class="green">坚果新品</a>
        </div>
        <div class="history-box">
          <router-link to="www.baidu.com" target="_blank">坚果手机</router-link>
          <router-link to>坚果手机</router-link>
          <router-link to>坚果手机</router-link>
        </div>
      </div>
      <MiniCart :color="'#6b6b6b'" v-else></MiniCart>
    </div>
    <div
      class="menu-detail-wrapper"
      ref="detailWrapper"
      @mouseenter="menuDetailShow"
      @mouseleave="menuDetailHide"
    >
      <!-- one，分层数据 -->
      <ul class="detail-wrapper-one">
        <li class="one-item" v-for="(item, index) in menuShowData[0].data" :key="index">
          <div>
            <h3>{{item.title}}</h3>
            <ul class="one-item-ul">
              <li class="one-item-li" v-for="item2 in item.data" :key="item2.id">
                <router-link to="">
                  <img
                    :src="item2.img"
                    alt
                  />
                  <span>{{item2.title}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- two，简陋数据 -->
      <ul class="detail-wrapper-two">
        <li class="two-item" v-for="(item,index) in menuShowData[1].data" :key="index">
          <a href>
            <img
              :src="item.img"
              alt
            />
            <h3>{{item.title}}</h3>
            <p>
              <span class="price">{{item.price}}</span>
              <span>起</span>
            </p>
          </a>
        </li>
      </ul>
      <!-- three，服务数据，固定 -->
      <ul class="detail-wrapper-three">
        <li v-for="(item,index) in menuShowData[2].data" :key="index">
          <a href>{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TopMenu',
  data(){
    return{
      srollDistance: 0,
      menuList:[
        {
          id:1,
          title: '首页',
          type: 'one',
          link: 'xxxx',
          data: [
            {
              title: '手机',
              data: [
                {id: 1, title: '手机', img: 'https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_40/format,webp', link: 'item'}
              ]
            },
            {
              title: '官方配件',
              data: [
                {id: 2, title: '数据线', img: 'https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
                {id: 3, title: '充电器', img: 'https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
                {id: 4, title: '线控耳机', img: 'https://resource.smartisan.com/resource/90be7779c2454407ee5f4b6184c929ed.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
                {id: 5, title: '移动电源', img: 'https://resource.smartisan.com/resource/afcec520933673b8e03a867e6502f6e0.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
                {id: 6, title: '拍照配件', img: 'https://resource.smartisan.com/resource/b9e61c6d93464454fa2e382632e34cee.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
              ]
            }
          ]
        },
        {
          id:2,
          title: '手机',
          type: 'two',
          link: 'xxxx',
          data: [
            {id: 1, title: '坚果Pro 1', price: 1000, img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_126/format,webp', link: 'item'},
            {id: 2, title: '坚果Pro 2', price: 2000, img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_126/format,webp', link: 'item'},
            {id: 3, title: '坚果Pro 3', price: 3000, img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_126/format,webp', link: 'item'}
          ]
        },
        {
          id:3,
          title: '官方配件',
          type: 'one',
          link: 'xxxx',
          data: [
            {
              title: '耳机',
              data: [
                {id: 1, title: '蓝牙耳机', img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'item'},
                {id: 2, title: '线控耳机', img: 'https://resource.smartisan.com/resource/72e4c31e4e623f5c37c6489f6d91efc6.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'item'},
              ]
            },
            {
              title: '手机充电配件',
              data: [
                {id: 2, title: '数据线', img: 'https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
                {id: 3, title: '充电器', img: 'https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
                {id: 4, title: '线控耳机', img: 'https://resource.smartisan.com/resource/90be7779c2454407ee5f4b6184c929ed.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
                {id: 5, title: '移动电源', img: 'https://resource.smartisan.com/resource/afcec520933673b8e03a867e6502f6e0.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
                {id: 6, title: '拍照配件', img: 'https://resource.smartisan.com/resource/b9e61c6d93464454fa2e382632e34cee.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
              ]
            },
            {
              title: '自拍杆',
              data: [
                {id: 7, title: '自拍杆', img: 'https://resource.smartisan.com/resource/b9e61c6d93464454fa2e382632e34cee.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
              ]
            },
            {
              title: '音箱',
              data: [
                {id: 7, title: '自拍杆', img: 'https://resource.smartisan.com/resource/c44f0ab4da5591fc3d0f82b7ac0f4f65.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
              ]
            },
            {
              title: '车载配件',
              data: [
                {id: 7, title: '车载充电器', img: 'https://resource.smartisan.com/resource/d4480234a2f24b0ff5acd98288fd902d.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
              ]
            },  
          ]
        },
        {
          id:4,
          title: '服饰箱包',
          type: 'one',
          link: 'xxxx',
          data: [
            {
              title: '服饰',
              data: [
                {id: 1, title: '衬衫', img: 'https://resource.smartisan.com/resource/5e7c8e2681ff540cf445740533ba9743.png?x-oss-process=image/resize,w_40/format,webp', link: 'item'},
                {id: 2, title: '卫衣', img: 'https://resource.smartisan.com/resource/5e7c8e2681ff540cf445740533ba9743.png?x-oss-process=image/resize,w_40/format,webp', link: 'item'},
                {id: 3, title: 'T袖', img: 'https://resource.smartisan.com/resource/5e7c8e2681ff540cf445740533ba9743.png?x-oss-process=image/resize,w_40/format,webp', link: 'item'},
                {id: 4, title: 'POLP衫', img: 'https://resource.smartisan.com/resource/5e7c8e2681ff540cf445740533ba9743.png?x-oss-process=image/resize,w_40/format,webp', link: 'item'},
              ]
            },
            {
              title: '鞋',
              data: [
                {id: 6, title: '帆布鞋', img: 'https://resource.smartisan.com/resource/1db1a8bfee3623fded41c9115b5a5335.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
              ]
            },
            {
              title: '箱包',
              data: [
                {id: 7, title: '拉杆箱', img: 'https://resource.smartisan.com/resource/9960e83a55544fbf7b046013a6f7f414.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
                {id: 8, title: '包', img: 'https://resource.smartisan.com/resource/cef4a5433eb95cbdf242d3c1bf5617f8.jpg?x-oss-process=image/resize,w_40/format,webp', link: 'category'},
              ]
            }
          ]
        },
        {
          id:10,
          title: '服务',
          type: 'three',
          link: 'xxxx',
          data:[
            {title: '自助服务', link: 'support'},
            {title: '在线客服', link: 'support'},
            {title: '维修门店', link: 'support'},
            {title: '服务政策', link: 'support'},
            {title: '发起售后', link: 'support'},
            {title: '以旧换新', link: 'support'}
          ]
        }
      ],
      // 展开更多商品的数据结构
      menuShowData:[
        {type: 'one', data: []},
        {type: 'two', data: []},
        {type: 'three', data: []},
      ]
    }
  },
  methods:{
    focusInput(){
      document.querySelector('.show-word,input').setAttribute('placeholder', '请输入搜索的商品');
      document.querySelector('.history-box').setAttribute('style', 'display: block;');
      document.querySelector('.show-word').setAttribute('style', 'display: none;');
    },
    blurInput(){
      document.querySelector('.show-word,input').setAttribute('placeholder', '');
      document.querySelector('.show-word').setAttribute('style', 'display: block;');
      setTimeout(()=>{
        document.querySelector('.history-box').setAttribute('style', 'display: none;');
      },100)
    },
    screenScroll(){
      window.onscroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const TopMenuEl =  document.querySelector('.TopMenu');
        this.srollDistance = scrollTop;
        if(scrollTop >= 45){
          TopMenuEl.classList.add('fix-menu');
        }else{
          TopMenuEl.classList.remove('fix-menu');
        }
      }
    },
    /** 
     * 鼠标移动触发事件
     * @param {object} event 
     * @param {number} index 索引号 
     * @param {string} type 商品类型
     */
    menuDetailShow(e, index, type){
      const detailWrapperEl = this.$refs.detailWrapper;
      detailWrapperEl.classList.add('menu-detail-active');
      if(e.target.localName == 'li'){
        this.menuShowData.forEach(item => {
          if(item.type == type){
            document.querySelector(`.detail-wrapper-${item.type}`).style.display = 'block'
            // console.log(this.menuList[index].data);
            item.data = this.menuList[index].data
            // console.log(item.data);
          }else{
            document.querySelector(`.detail-wrapper-${item.type}`).style.display = 'none'
          }
        })
      }
    },
    // 鼠标离开事件
    menuDetailHide(){
      const detailWrapperEl = this.$refs.detailWrapper;
      detailWrapperEl.classList.remove('menu-detail-active');
    }
  },
  mounted(){
    this.screenScroll()
  }
}
</script>

<style lang="scss" scoped>
$a-color: #4c4c4c;
$a-active-color: #5079d9;
.fix-menu {
  width: 100%;
  position: fixed;
  z-index: 11;
  top: 0;
}
.TopMenu {
  background: #fff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
}

.menu-content {
  width: $min-width;
  display: flex;
  height: 74px;
  align-items: center;
  margin: 0 auto;
  .menu-title {
    display: flex;
    align-items: center;
    margin-right: 100px;
    li {
      line-height: 74px;
      font-size: 14px;
      a {
        padding: 0 16px;
        color: $a-color;
        &:hover {
          color: $a-active-color;
        }
      }
    }
  }

  .menu-search {
    position: relative;
    input {
      width: 320px;
      height: 32px;
      line-height: 32px;
      border-radius: 20px;
      border: 1px solid #ebebeb;
      outline: none;
      text-indent: 40px;
      font-weight: bold;
    }
    ::-webkit-input-placeholder {
      color: #bebebe;
    }
    i {
      position: absolute;
      left: 10px;
      top: 7px;
      color: #a2a2a2;
      font-size: 23px;
    }
    .show-word {
      position: absolute;
      right: 0;
      top: 9px;
      a {
        font-size: 12px;
        font-weight: bold;
        padding: 2px 10px;
        border-radius: 20px;
        margin-right: 8px;
      }
      .blue {
        color: #3965cc;
        background: #e5efff;
        border: 1px solid #3965cc;
      }
      .green {
        color: #8aad37;
        background: #f7fae1;
        border: 1px solid #8aad37;
      }
    }
    .history-box {
      background: #fff;
      display: none;
      position: absolute;
      width: 350px;
      top: 50px;
      border: 1px solid #d4d4d4;
      border-radius: 15px;
      padding: 20px 0 10px 18px;
      z-index: 12;
      a {
        margin-bottom: 10px;
        display: block;
        cursor: pointer;
        &:hover {
          color: $a-active-color;
        }
      }
    }
    .history-box:after,
    .history-box:before {
      bottom: 100%;
      left: 36px;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }
    .history-box:after {
      border-color: rgba(136, 183, 213, 0);
      border-bottom-color: #ffffff;
      border-width: 11px;
      margin-left: 0px;
    }
    .history-box:before {
      border-color: rgba(194, 225, 245, 0);
      border-bottom-color: #d4d4d4;
      border-width: 13px;
      margin-left: -2px;
    }
  }

  .MiniCart {
    margin-left: 200px;
  }
}

.menu-detail-wrapper {
  height: 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  position: absolute;
  width: 100%;
  background: #ffffff;
  z-index: 11;
  border-top: 1px solid #dfdfdf;
  overflow: hidden;
  // one
  .detail-wrapper-one {
    display: none;
    padding: 25px 0;
    width: $min-width;
    margin: 0 auto;
    text-align: center;
    .one-item {
      display: inline-block;
      vertical-align: top;
      margin-right: 100px;
      text-align: left;
      div {
        h3 {
          padding-left: 10px;
          font-size: 12px;
          color: #808080;
        }
        .one-item-ul {
          height: 200px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          padding-right: 50px;
          .one-item-li {
            margin: 10px 0;
            a {
              font-size: 13px;
              color: #000;
              font-weight: bold;
              img {
                vertical-align: middle;
              }

              span {
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
  .detail-wrapper-two {
    display: none;
    padding: 25px 0;
    width: $min-width;
    margin: 0 auto;
    text-align: center;
    .two-item {
      display: inline-block;
      margin-right: 40px;
      overflow: hidden;
      width: 126px;
      a {
        img {
          width: 100%;
        }

        h3 {
          font-size: 14px;
          color: #000;
          font-weight: bold;
          margin: 14px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        p {
          font-size: 12px;
          .price {
            font-size: 15px;
            font-weight: bold;
            color: $theme-color;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .detail-wrapper-three {
    display: none;
    padding: 20px 0;
    width: $min-width;
    margin: 0 auto;
    text-align: center;
    li {
      margin-top: 20px;
      a {
        color: #000;
        font-size: 13px;
        font-weight: bold;
      }
    }
  }
}

.menu-detail-active {
  height: 266px;
}
</style>
