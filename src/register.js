import Components from './components'

export default {
  install (Vue, options) {
    Object.keys(Components).forEach(key => {
      Vue.component(key, Components[key])
    })
  }
}
