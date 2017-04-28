<template>
  <div class="weapp-scroll-view" @scroll="scroll" :style="style"><slot></slot></div>
</template>

<script>
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
    name: 'w-scroll-view',

    props,

    computed: {
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
          upper <= this.upperThreshold && this.$emit('scrolltoupper')
        })

        lowers.forEach(lower => {
          lower <= this.lowerThreshold && this.$emit('scrolltolower')
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
