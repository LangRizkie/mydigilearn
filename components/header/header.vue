<template>
  <Div class="header-container" :class="{ 'min-h-screen': isActive }">
    <Div class="header-wrapper responsive">
      <Nuxt-link to="/">
        <Nuxt-img width="124" src="/logo.png" alt="logo" />
      </Nuxt-link>
      <Div class="sm:flex w-full font-medium sm:justify-between items-center"
        :class="{ 'flex absolute top-0 z-20 min-h-screen flex-col': isActive, 'hidden': !isActive }">
        <Div class="flex items-center" :class="{ 'w-full flex-col pt-24': isActive }">
          <Nuxt-link v-for="(each, index) in routes" :key="index"
            class="capitalize mb-10 ml-0 sm:mb-0 sm:ml-8" :to="each.route" :class="{ 'text-red-500': each.route === activeRoute }"
            @click.native="isActive = false">
            {{ each.name }}
          </Nuxt-link>
        </Div>
        <Button v-if="$global.isLoggedIn()" @click="$global.logout()">logout</Button>
        <Button v-else @click="openModal(true); isActive = false">login</Button>
      </Div>
      <Div class="flex relative mr-[3.2%] justify-center items-center">
        <Button class="flex sm:hidden absolute z-30 hamburger hamburger--squeeze" :class="{ 'is-active': isActive }"
          type="button" aria-label="Menu" aria-controls="navigation" aria-expanded="true/false"
          @click="isActive = !isActive">
          <Span class="hamburger-box">
            <Span class="hamburger-inner"></Span>
          </Span>
        </Button>
      </Div>
    </Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    routes: [
      { name: 'home', route: '/' },
      { name: 'article', route: '/article' },
      { name: 'create', route: '/create' }
    ],
    isActive: false
  }),
  computed: {
    activeRoute() {
      return this.$store.state.header.title
    }
  },
  beforeMount() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (process.client)
        this.isActive = window.innerWidth > 640 ? false : this.isActive
    },
    openModal(state: boolean) {
      this.$store.commit('modal/currentState', {
        isOpen: state
      })
    }
  },
})
</script>

<style lang="scss">
@import './header.scss';
</style>
