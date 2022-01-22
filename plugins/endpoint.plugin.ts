import { Plugin } from '@nuxt/types'
import ArticlesModel from '~/models/articles.model'
import CategoriesModel from '~/models/categories.model'

interface EndpointInstance {
  getArticle<ArticlesModel>(size?: Number, page?: Number, _search?: String): Promise<ArticlesModel>,
  getCategory<CategoriesModel>(): Promise<CategoriesModel>,
  sendCredentials(isLogin: boolean, body: Object): Promise<Object>,
  createArticle(form: FormData): Promise<Object>
}

declare module 'vue/types/vue' {
  interface Vue {
    $endpoint: EndpointInstance
  }
}

const endpointPlugin: Plugin = (ctx, inject) => {
  const endpoint = {
    getArticle: async (size: Number = 3, page: Number = 1, _search: String): Promise<ArticlesModel> =>
      await ctx.$axios.get('api/article', { params: { search: _search, size, page } }),
    getCategory: async (): Promise<CategoriesModel> =>
      await ctx.$axios.get('api/article-category'),
    sendCredentials: async (isLogin: boolean = true, body: Object): Promise<Object> =>
      await ctx.$axios.post(`api/auth/${isLogin ? 'login' : 'register'}`, body),
    createArticle: async (form: FormData): Promise<Object> =>
      await ctx.$axios.post('api/article/create', form)
  }

  inject('endpoint', endpoint)
}

export default endpointPlugin
