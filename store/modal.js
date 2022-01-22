export const state = () => ({
	isOpen: false
})

export const mutations = {
  currentState(state, modal) {
		state.isOpen = modal.isOpen
  }
}
