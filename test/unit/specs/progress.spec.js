/**
 * Created by sail on 2017/4/24.
 */
import { destoryVm, testComponent } from '../helper'
import Progress from '@com/progress'

describe('progress.vue', () => {
  let vm

  afterEach(() => {
    destoryVm(vm)
  })

  it('create', () => {
    vm = testComponent(Progress)

    expect(vm.$el.classList.contains('weapp-progress')).to.true
  })

  it('show percent info', () => {
    const percent = 100 * Math.random()
    const info = true

    vm.percent = percent
    vm.showInfo = info

    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.weapp-progress-percent') !== null).to.true
      expect(vm.$el.querySelector('.weapp-progress-percent').innerText).to.equal(`${percent}%`)
    })
  })
})
