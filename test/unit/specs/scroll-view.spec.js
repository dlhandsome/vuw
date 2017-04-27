/**
 * Created by sail on 2017/4/27.
 */
import { destoryVm, testComponent } from '../helper'
import Components from '../../../packages/scroll-view'

describe('scroll-view.vue', () => {
  let vm

  afterEach(() => {
    destoryVm(vm)
  })

  it('create', () => {
    vm = testComponent(Components['scroll-view'])

    expect(vm.$el.classList.contains('weapp-scroll-view')).to.true
  })
})
