<template>
    <div class="weapp-progress">
      <div class="weapp-progress-bar" :style="barStyle">
        <div class="weapp-progress-inner_bar" :style="innerBarStyle"></div>
      </div>
      <div v-show="showInfo" class="weapp-progress-percent">{{ percent + '%' }}</div>
    </div>
</template>

<script>
  const props = {
    'percent': {
      type: Number,
      default: 0,
      validator (percent) {
        return percent >= 0 && percent <= 100
      }
    },
    'showInfo': {
      type: Boolean,
      default: false
    },
    'strokeWidth': {
      type: Number,
      default: 6
    },
    'color': {
      type: String,
      default: '#09BB07'
    },
    'activeColor': {
      type: String,
      default: ''
    },
    'backgroundColor': {
      type: String,
      default: ''
    },
    'active': {
      type: Boolean,
      default: false
    }
  }

  export default {
    name: 'progress',

    props,

    computed: {
      barStyle () {
        return {
          height: `${this.strokeWidth}px`,
          backgroundColor: this.backgroundColor
        }
      },
      innerBarStyle () {
        return {
          backgroundColor: this.activeColor || this.color,  // 优先级：activeColor > color ，两者均为进度条颜色字段
          width: `${this.percent}%`
        }
      }
    }
  }
</script>

<style scroped>
  .weapp-progress{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .weapp-progress-bar{
    background-color: #EBEBEB;
    height: 6px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  .weapp-progress-inner_bar{
    width: 0;
    height: 100%;
    background-color: #09BB07;
  }
  .weapp-progress-percent{
    font-size: 16px;
    margin-left: 15px;
  }
</style>
