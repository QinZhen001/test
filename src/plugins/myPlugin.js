import MyHeader from '../components/MyHeader1.vue'

export default {
  install: (app, options) => {
    const { fontSize = {} } = options

    app.directive('font-size', (el, binding, vnode) => {
      let size = 16
      switch (binding.arg) {
        case 'small':
          size = fontSize.small
          break
        case 'large':
          size = fontSize.large
          break
        default:
          size = fontSize.medium
          break
      }
      el.style.fontSize = size + 'px'
    })


    app.component('my-header', MyHeader)

    app.mixin({
      data() {
        return {
          mixinUrl: "https://www.baidu.com"
        }
      },
      // global mixin life hook in any component
      // created() {
      //   console.log('mixin created')
      // }
    })

    const logout = () => {
      console.log('logout')
    }

    app.provide('logout', logout) 
  }
}
