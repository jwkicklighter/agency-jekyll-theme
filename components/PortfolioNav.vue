<template>
  <nav class="nav" :class="{ 'nav-transparent': transparent }">
    <nuxt-link to="/" class="nav-brand">J.W. Kicklighter</nuxt-link>
    <div class="flex-expander"></div>
    <nuxt-link to="/">Projects</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <!-- <nuxt-link to="/">Contact</nuxt-link> -->
  </nav>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    validations () {
    },
    props: {
      transparent: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
$white: #EFEFEF;
$black: #35495e;
$nav-height: 50px;

.nav {
  justify-content: flex-end;
  background-color: $black;
  display: flex;
  height: $nav-height;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: .2s ease-in-out background-color;

  a {
    color: $white;
    line-height: $nav-height;
    padding: 0 15px;
    text-decoration: none;
    transition: .2s ease-in-out background-color;

    &:hover {
      background-color: rgba($white, 0.1);
    }
  }

  &-transparent {
    background-color: transparent;
    position: absolute;
  }
}

.flex-expander {
  flex-grow: 1;
}

.nav-brand {
  align-self: flex-start;
}
</style>
