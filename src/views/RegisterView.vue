<!-- @format -->

<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
      <form
        @submit.prevent="register"
        class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
      >
        <!-- @csrf -->
        <div
          class="text-gray-800 text-sm flex justify-center border-b-2 py-4 mb-4"
        >
          vous n'avez pas encore de compte?
          <span
            ><router-link to="/login" class="text-blue-500">
              se connecter</router-link
            ></span
          >
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-normal mb-2"
            for="password"
          >
            username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-model="form.name"
            type="text"
            placeholder="Your name"
            name="name"
            required
            autocomplete="current-name"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-normal mb-2"
            for="username"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            v-model="form.email"
            type="email"
            required
            autofocus
            placeholder="Email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-normal mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-model="form.password"
            type="password"
            placeholder="Password"
            name="password"
            required
            autocomplete="current-password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Gau Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  neme: 'RegisterView',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      errors: 'register/errors'
    })
  },
  methods: {
    ...mapActions({
      signUp: 'register/register'
    }),
    register () {
      this.signUp(this.form).then(() => {
        this.$router.replace({
          name: 'login'
        })
      })
    }
  }
}
</script>
