<template>
  <Div class="flex w-full flex-col">
    <Header />
    <Div class="flex w-full min-h-screen py-20 flex-col items-center">
      <Nuxt class="responsive" />
    </Div>
    <Modal :is-open="$store.state.modal.isOpen" @onClose="onModalClose">
      <CredentialModal @modalState="onModalClose" />
    </Modal>
    <Footer />
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/header/header.vue'
import Footer from '~/components/footer/footer.vue'
import Modal from '~/components/modal/modal.vue'
import CredentialModal from '~/components/account/credential.modal.vue';

export default Vue.extend({
  components: {
    Header,
    Footer,
    Modal,
    CredentialModal
  },
  data: () => ({
    openModal: false
  }),
  methods: {
    onModalClose(state: boolean) {
      this.$store.commit('modal/currentState', {
        isOpen: state
      })
    }
  }
})
</script>
