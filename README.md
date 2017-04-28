# vuw

[![travis-ci](https://travis-ci.org/dlhandsome/vue-weapp.svg?branch=master)](https://travis-ci.org/dlhandsome/vue-weapp)

> weapp Components build with Vue.js

## Quick Start

```javascript
  import Vue from 'vue'
  import Vuw from '../dist/vuw.js'
  import '../dist/vuw.min.css'
  
  Vue.use(Vuw)
  
  // or
  import Vue from 'vue'
  import {
    view,
    icon
    // ...
  } from '../dist/vuw.js'
  import '../dist/vuw.min.css'
  
  Vue.component(view.name, view)
  Vue.component(icon.name, icon)
```

⚠️ 由于小程序组件名部分与原生html标签冲突，vuw默认使用w-前缀

### icon

```html
  <w-icon :type="type" :color="color" :size="size"></w-icon>
```

```javascript
  data () {
    type: 'success',
    color: 'green',
    size: 50
  }

```

## CONTRIBUTING

[参与贡献](https://github.com/dlhandsome/vuw/blob/master/CONTRIBUTE.md)

## LICENSE

[MIT](https://github.com/dlhandsome/vuw/blob/master/LICENSE)




