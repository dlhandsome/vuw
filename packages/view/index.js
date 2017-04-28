/**
 * Created by sail on 2017/4/26.
 */
import view from './view'

view.install = function (Vue) {
  Vue.component(view.name, view)
}

export default view
