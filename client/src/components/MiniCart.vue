<template>
  <div class="MiniCart">
    <router-link to target="_blank" :style="{color: `${color}`}">
      <i class="iconfont icon-person"></i>
    </router-link>
    <a href="javascript:;" :style="{color: `${color}`}">
      <span class="red-dot"></span>
      <i class="iconfont icon-shoppingcar"></i>
      <!-- 购物栏 -->
      <div class="shopcart">
        <!-- 如果购物车为空就显示如下 -->
        <div v-show="cartList.length == 0" class="shopcart-empty">
          <img src="../assets/images/car.png" alt />
          <p class="text-large">购物车为空</p>
          <p class="text-small">您还没有选购任何商品，现在前往商城选购吧！</p>
        </div>
        <!-- 如果购物车不为空就显示如下 -->
        <div v-show="cartList.length > 0" class="shopcart-have">
          <div class="cart-item" v-for="item in cartList" :key="item.id">
            <img :src="item.img" alt />
            <div class="info">
              <p class="title">{{item.name}}</p>
              <p class="desc">{{item.desc | filterDesc}}</p>
              <p class="price-count">
                <span class="price">￥{{item.price}}</span>
                <span class="count">x&nbsp;&nbsp;{{item.count}}</span>
              </p>
            </div>
            <div class="del">
              <i class="iconfont icon-cross"></i>
            </div>
          </div>
        </div>
        <div class="shopcart-count">
          <div class="count-left">
            <p>共&nbsp;{{cartList.length}}&nbsp;件商品</p>
            <p>
              <span>合计：</span>
              <span class="count-price">100</span>
            </p>
          </div>
          <div class="count-right">
            <router-link to>去购物车</router-link>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MiniCart',
  props: {
    color:{
      type: String,
      default: '#a5a5a6'
    }
  },
  data(){
    return{
      // 临时数据
      cartList:[
        {
          id: 1,
          img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_80/format,webp',
          name: '坚果Pro 3',
          desc: ['黑色','8G + 128GB'],
          price: 2899,
          count: 2
        },
        {
          id: 2,
          img: 'https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_80/format,webp',
          name: '坚果 Type-C To Type-C 数据线坚果 Type-C To Type-C 数据线坚果 Type-C To Type-C 数据线',
          desc: ['黑色'],
          price: 39,
          count: 1
        }
      ]
    }
  },
  filters:{
    // 格式化描述
    filterDesc(arr){
      if(arr.length > 1){
        return arr.join(',').replace(',', '  |  ')
      }else{
        return arr.join()
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.MiniCart {
  position: relative;
  z-index: 13;
  a {
    &:first-of-type {
      margin-right: 16px;
    }
    &:last-of-type {
      display: inline-block;
      position: relative;
      &:hover {
        .shopcart {
          transition: all 0.5s ease;
          visibility: visible;
          opacity: 1;
        }
      }
    }
    .shopcart {
      background: #fff;
      top: 30px;
      right: 0;
      transition: all 0.3s ease;
      width: 360px;
      min-height: 310px;
      border: 1px solid $border-color;
      border-radius: 8px;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      cursor: default;
      .shopcart-empty {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        .text-large {
          color: #333333;
          font-size: 16px;
          margin: 22px 0 6px;
        }
      }
      .shopcart-have {
        .cart-item {
          padding: 10px;
          display: flex;
          height: 122px;
          align-items: center;
          border-bottom: 1px solid $border-color;
          box-sizing: border-box;
          &:hover {
            background: #fcfcfc;
            .del {
              opacity: 1;
            }
          }
          img {
            width: 75px;
            height: 75px;
            background: #ffffff;
          }
          .info {
            margin: 0 15px;
            flex: 1;
            overflow: hidden;
            .title {
              font-size: 16px;
              color: #000;
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .desc {
              margin: 15px 0;
            }

            .price-count {
              .price {
                color: $theme-color;
                font-size: 15px;
                font-weight: bold;
                margin-right: 6px;
              }

              .count {
              }
            }
          }
          .del {
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s;
          }
        }
      }
      .shopcart-count {
        background: #f8f8f8;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        .count-left {
          p {
            &:first-of-type {
              color: #c1c1c1;
              margin-bottom: 5px;
            }
            &:last-of-type {
              font-size: 14px;
            }
            .count-price {
              font-size: 17px;
              color: $theme-color;
              font-weight: bold;
            }
          }
        }

        .count-right {
          a {
            width: 120px;
            height: 38px;
            line-height: 38px;
            display: inline-block;
            vertical-align: middle;
            background: #5d8af1;
            font-size: 14px;
            text-align: center;
            color: #fff;
            border-radius: 5px;
            &:hover {
              background: #6e97f6;
            }
          }
        }
      }
    }
  }
}

.red-dot {
  position: absolute;
  right: -3px;
  top: -8px;
  &::after {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: red;
  }
}
</style>