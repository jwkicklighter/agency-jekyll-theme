<template>
  <div class="default-body">
    <portfolio-nav />
    <nuxt class="default-content" />
    <portfolio-footer />
  </div>
</template>

<script>
import PortfolioFooter from '~/components/PortfolioFooter.vue'
import PortfolioNav from '~/components/PortfolioNav.vue'

export default {
  components: {
    PortfolioFooter,
    PortfolioNav
  }
}
</script>


<style>
.default-body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.default-content {
  flex-grow: 1;
  margin-top: 50px;
}
</style>
