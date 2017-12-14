<template>
  <footer>
    <div class="icons">
      <a href="https://www.twitter.com/jwkicklighter" target="_blank">
        <img src="~assets/twitter.svg" />
      </a>
      <a href="https://www.facebook.com/KicklighterPhoto" target="_blank">
        <img src="~assets/facebook.svg" />
      </a>
      <a href="https://www.instagram.com/jwkicklighter" target="_blank">
        <img src="~assets/instagram.svg" />
      </a>
      <a href="https://www.youtube.com/channel/UCNQUy9ryHAj7df8riFaw5pQ" target="_blank">
        <img src="~assets/youtube.svg" />
      </a>
    </div>
    <div class="copyright">
      Copyright &copy; 2017 Jordan Kicklighter
    </div>
  </footer>
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
    }
  }
</script>

<style lang="scss" scoped>
$white: #EFEFEF;
$black: #35495e;

footer {
  align-items: center;
  background-color: $black;
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

$footer-spacing: 30px;

.copyright {
  margin: #{$footer-spacing/2} 0 #{$footer-spacing};
}

.icons {
  margin: #{$footer-spacing} 0 #{$footer-spacing/2};

  img {
    height: 32px;
    margin: 0 2px;

    &:hover {
    }
  }
}
</style>
