<template>
  <div class="goodsCart">
    <span :class="['tag', goods.tag.class]">{{goods.tag.text}}</span>
    <img :src="goods.types[indexActive].img" alt />
    <h3 class="title">{{goods.title}}</h3>
    <div class="desc">
      <p class="default-desc">{{goods.default_desc}}</p>
      <p class="hover-desc">{{goods.hover_desc}}</p>
    </div>
    <!-- 选择器 -->
    <div class="selector-wrap">
      <div class="selector" ref="selector" v-if="goods.types[0].color !== ''">
        <span
          :class="{'selector-item': true, 'selector-item-active': index == 0 ? true : false}"
          v-for="(item, index) in goods.types"
          :key="index"
          :data-index="index"
          @mouseenter="selectorHover(index)"
          :style="{background: item.color}"
        ></span>
      </div>
    </div>
    <div class="price">
      <div class="current-price">￥{{goods.types[indexActive].current_price}}</div>
      <del class="original-price">￥{{goods.types[indexActive].original_price}}</del>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsCart',
  props:{
    goods: {
      type: Object,
    }
  },
  data(){
    return {
      indexActive: 0
    }
  },
  methods:{
    selectorHover(index){
      this.indexActive = index
      const selector = this.$refs.selector;
      selector.addEventListener('mouseover', function(e){
        if(e.target.tagName.toLowerCase() == 'span'){
          selector.children.forEach(item => {
            item.classList.remove('selector-item-active')
          })
          e.target.classList.add('selector-item-active')
          this.indexActive = e.target.dataset.index
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$red-color: #d03b34;
$red-bg: #ffe7e5;
$red-border: #f3938b;

$yellow-color: #a06e37;
$yellow-bg: #fffbdf;
$yellow-border: #d5b480;

.goodsCart {
  position: relative;
  width: 302px;
  height: 429px;
  padding: 0px 20px;
  text-align: center;
  background: #fff;
  font-size: 12px;
  box-sizing: border-box;
  border-right: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .tag {
    position: absolute;
    right: 10px;
    top: 5px;
    padding: 5px 10px;
    font-weight: bold;
    border-radius: 30px;
  }
  .red {
    color: $red-color;
    border: 1px solid $red-border;
    background: $red-bg;
  }
  .yellow {
    color: $yellow-color;
    border: 1px solid $yellow-border;
    background: $yellow-bg;
  }
  img {
    margin-top: 40px;
    width: 220px;
  }

  .title {
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    margin: 20px 0;
    @include ell();
  }

  .desc {
    overflow: hidden;
    color: #9c9a9a;
    font-size: 13px;
    font-weight: 600;
    min-height: 13px;
    .default-desc {
      @include ell();
    }

    .hover-desc {
      color: $theme-color;
      display: none;
      @include ell();
    }
  }
  .selector-wrap{
    min-height: 20px;
    margin: 15px 0 22px;
    .selector {
      .selector-item {
        position: relative;
        width: 17px;
        height: 17px;
        display: inline-block;
        box-sizing: border-box;
        margin: 0 8px;
        padding: 5px;
        border-radius: 50%;
        border: none;
      }
      .selector-item-active {
        border: 2px solid #bebebe;
      }
    }
  }

  .price {
    > div {
      display: inline-block;
    }
    .current-price {
      color: $theme-color;
      font-size: 20px;
      font-weight: bold;
      margin-right: 10px;
    }

    .original-price {
      color: #cccccc;
    }
  }

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0 0 30px -5px rgba(219, 219, 219, 0.8) inset; /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
    .hover-desc {
      display: block;
    }
    .default-desc {
      display: none;
    }
  }
}
</style>