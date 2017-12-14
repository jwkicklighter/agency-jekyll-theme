<template>
  <div>
    <portfolio-nav :transparent="transparentNavbar" />
    <section class="cover">
      <div>
        <h1 class="title">
          J.W. Kicklighter
        </h1>
        <h2 class="subtitle">
          <svg><line x1="0" x2 ="60" y1="0" y2="0" /></svg>
          <span class="text">Photography</span>
          <svg><line x1="0" x2 ="60" y1="0" y2="0" /></svg>
        </h2>
      </div>
    </section>
    <div class="below-cover">
      <projects :projects="posts" />
      <portfolio-footer />
    </div>
  </div>
</template>

<script>
import Projects from '~/components/Projects.vue'
import PortfolioFooter from '~/components/PortfolioFooter.vue'
import PortfolioNav from '~/components/PortfolioNav.vue'

export default {
  async asyncData ({ app, route }) {
    return {
      posts: await app.$content('/').getAll()
    }
  },
  data () {
    return {
      transparentNavbar: true
    }
  },
  components: {
    Projects,
    PortfolioFooter,
    PortfolioNav
  },
  methods: {
    initInView: function () {
      const wrapper = document.querySelector('.cover')

      // eslint-disable-next-line no-undef, no-new
      new Waypoint.Inview({
        element: wrapper,
        enter: direction => {
          console.log('enter')
          this.transparentNavbar = true
        },
        exited: () => {
          console.log('exited')
          this.transparentNavbar = false
        }
      })
    }
  },
  layout: 'index',
  mounted () {
    this.initInView()
  }
}
</script>

<style lang="scss">
$white: #EFEFEF;
$black: #35495e;

.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('~assets/cover.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%) brightness(80%);
  height: (100vw/2.44); // Background Image ratio
  max-height: 100vh;
}

.title,
.subtitle {
  color: $white;
  text-shadow: 0 0 10px #000;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    margin-left: 15px;
    margin-right: 15px;
  }

  svg {
    stroke: currentColor;
    stroke-width: 3;
    height: 3px;
    width: 60px;
  }
}
</style>
