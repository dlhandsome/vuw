/**
 * Created by sail on 2017/4/26.
 */
import scrollView from './scroll-view'

scrollView.install = function (Vue) {
  Vue.component(scrollView.name, scrollView)
}

export default scrollView
