<template>
  <section>
    <h1>{{ post.title }}</h1>
    <h3>{{ post.type }}</h3>
    <nuxtent-body :body="post.body" />
  </section>
</template>

<script>
  export default {
    async asyncData ({ app, route }) {
      return {
        post: await app.$content('/project/').get(route.params.slug)
      }
    },
    components: {
    },
    data () {
      return {
        slug: this.$route.params.slug
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
