<template>
  <div :style="{'backgroundImage':getImageUrl}" class="scroll-picture-item" v-on:click="onClick(imageSrc)"/>
</template>

<script>
export default {
  name: "ScrollPictureItem",
  props: {
    imageSrc: {
      type: String,
      default: "./20210630122105Aicy.png"
    },
    onClick: {
      type: Function,
      default: null
    }
  },
  computed: {
    getImageUrl() {
      return "url(" + this.imageSrc + ")"
    }
  }
}
</script>

<style scoped>
.scroll-picture-item {
  --item-width: 130px;

  width: var(--item-width);
  height: calc(var(--item-width) * 2);
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(100, 100, 100, 0.5);

  background-size: cover;
  background-position: center 5%;
  background-repeat: no-repeat;

  flex-shrink: 0;
  margin-left: 30px;

  cursor: pointer;

  transition: all .2s ease-in-out;
}

.scroll-picture-item:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 2px 4px rgba(100, 100, 100, 0.5);
}

.phone .scroll-picture-item {
  --item-width: 100px;
}

.pad .scroll-picture-item {
  --item-width: 110px;
}

.scroll-picture-item:nth-child(1) {
  margin-left: 60px;
}

.scroll-picture-item:nth-last-child(1) {
  margin-right: 60px;
}
</style>