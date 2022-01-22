<template>
  <Div v-if="!isLoading" class="flex max-w-screen-md relative my-16 flex-col">
    <Div class="grid md:grid-cols-3 gap-6">
      <Div v-for="(each, index) in articles.content" :key="index" class="flex w-full justify-center">
        <Card class="mb-6 md:mb-0" :data="each" :to="`article/${$global.normalizeUrl(each.title).route}`" />
      </Div>
    </Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/card/card.vue'
import ArticlesModel from '~/models/articles.model'

export default Vue.extend({
  components: { Card },
  beforeRouteEnter(_, __, next) {
    next(vm => {
      vm.$store.commit('header/currentRoute', {
        title: '/article',
      })
    })
  },
  data: () => ({
    isLoading: true,
    articles: {} as ArticlesModel
  }),
  mounted() {
    Promise.all([
      this.getArticle()
    ]).then(() => {
      this.isLoading = false
    })
  },
  methods: {
    getArticle() {
      this.$endpoint.getArticle(9).then((articles: any) => {
        this.articles = new ArticlesModel(articles.data)
      })
    }
  }
})
</script>

<router>
  { path: '/article' }
</router>
