import Vue from 'vue'

Vue.directive('start-with-html', {
  inserted: (el, binding) => {
    el.insertAdjacentHTML('beforeend', binding.value)
  }
})
