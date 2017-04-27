/**
 * Created by sail on 2017/4/27.
 */
import { destoryVm, testComponent } from '../helper'
import Components from '../../../packages/text'

describe('text.vue', () => {
  let vm

  afterEach(() => {
    destoryVm(vm)
  })

  it('create', () => {
    vm = testComponent(Components.text)

    expect(vm.$el.classList.contains('weapp-text')).to.true
  })
})
