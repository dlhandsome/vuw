import Components from '../packages'

const CONFLICT_TAG = ['view', 'text', 'progress', 'button', 'form', 'input', 'label', 'textarea', 'audio', 'video', 'canvas']

export default {
  install (Vue, { prefix = 'weapp' } = {}) {
    Object.keys(Components).forEach(key => {
      const componentName = CONFLICT_TAG.indexOf(key) !== -1 ? `${prefix}-${key}` : key
      Vue.component(componentName, Components[key])
    })
  }
}
