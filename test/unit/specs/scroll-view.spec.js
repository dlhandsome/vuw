/**
 * Created by sail on 2017/4/27.
 */
import { destoryVm, testComponent } from '../helper'
import ScrollView from '@com/scroll-view'

describe('scroll-view.vue', () => {
  let vm

  afterEach(() => {
    destoryVm(vm)
  })

  it('create', () => {
    vm = testComponent(ScrollView)

    expect(vm.$el.classList.contains('weapp-scroll-view')).to.true
  })
})
