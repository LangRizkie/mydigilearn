export default function ({ app, $axios, redirect }) {
  $axios.onRequest(_ => {
    if (app.$global.isLoggedIn()) {
      const credentials = JSON.parse(localStorage.getItem('credentials.data'))
      $axios.setHeader('Authorization', `Bearer ${credentials.token}`)
    }
  })

  $axios.onError(_ => {
    redirect('/')
  })
}
