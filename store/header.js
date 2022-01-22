export const state = () => ({
	title: '',
})

export const mutations = {
  currentRoute(state, header) {
		state.title = header.title
  }
}
