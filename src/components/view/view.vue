<template>
  <div class="weapp-view"
       :class="_class"
       @touchstart="_touchstart"
       @touchend="_touchend">
    <slot></slot>
  </div>
</template>

<script>
  import helper from '@/helper'

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
      _hoverStartTime () {
        const { hoverStartTime } = props
        return helper.merge(hoverStartTime, this.hoverStartTime)
      },
      _hoverStayTime () {
        const { hoverStayTime } = props
        return helper.merge(hoverStayTime, this.hoverStayTime)
      },
      _class () {
        if (!this.hover) return ''
        if (!this.isHover) {
          return ''
        } else {
          return this.hoverClass
        }
      }
    },

    methods: {
      _touchstart () {
        if (!this.hover) return ''
        setTimeout(() => {
          this.isHover = true
        }, this._hoverStartTime)
      },
      _touchend () {
        if (!this.hover) return ''
        setTimeout(() => {
          this.isHover = false
        }, this._hoverStayTime + this._hoverStartTime)
      }
    }
  }
</script>

<style>

</style>
