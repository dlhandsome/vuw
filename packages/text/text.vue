<template>
  <span class="weapp-text" :style="style">
    <slot></slot>
  </span>
</template>

<script>
  let timeout

  const props = {
    'selectable': {
      type: Boolean,
      default: false
    }
  }

  export default {
    name: 'text',

    props,

    computed: {
      style () {
        return {
          userSelect: this.selectable ? 'text' : 'none'
        }
      }
    }
  }
</script>
