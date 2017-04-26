<template>
  <div class="weapp-scroll-view" @scroll="scroll" :style="style"><slot></slot></div>
</template>

<script>
  import helper from '@/helper'

  const props = {
    'scrollX': {
      type: Boolean,
      default: false
    },
    'scrollY': {
      type: Boolean,
      default: false
    },
    'upperThreshold': {
      type: Number,
      default: 50
    },
    'lowerThreshold': {
      type: Number,
      default: 50
    },
    'scrollTop': {
      type: Number,
      default: 0
    },
    'scrollLeft': {
      type: Number,
      default: 0
    },
    'scrollIntoView': {
      type: String,
      default: ''
    },
    'scrollWithAnimation': {
      type: Boolean,
      default: false
    },
    'enableBackToTop': {
      type: Boolean,
      default: false
    }
  }

  export default {
    name: 'scroll-view',

    props,

    computed: {
      _upperThreshold () {
        const { upperThreshold } = props
        return helper.merge(upperThreshold, this.upperThreshold)
      },
      _lowerThreshold () {
        const { lowerThreshold } = props
        return helper.merge(lowerThreshold, this.lowerThreshold)
      },
      _scrollTop () {
        const { scrollTop } = props
        return helper.merge(scrollTop, this.scrollTop)
      },
      _scrollLeft () {
        const { scrollLeft } = props
        return helper.merge(scrollLeft, this.scrollLeft)
      },
      style () {
        return {
          'overflow-x': this.scrollX ? 'scroll' : 'hidden',
          'overflow-y': this.scrollY ? 'scroll' : 'hidden'
        }
      }
    },

    methods: {
      scroll () {
        const elem = this.$el
        const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight } = elem

        this.$emit('scroll')

        const uppers = []
        const lowers = []

        if (this.scrollX) {
          uppers.push(scrollLeft)
          lowers.push(scrollWidth - scrollLeft - clientWidth)
        }
        if (this.scrollY) {
          uppers.push(scrollTop)
          lowers.push(scrollHeight - scrollTop - clientHeight)
        }

        uppers.forEach(upper => {
          upper <= this._upperThreshold && this.$emit('scrolltoupper')
        })

        lowers.forEach(lower => {
          lower <= this._lowerThreshold && this.$emit('scrolltolower')
        })
      }
    },

    mounted () {
      const elem = this.$el

      elem.scrollTop = this.scrollTop
      elem.scrollLeft = this.scrollLeft
    }
  }
</script>

<style>
  .weapp-scroll-view{
    display: block;
    width: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }
</style>
