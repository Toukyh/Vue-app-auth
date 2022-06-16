<template>
  <div class="article">
    {{ getArticles }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ArticleView',
  computed: {
    ...mapGetters({
      getArticles: 'post/getArticles'
    })
  }
}
</script>
