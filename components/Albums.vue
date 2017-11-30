<template>
  <div class="album-covers">
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
    <album-cover thumb="thumb1_square" title="Marching Knights Poster" icon="A" />
  </div>
</template>

<script>
  import AlbumCover from '~/components/AlbumCover.vue'

  export default {
    components: {
      AlbumCover
    }
  }
</script>

<style lang="scss" scoped>
$white: #EFEFEF;
$black: #35495e;
$album-spacing: 5px;

.album-covers {
  background-color: $white;
  padding: $album-spacing;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
