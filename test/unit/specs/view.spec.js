/**
 * Created by sail on 2017/4/27.
 */
import { destoryVm, testComponent } from '../helper'
import View from '@com/view'

describe('view.vue', () => {
  let vm

  afterEach(() => {
    destoryVm(vm)
  })

  it('create', () => {
    vm = testComponent(View)

    expect(vm.$el.classList.contains('weapp-view')).to.true
  })
})
