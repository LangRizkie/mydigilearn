<template>
  <Div v-if="!isLoading" class="flex relative my-16 flex-col lg:flex-row justify-between">
    <Div class="flex w-full lg:w-[70%] flex-col">
      <H1 class="text-2xl font-black mb-10">
        Create a New Article
      </H1>
      <Label class="flex flex-col mb-[3%]">
        <Span class="mb-2">Title</Span>
        <input v-model="title" type="text" placeholder="Enter your new Article Title">
      </Label>
      <client-only>
        <VueEditor v-model="description" :editor-toolbar="customToolbar" placeholder="Write your Story" />
      </client-only>
    </Div>
    <Div class="flex w-full mt-12 lg:mt-0 lg:w-[28%] flex-col">
      <H1 class="text-2xl font-black mb-10">
        Publication Detail
      </H1>
      <Label class="flex flex-col mb-[3%]">
        <Span class="mb-2">Short Description</Span>
        <textarea v-model="short_description" class="resize-none h-[10rem]"
          placeholder="Enter your Article Short Description"></textarea>
      </Label>
      <Label for="upload" class="flex flex-col mb-[3%] cursor-pointer">
        <Span class="mb-2">Thumbnail</Span>
        <input id="upload" class="form-control focus:outline-none" type="file" accept="image/*" @change="fileChange">
      </Label>
      <Label class="flex flex-col mb-[3%]">
        <Span class="mb-2">Categories</Span>
        <select v-model="category_id" class="form-select appearance-none px-3 py-1.5 bg-clip-padding bg-no-repeat
            border border-gray-300" aria-label="Default select example">
          <option v-for="(each, index) in categories.content" :key="index" :value="each.id">
            {{ each.title }}
          </option>
        </select>
      </Label>
      <Label class="flex justify-between mb-[3%]">
        <Span>Published</Span>
        <Div class="form-check form-switch mb-7">
          <input v-model="is_visible" class="form-check-input appearance-none switch" type="checkbox" role="switch">
        </Div>
      </Label>
      <Button type="button" class="submit" @click="submitArticle()">Publish</Button>
    </Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoriesModel from '~/models/categories.model'

export default Vue.extend({
  beforeRouteEnter(_, __, next) {
    next(vm => {
      vm.$store.commit('header/currentRoute', {
        title: '/create',
      })

      if (!vm.$global.isLoggedIn()) {
        vm.$store.commit('modal/currentState', {
          isOpen: true
        })

        vm.$router.back()
      }
    })
  },
  data: () => ({
    isLoading: true,
    title: '',
    image: {} as File,
    description: '',
    short_description: '',
    category_id: '',
    is_visible: false,
    categories: {} as CategoriesModel,
    customToolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }]
    ]
  }),
  mounted() {
    Promise.all([
      this.getCategory()
    ]).then(() => {
      this.isLoading = false
    })
  },
  methods: {
    getCategory() {
      this.$endpoint.getCategory().then((categories: any) => {
        this.categories = new CategoriesModel(categories.data)
      })
    },
    fileChange(e: Event) {
      const target = e.target as HTMLInputElement

      if (target.files) {
        this.image = target.files[0]
      }
    },
    submitArticle() {
      const form = new FormData()

      if (this.image.size > 0)
        form.append('image', this.image)

      form.append('title', this.title)
      form.append('description', this.description)
      form.append('short_description', this.short_description)
      form.append('category_id', this.category_id)
      form.append('is_visible', JSON.stringify(this.is_visible))

      this.$endpoint.createArticle(form).then(_ => {
        this.$router.push('/article')
      })
    }
  }
})
</script>

<style lang="scss">
@import './create.scss';
</style>
