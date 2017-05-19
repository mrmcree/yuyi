<template>
  <div class="control">
    <transition name='move'>
      <div class="cart-decrease " v-show='food.count>0' @click='deleteCart'>
        <span class="icon-remove_circle_outline inner"></span>
      </div>
    </transition>
    <div class="cart-count" v-show='food.count>0'>{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click='addCart'></div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import Vue from 'vue'
  export default {
    props: {
      food: {
        type: Object
      }
    },
    name: 'control',
    data () {
      return {}
    },
    created () {
    },
    methods: {
      addCart (event) {
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
          this.food.count = 1
        } else {
          Vue.set(this.food, 1)
          this.food.count++
        }
        this.$emit('add', event.target)
      },
      deleteCart (event) {
        if (!event._constructed) {
          return
        }
        if (this.food.count === 0) {
          return
        }
        this.food.count--
      }
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .control
    font-size: 0
    display: inline-block
    .cart-decrease, .cart-add
      display: inline-block
      padding: 6px
      font-size: 24px
      line-height: 24px
      color: rgb(0, 160, 220)
    .cart-decrease
      transition: all 0.4s linear
      &.move-transition
        opacity: 1
        transform: translate3D(0, 0)
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 200)
        transition: all 0.4s linear
        transform: rotate(0deg)
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3D(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
    .cart-add
      display: inline-block


</style>
