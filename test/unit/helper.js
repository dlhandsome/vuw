/**
 * Created by sail on 2017/4/27.
 *
 * @link: https://github.com/ElemeFE/element
 * @link: https://vuejs.org/v2/guide/unit-testing.html#Writing-Testable-Components
 */
import Vue from 'vue'
import Vuw from '@/index'

Vue.use(Vuw)

let id = 0

/**
 * 创建元素
 * @returns {Element} 返回元素
 */
function createElem () {
  const elem = document.createElement('div')

  elem.id = ++id
  document.body.appendChild(elem)

  return elem
}

/**
 * 销毁vm实例
 * @param vm
 */
exports.destoryVm = function (vm) {
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el)
}

/**
 * 测试组件实例
 * @param component 组件对象
 * @param props props数据
 * @param mounted 是否挂载到DOM上
 * @returns {Vue}
 */
exports.testComponent = function (component, props = {}, mounted = false) {
  if (typeof props === 'boolean') {
    mounted = props
    props = {}
  }
  const elem = createElem()
  const Constructor = Vue.extend(component)

  return new Constructor(props).$mount(mounted === false ? null : elem)
}

/**
 * 创建Vue实例
 * @param component 组件配置
 * @param mounted 是否挂载到DOM上
 */
exports.createVue = function (component, mounted = false) {
  if (toString.call(component) === '[object String]') {
    component = { component }
  }
  const elem = createElem()

  return new Vue(component).$mount(mounted === false ? null : elem)
}
