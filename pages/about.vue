<template>
  <div class="about-wrapper">
    <section class="about-content">
      <img src="~assets/jordan.jpg" alt="" class="about-image" />
      <h1 class="about-title">Jordan Kicklighter</h1>
      <p>Jordan is a 24-year-old Digital Media - Web Design major at the University of Central Florida, and CTO of Kommander Software. He has an extensive background in web development and a focus on UX design, as well as experience in graphic design, Android development, photography, and video production. When Jordan is not behind a computer, he spends weekends photographing the UCF Marching Knights.</p>
    </section>
  </div>
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

<style lang="scss">
.about-wrapper {
  display: flex;
  padding: 20px;
  justify-content: center;
}

.about-title {
  font-size: 2em;
  margin: 20px 0;
  text-align: center;

  @media (max-width: 540px) {
    margin: 10px 0;
  }
}

.about-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 950px;
}

.about-image {
  margin: 0 auto;
  width: 500px;

  @media (max-width: 540px) {
    width: 100%;
  }
}
</style>
