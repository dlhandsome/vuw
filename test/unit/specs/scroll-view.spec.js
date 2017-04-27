/**
 * Created by sail on 2017/4/27.
 */
import Vue from 'vue'
import Components from '@/components/scroll-view'

describe('scroll-view.vue', () => {
  let vm
  it('create', () => {
    const Constructor = Vue.extend(Components['scroll-view'])

    vm = new Constructor().$mount()

    expect(vm.$el.classList.contains('weapp-scroll-view')).to.true
  })
})
