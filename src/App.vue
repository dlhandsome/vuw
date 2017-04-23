<template lang="html">
  <div class="app">
    <icon :type="type" :color="color" :size="size"></icon>
    <we-progress :percent="percent" :stroke-width="strokeWidth" :backgroundColor="backgroundColor" :show-info="showInfo"/>
  </div>
</template>

<script>
  const iconOption = {
    type: 'success',
    color: '',
    size: '100'
  }

  const progressOption = {
    percent: '50',
    strokeWidth: '3',
    backgroundColor: '',
    showInfo: true
  }

  export default {
    data () {
      return Object.assign(iconOption, progressOption)
    }
  }
</script>

<style lang="css">
</style>
