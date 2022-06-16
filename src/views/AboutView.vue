<template>
  <div v-if="user" class="about">
    <h1>{{ user.name }}</h1>
    <br />
    <p>{{ user.email }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AboutView',
  computed: {
    ...mapGetters({
      user: 'login/user'
    })
  }
}
</script>
