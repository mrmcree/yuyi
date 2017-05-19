<template>
  <div class="shopcar">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class='{"hightlight":totalCount>0}'>
            <i class="icon-shopping_cart" :class='{"hightlight":totalCount>0}'></i>
          </div>
          <div class="num" v-show='totalCount>0'>{{totalCount}}</div>
        </div>
        <div class="price" :class='{"hightlight":totalPrice>0}'>￥{{totalPrice}}元</div>
        <div class="desc">另需配送费￥{{delevery_price}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class='payClass'>
          {{payDesc}}
        </div>
      </div>
      <div class="ball-container">
        <!--<transition-group name='drop' class="ball" v-for='ball in balls' v-show='ball.show' tag='div'>-->
          <!--<div class="inner" :key='ball.show'></div>-->
        <!--</transition-group>-->

      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    name: 'shopcar',
    data () {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ]
      }
    },
    props: {
      selectFoods: {
        type: Array,
        default () {
          return [
            {
              price: 10,
              count: 2
            }
          ]
        }
      },
      delevery_price: {
        type: Number,
        default: 0
      },
      min_price: {
        type: Number,
        default: 0
      }
    },
    methods: {
      _drop (e) {
        console.log('shopcar', e)
      }
    },
    computed: {
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      },
      totalCount () {
        let count = 0
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        return count
      },
      payDesc () {
        if (this.totalPrice === 0) {
          return `￥${this.min_price}元起送`
        } else if (this.totalPrice < this.min_price) {
          let diff = this.min_price - this.totalPrice
          return `还差￥${diff}元起送`
        } else {
          return '去结算'
        }
      },
      payClass () {
        if (this.totalPrice < this.min_price) {
          return 'no-enough'
        } else {
          return 'enough'
        }
      }
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .shopcar
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    color: #80858a
    .content
      display: flex
      background: #141d27
      font-size: 0
      .content-left
        flex: 1
        .logo-wrapper
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          display: inline-block
          vertical-align: top
          border-radius: 50%
          background: #141d27
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            color: #fff
            background: red
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            background: #2b342c
            text-align: center
            &.hightlight
              background: rgb(0, 160, 220)
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              &.hightlight
                color: #fff
        .price, .desc
          display: inline-block
          vertical-align: top
          line-height: 24px
          margin-top: 12px
          box-sizing: border-box
          padding-right: 12px
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
          &.hightlight
            color: #fff
        .desc
          display: inline-block
          font-size: 10px
          border: 0
          font-weight: 500
          margin: 12px 0 0 12px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          font-size: 12px
          height: 48px
          line-height: 48px
          text-align: center
          font-weight: 700
          background: #2b333b
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff

    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        &.drop-transition
          transition: all 0.4s
          .inner
            width: 16px
            height: 16px
            border-radius: 50%
            background: rgb(0, 160, 200)
            transtion: all 0.4s ease-in
</style>
