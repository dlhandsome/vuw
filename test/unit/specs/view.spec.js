/**
 * Created by sail on 2017/4/27.
 */
import Vue from 'vue'
import Components from '@/components/view'

describe('view.vue', () => {
  let vm
  it('create', () => {
    const Constructor = Vue.extend(Components.view)

    vm = new Constructor().$mount()

    expect(vm.$el.classList.contains('weapp-view')).to.true
  })
})
