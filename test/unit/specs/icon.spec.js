/**
 * Created by sail on 2017/4/27.
 */
import Vue from 'vue'
import Components from '@/components/icon'

describe('icon.vue', () => {
  let vm
  it('create', () => {
    const Constructor = Vue.extend(Components.icon)

    vm = new Constructor().$mount()

    expect(vm.$el.classList.contains('weapp-icon')).to.true
  })

  it('mounted', () => {
    const VALID_TYPES = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']

    const size = 100 * Math.random()
    const type = VALID_TYPES[parseInt(VALID_TYPES.length * Math.random())]

    vm.type = type
    vm.size = size

    vm.$nextTick(() => {
      expect(vm.$el.classList.contains(`weapp-icon-${type}`)).to.true
      expect(vm.$el.style.fontSize).to.equal(`${size}px`)
    })
  })
})
