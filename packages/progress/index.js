/**
 * Created by sail on 2017/4/22.
 */
import progress from './progress'

progress.install = function (Vue) {
  Vue.component(progress.name, progress)
}

export default progress
