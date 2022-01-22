<template>
  <Nuxt-link :to="to" class="card-container w-11/12 sm:w-3/5 md:w-64">
    <Div class="w-full h-40 bg-slate-50 bg-[url('/image-placeholder.svg')] bg-no-repeat bg-center">
      <Img v-if="$global.isImage(value.image)" class="w-full h-full object-cover" :data-src="value.image"
        :src="value.image" :alt="value.title" />
    </Div>
    <Div class="block h-12 my-3">
      <H1 class="text-lg font-black line-clamp-2 leading-tight">
        {{ value.title }}
      </H1>
    </Div>
    <P class="text-sm m-0">{{ value.short_description }}</P>
  </Nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleModel from '~/models/article.model'

export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: this.data as ArticleModel
    }
  }
})
</script>

<style lang="scss">
@import './card.scss';
</style>
