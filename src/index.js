import view from '@com/view'
import scrollView from '@com/scroll-view'
import icon from '@com/icon'
import text from '@com/text'
import progress from '@com/progress'

const components = [
  view,
  scrollView,
  icon,
  text,
  progress
]

const Com = {}

Com.install = function (Vue) {
  if (Com.install.installed) return
  components.forEach(com => {
    Vue.component(com.name, com)
  })
}

if (typeof window !== undefined && window.Vue) {
  Com.install(window.Vue)
  Com.install.installed = true
}

export {
  Com as default,
  view,
  scrollView,
  icon,
  text,
  progress
}
