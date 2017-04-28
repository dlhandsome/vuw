/**
 * Created by sail on 2017/4/27.
 */
import text from './text'

text.install = function (Vue) {
  Vue.component(text.name, text)
}

export default text
