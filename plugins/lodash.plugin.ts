import { Plugin } from '@nuxt/types'
import * as lodash from 'lodash'

declare module 'vue/types/vue' {
  interface Vue {
    $lodash: lodash.__
  }
}

const lodashPlugin: Plugin = (_, inject) => {
  const a = lodash

  inject('lodash', a)
}

export default lodashPlugin
