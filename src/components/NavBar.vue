<!-- @format -->

<template>
  <!-- component -->
  <header>
    <div class="py-4 px-2 lg:mx-4 xl:mx-12">
      <div class="">
        <nav class="flex items-center justify-between flex-wrap">
          <div
            v-if="user"
            class="flex items-center flex-no-shrink text-white mr-6"
          >
            <span class="text-blue-400 mt-2 hover:text-indigo-400 font-black">
              {{ user.name }}
            </span>
          </div>
          <div id="main-nav" class="w-full flex-grow lg:flex items-center">
            <div
              class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8"
            >
              <template v-if="!authenticated">
                <router-link
                  to="/"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-blue-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  >HOME</router-link
                >
                <router-link
                  to="/login"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-blue-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  LOGIN
                </router-link>
                <router-link
                  to="/register"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-blue-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  REGISTER
                </router-link>
              </template>
              <template v-else>
                <router-link
                  to="/about"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-blue-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  PROFILE
                </router-link>
                <router-link
                  to="/article"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-blue-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  ARTICLES
                </router-link>

                <button
                  @click.prevent="logout"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-blue-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  LOGOUT
                </button>
              </template>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      authenticated: 'login/authenticated',
      user: 'login/user'
    })
  },
  methods: {
    ...mapActions({
      signOut: 'login/signOut'
    }),
    async logout () {
      await this.signOut().then(() => {
        this.$router.replace({
          name: 'home'
        })
      })
    }
  }
}
</script>
<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: rgb(129 140 248);
    }
  }
}
</style>
