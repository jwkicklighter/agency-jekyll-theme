<template>
  <div class="project-previews">
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <project-preview thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
  </div>
</template>

<script>
  import ProjectPreview from '~/components/ProjectPreview.vue'

  export default {
    components: {
      ProjectPreview
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
  flex-wrap: wrap;
}
</style>
