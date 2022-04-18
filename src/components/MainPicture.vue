<template>
  <div id="main_picture" :style="{'--image-position-y':imagePositionY,'background-image':getImageUrl}">
    <div id="main_picture_info">
      <h2>{{ imageInfo.title }}</h2>
      <p>{{ imageInfo.url }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainPicture",
  props: {
    imageSrc: {
      type: String,
      default: "./SUMMER_TIME_76134052.png"
    },
    imageInfo: {
      type: Object,
      default() {
        return {
          title: "SUMMER TIME!",
          url: "./SUMMER_TIME_76134052.png",
        }
      }
    },
    imagePositionY: {
      type: String,
      default: "0%"
    }
  },
  computed: {
    getImageUrl() {
      return "url(" + this.imageSrc + ")"
    }
  },
}
</script>

<style scoped>
#main_picture {
  --image-position-y: 0%;

  width: inherit;
  height: 100vh;
  background-size: cover;
  background-position: center var(--image-position-y);
  background-repeat: no-repeat;
  position: relative;
  flex-shrink: 0;

  transition: background-image .2s ease-in-out;
}

#main_picture_info {
  position: absolute;
  z-index: 100;
  bottom: 10vh;
  margin: 0 40px;
  padding: 20px 30px;

  max-width: 30vw;
  width: fit-content;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.7);

  color: rgba(0, 0, 0, 0.6);
  word-break: break-all;
  text-wrap: normal;
}

#main_picture_info h1, #main_picture_info h2, #main_picture_info h3, #main_picture_info h4, #main_picture_info h5 {
  width: fit-content;
  margin: 10px 0;
  padding-bottom: 0.5vh;
  font-family: Impact, serif;
  font-size: 2em;
  letter-spacing: 1px;
  border-bottom: solid 4px #1b3c8e;
}

#main_picture_info p {
  font-weight: 300;
}

.dark #main_picture_info {
  background-color: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.9);
}

.phone #main_picture_info {
  bottom: 20vh;
  max-width: 100%;
}
</style>