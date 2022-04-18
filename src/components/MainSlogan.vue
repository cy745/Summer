<template>
  <div id="main_slogan" ref="main_slogan"
       :style="{'--font-length': font_length,'--offset-top': offset_top}">
    <h1>{{ slogan }}</h1>
  </div>
</template>

<script>
export default {
  name: "MainSlogan",
  props: {
    slogan: {
      type: String,
      default: "SUMMER TIME!"
    }
  },
  data() {
    return {
      offset_top: 0,
    }
  },
  computed: {
    font_length() {
      this.getNewOffsetTop()
      return Math.max(this?.slogan?.length + 2, 14)
    }
  },
  created() {
    this.getNewOffsetTop()
    window.addEventListener("resize", this.getNewOffsetTop)
  },
  methods: {
    getNewOffsetTop() {
      setTimeout(() => {
        this.offset_top = -this.$refs.main_slogan.clientHeight
      })
    }
  }
}
</script>

<style scoped>
#main_slogan {
  --font-length: 10;
  --offset-top: 0;

  top: calc(var(--offset-top) * 1px / 2);
  left: 50%;
  width: 100%;
  padding-left: 10px;
  max-width: 100vh;
  position: absolute;
  z-index: 50;
  box-sizing: border-box;

  color: black;
  opacity: 0.52;
  text-align: left;
  font-size: calc(100vh / var(--font-length));
  font-family: Impact, sans-serif;

  transform: rotateZ(90deg);
  transform-origin: left center;

  user-select: none;
  -webkit-user-select: none;
}

.dark #main_slogan {
  color: white;
}

#main_slogan h1 {
  width: 100%;
  height: 100%;
  margin: 0;
  white-space: nowrap;
}

.phone #main_slogan {
  left: 0;
  top: 120px;
  position: relative;
  text-align: center;
  font-size: calc(100vw / var(--font-length));
  transform: rotateZ(0deg);
  padding-left: 0;
}
</style>