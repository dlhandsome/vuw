import Components from './components'

const CONFLICT_TAG = ['view', 'progress', 'button', 'form', 'input', 'label', 'textarea', 'audio', 'video', 'canvas']

export default {
  install (Vue, { prefix = 'weapp' } = {}) {
    Object.keys(Components).forEach(key => {
      const componentName = CONFLICT_TAG.indexOf(key) !== -1 ? `${prefix}-${key}` : key
      Vue.component(componentName, Components[key])
    })
  }
}
