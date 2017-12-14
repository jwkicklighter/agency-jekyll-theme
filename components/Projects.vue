<template>
  <div class="project-previews">
    <project-preview
      v-for="project in projects"
      :key="project.name"
      :thumb="project.thumbnail"
      :title="project.title"
      :path="project.permalink"
      :projectType="project.type" />
  </div>
</template>

<script>
  import ProjectPreview from '~/components/ProjectPreview.vue'

  export default {
    components: {
      ProjectPreview
    },
    props: {
      projects: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
$white: #EFEFEF;
$black: #35495e;
$album-spacing: 5px;

.project-previews {
  background-color: $white;
  padding: $album-spacing;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: wrap;
}
</style>
