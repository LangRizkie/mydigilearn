<template>
  <Div v-if="!isLoading && articles.content" class="flex max-w-screen-md relative my-16 flex-col">
    <H1 class="text-2xl font-black mb-12 line-clamp-2 leading-tight">
     {{ article.title }}
    </H1>
    <P>
      {{ article.short_description }}
    </P>
    <Img v-if="$global.isImage(article.image)" class="w-full my-6" :data-src="article.image"
        :src="article.image" :alt="article.title" />
    <Div v-start-with-html="article.description"></Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticlesModel from '~/models/articles.model'

export default Vue.extend({
  data: () => ({
    isLoading: true,
    articles: {} as ArticlesModel
  }),
  computed: {
    article() {
      return this.articles.content[0]
    }
  },
  mounted() {
    Promise.all([
      this.getArticle()
    ]).then(() => {
      this.isLoading = false
    })
  },
  methods: {
    getArticle() {
      this.$endpoint.getArticle(1, 1, this.$global.normalizeUrl(this.$route.params.title).normal)
      .then((articles: any) => {
        this.articles = new ArticlesModel(articles.data)
      })
    }
  }
})
</script>

<router>
  { path: '/article/:title' }
</router>
