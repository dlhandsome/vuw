<template>
  <div class="weapp-view"
       :class="[viewClass]"
       @touchstart="touchstart"
       @touchend="touchend">
    <slot></slot>
  </div>
</template>

<script>
  const props = {
    'hover': {
      type: Boolean,
      default: false
    },
    'hoverClass': {
      type: String,
      default: 'none'
    },
    'hoverStartTime': {
      type: Number,
      default: 50
    },
    'hoverStayTime': {
      type: Number,
      default: 400
    }
  }

  export default {
    name: 'view',

    data () {
      return {
        isHover: false
      }
    },

    props,

    computed: {
      viewClass () {
        if (!this.hover) return ''
        if (!this.isHover) {
          return ''
        } else {
          return this.hoverClass
        }
      }
    },

    methods: {
      touchstart () {
        if (!this.hover) return ''
        setTimeout(() => {
          this.isHover = true
        }, this.hoverStartTime)
      },
      touchend () {
        if (!this.hover) return ''
        setTimeout(() => {
          this.isHover = false
        }, this.hoverStayTime + this.hoverStartTime)
      }
    }
  }
</script>

<style>

</style>
