<template lang="html">
  <div class="app">
    <weapp-view :hover="hover" :hover-class="hoverClass" :hover-start-time="hoverStartTime" :hover-stay-time="hoverStayTime" >这是view容器</weapp-view>
    <icon :type="type" :color="color" :size="size"></icon>
    <weapp-progress :percent="percent" :stroke-width="strokeWidth" :backgroundColor="backgroundColor" :show-info="showInfo"/>
    <scroll-view :scroll-y="scrollY" :scroll-top="scrollTop" :scroll-x="scrollX" @scrolltoupper="scrolltoupper" @scrolltolower="scrolltolower">
      <weapp-view class="blue">blueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblue</weapp-view>
      <weapp-view class="red">redredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredredred</weapp-view>
      <weapp-view class="yellow">yellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellowyellow</weapp-view>
    </scroll-view>
  </div>
</template>

<script>
  const viewOption = {
    hover: true,
    hoverClass: 'view-hover',
    hoverStartTime: 200,
    hoverStayTime: 300
  }

  const scrollViewOption = {
    scrollX: false,
    scrollY: true,
    scrollTop: 500
  }

  const iconOption = {
    type: 'success',
    color: '',
    size: 100
  }

  const progressOption = {
    percent: 50,
    strokeWidth: 3,
    backgroundColor: '',
    showInfo: true
  }

  export default {
    data () {
      return Object.assign(viewOption, scrollViewOption, iconOption, progressOption)
    },
    methods: {
      scrolltolower () {
        console.log('lower')
      },
      scrolltoupper () {
        console.log('upper')
      }
    }
  }
</script>

<style>
  .weapp-scroll-view{
    height:500px;
    word-break: break-all;
  }
  .blue{
    width: 600px;
    height: 250px;
    background-color: cornflowerblue;
  }
  .red{
    width: 600px;
    height: 250px;
    background-color: indianred;
  }
  .yellow{
    width: 600px;
    height: 250px;
    background-color: yellow;
  }
</style>
