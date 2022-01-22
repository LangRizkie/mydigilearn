<template>
  <Div class="flex flex-col">
    <Div class="flex w-full text-lg font-bold justify-between items-center">
      <H3 class="text-2xl">{{ isLogin ? 'Login' : 'Register' }}</H3>
      <Button type="button" @click="$emit('modalState', false)">&#10006;</Button>
    </Div>
    <Span class="my-4">
      {{ isLogin ? `Don't have an account?` : 'Have an account?' }}
      <Button class="text-red-500" @click="isLogin = !isLogin; error = { state: false, message: '' }">
        {{ isLogin ? `Create Account` : 'Login' }}
      </Button>
    </Span>
    <Label v-if="!isLogin" class="mb-6">
      <Span class="text-sm">Fullname</Span>
      <input v-model="form.name" type="email" placeholder="Entry your name" class="form-control w-full bg-clip-padding
        border border-gray-300 focus:outline-none">
    </Label>
    <Label>
      <Span class="text-sm">Email</Span>
      <input v-model="form.email" type="email" placeholder="Entry your email" class="form-control w-full bg-clip-padding
        border border-gray-300 focus:outline-none">
    </Label>
    <Label class="mt-6">
      <Span class="text-sm">Password</Span>
      <Div class="flex relative w-full items-center">
        <input v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Entry your password"
          class="form-control w-full bg-clip-padding border border-gray-300 focus:outline-none">
        <Button class="absolute right-4" @click="showPassword = !showPassword">
          &#128065;
        </Button>
      </Div>
    </Label>
    <Button type="submit" class="submit mt-12" @click="sendCredentials(isLogin)">
      {{ isLogin ? 'Log In' : 'Create Account' }}
    </Button>
    <Span v-if="error.state" class="text-sm my-4 text-red-500">
      {{ error.message }}
    </Span>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    form: {
      name: '',
      email: '',
      password: ''
    },
    error: {
      state: false,
      message: ''
    },
    showPassword: false,
    isLogin: true
  }),
  methods: {
    sendCredentials(isLogin: boolean) {

      const body = isLogin ? {
        email: this.form.email,
        password: this.form.password
      } : {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        phone: '08' + String(this.$global.randomPhoneNumber(1, 999999999))
      }

      this.$endpoint.sendCredentials(isLogin, body).then((credentials: any) => {
        if (isLogin) {
          const stringify = JSON.stringify(credentials.data.content[0])

          localStorage.setItem('credentials.data', stringify)
          localStorage.setItem('credentials.loggedIn', String(true))

          location.reload()
        } else {
          this.sendCredentials(true)
        }
      }).catch((err: any) => {
        this.error = {
          state: true,
          message: err.response.data.message.details ?
            err.response.data.message.details[0].message :
            err.response.data.message
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
@import 'credential.modal.scss';
</style>
