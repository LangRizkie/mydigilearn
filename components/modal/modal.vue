<template>
  <Div v-if="isOpen" class="modal-backdrop" @click="closeBackdrop">
    <Div class="flex absolute z-30 flex-col p-6 w-full sm:w-96
      bg-white rounded-tl-md rounded-tr-md sm:rounded-md">
      <slot />
    </Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeBackdrop(e: Event) {
      const target = e.target as HTMLElement

      if (target.className === 'modal-backdrop')
        this.$emit('onClose', false)
    }
  }
})
</script>

<style lang="scss">
@import 'modal.scss';
</style>
