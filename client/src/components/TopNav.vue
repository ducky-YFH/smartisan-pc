<template>
  <div class="TopNav" :style="{height: `${height}px`, fontSize: `${fontSize}px`}">
    <div class="nav-left"></div>
    <div class="nav-center">
      <ul>
        <li v-for="(item,index) in navList" :key="index">
          <router-link
            tag="a"
            target="_blank"
            :to="item.href"
            :class="{hover: hover}"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <MiniCart></MiniCart>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    hover:{
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 45
    },
    fontSize:{
      type: Number,
      default: 12,
    },
    pic:{
      type: String,
      default: '../assets/images/logo.png'
    }
  },
  data(){
    return {
      navList:[
        { title: '在线商城', href: 'www.baidu.com' },
        { title: '坚果Pro3', href: 'www.baidu.com' },
        { title: '坚果Pro2', href: 'www.baidu.com' },
        { title: '坚果TNT工作站', href: 'www.baidu.com' },
        { title: 'Smartisan OS', href: 'www.baidu.com' },
        { title: '欢喜云', href: 'www.baidu.com' },
        { title: '应用', href: 'www.baidu.com' },
        { title: '论坛', href: 'www.baidu.com' },
        { title: '荣誉与奖项', href: 'www.baidu.com' },
        { title: '加入我们', href: 'www.baidu.com' },
        { title: '下载APP', href: 'www.baidu.com' }
      ]
    }
  },
  methods:{
    changeAttr(){
    }
  },
  mounted(){
    this.changeAttr();
  }
}
</script>

<style lang="scss" scoped>
.TopNav {
  background: $nav-color;
  color: $font-color;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  .nav-left {
    background: url("../assets/images/logo.png") no-repeat center;
    background-size: contain;
    width: 25px;
    height: 25px;
  }

  .nav-center {
    width: 1020px;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        a {
          color: $font-color;
          font-weight: 600;
        }
        .hover {
          &:hover {
            color: #e5e5e5;
          }
        }
        .active {
          color: #e5e5e5;
        }
      }
    }
  }
}
</style>
