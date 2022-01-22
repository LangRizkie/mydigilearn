import { Plugin } from '@nuxt/types'

interface NormalizeUrl {
  normal: String
  route: String
}

interface GlobalInstance {
  isImage<Boolean>(name: string): Boolean
  normalizeUrl(url: string): NormalizeUrl
  randomPhoneNumber(min: number, max: number): number,
  isLoggedIn(): boolean,
  logout(): void
}


declare module 'vue/types/vue' {
  interface Vue {
    $global: GlobalInstance
  }
}

const globalPlugin: Plugin = (_, inject) => {
  const global = {
    isImage(name: string) {
      const format = name.slice(name.lastIndexOf('.') + 1, name.length)
      const extensions = [
        'tif', 'tiff', 'bmp',
        'jpg', 'jpeg', 'png',
        'gif'
      ]

      return extensions.includes(format)
    },
    normalizeUrl(url: string) : NormalizeUrl {
      return {
        normal: url.replaceAll('-', ' '),
        route: url.replaceAll(' ', '-')
      };
    },
    randomPhoneNumber: (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min,
    isLoggedIn() {
      if (process.client) return localStorage.getItem('credentials.loggedIn') ?
        JSON.parse(localStorage.getItem('credentials.loggedIn') || 'false') : false
    },
    logout() {
      if (process.client) {
        localStorage.clear()
        location.reload()
      }
    }
  }

  inject('global', global)
}

export default globalPlugin
