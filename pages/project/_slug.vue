<template>
  <section class="project-wrapper">
    <div class="project-left">
      <img v-if="!videoProject" :src="imagePath" alt="" class="main-image" />
      <iframe v-if="videoProject" width="560" height="315" :src="videoEmbedLink" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
    </div>
    <div class="project-right">
      <h1 class="project-title">{{ title }}</h1>
      <h3 class="project-type">{{ type }}</h3>
      <nuxtent-body :body="post.body" />
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData ({ app, route }) {
      return {
        post: await app.$content('/project/').get(route.params.slug)
      }
    },
    data () {
      return {
        slug: this.$route.params.slug
      }
    },
    computed: {
      imagePath () {
        return require('assets/' + this.post.main_graphic + '.jpg')
      },
      title () {
        return this.post.title
      },
      type () {
        return this.post.type.charAt(0).toUpperCase() + this.post.type.slice(1)
      },
      videoEmbedLink () {
        return this.post.youtube_link
      },
      videoProject () {
        return this.post.type === 'video'
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
.project-wrapper {
  display: flex;
  padding: 20px;
}

.project-left {
  margin-right: 20px;
}

.project-type {
  margin-bottom: 15px;
}

.main-image {
  width: 500px;
}
</style>
