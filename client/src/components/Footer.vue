<template>
  <footer>
    <div class="footer-wrap">
      <div class="footer-wrap-top">
        <div class="left">
          <ul>
            <li class="title">订单服务</li>
            <li>
              <a href="">购买指南</a>
            </li>
            <li>
              <a href="">送货政策</a>
            </li>
          </ul>
          <ul>
            <li class="title">服务支持</li>
            <li>
              <a href="">零售门店</a>
            </li>
            <li>
              <a href="">自助服务</a>
            </li>
            <li>
              <a href="">维修门店</a>
            </li>
          </ul>
          <ul>
            <li class="title">媒体中心</li>
            <li>
              <a href="">新闻动态</a>
            </li>
            <li>
              <a href="">官方视频</a>
            </li>
            <li>
              <a href="">图片资源</a>
            </li>
          </ul>
          <ul>
            <li class="title">关注我们</li>
            <li>
              <a href="">新浪微博</a>
            </li>
            <li>
              <a href="">官方微信</a>
            </li>
            <li>
              <a href="">荣誉奖项</a>
            </li>
          </ul>
        </div>
        <div class="right">
          <p class="phone">400 - 603 - 5000</p>
          <p>周一到周日 9: 00 - 18: 00</p>
          <p>（仅收市话费）</p>
          <button><i class="iconfont icon-chuizi"></i>在线帮助</button>
        </div>
      </div>
      <div class="footer-wrap-bottom">
        <ul>
          <li>Copyright © 2020 smartisan.com 版权所有</li>
          <li><a href="">锤子商城隐私政策</a></li>
          <li><a href="">锤子商城用户协议</a></li>
          <li><a href="">资质证照</a></li>
        </ul>
        <ul>
          <li>京 ICP 备 19048576 号 - 1</li>
          <li class="police-badge"><a href="">京公网安备 11010502039854号</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
  background: #fafafa;
  .footer-wrap {
    width: $min-width;
    margin: 0 auto;
    padding: 60px 0;
  .footer-wrap-top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 40px;
    .left {
      display: flex;
      ul {
        margin-right: 86px;
        font-size: 13px;
        li {
          margin-bottom: 18px;
          a:hover{
            color: #5079d9;
          }
        }
      }
    }

    .right {
      p.phone {
        font-size: 20px;
        font-weight: bold;
        color: #5079d9;
        margin-bottom: 15px;
      }

      p {
        font-size: 12px;
        color: $font-color;
        &:last-of-type{
          margin-top: 5px;
          text-align: right;
        }
      }

      button {
        margin-top: 15px;
        width: 132px;
        color: #5079d9;
        padding: 5px 10px;
        background: #f8f8f8;
        border: 1px solid $font-color;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        outline: none;
        cursor: pointer;
        vertical-align: middle;
        &:hover{
          background: #f5f5f5;
        }
        i.iconfont.icon-chuizi {
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }

  .footer-wrap-bottom {
    margin-top: 40px;
    font-size: 12px;
    color: $font-color;
    ul {
      display: flex;
      margin-bottom: 10px;
      li {
        border-right: 1px solid $font-color;
        padding: 0 10px;
        &:last-of-type{
          border: none;
        }
        a{
          color: #ababab;
          &:hover{
            color: #5079d9;
          }
        }
      }
      .police-badge{
        position: relative;
        padding-left: 34px;
        &::before{
          position: absolute;
          content: '';
          top: -5px;
          left: 10px;
          width: 20px;
          height: 20px;
          background: url('../assets/images/police-badge.png') no-repeat;
        }
      }
    }
  }
}
}
</style>