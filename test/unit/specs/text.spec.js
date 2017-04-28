/**
 * Created by sail on 2017/4/27.
 */
import { destoryVm, testComponent } from '../helper'
import Text from '@com/text'

describe('text.vue', () => {
  let vm

  afterEach(() => {
    destoryVm(vm)
  })

  it('create', () => {
    vm = testComponent(Text)

    expect(vm.$el.classList.contains('weapp-text')).to.true
  })
})
