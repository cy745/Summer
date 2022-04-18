<template>
  <div id="scroll-pictures" ref="scrollPictures">
    <ScrollPictureItem :on-click="onClick" image-src="./SUMMER_TIME_76134052.png"/>
    <ScrollPictureItem :on-click="onClick" image-src="./20210630121954Aicy.png"/>
    <ScrollPictureItem :on-click="onClick" image-src="./20210630122105Aicy.png"/>
    <ScrollPictureItem :on-click="onClick" image-src="./20210630122127Aicy.png"/>
    <ScrollPictureItem :on-click="onClick" image-src="./20210630122434Aicy.png"/>
    <ScrollPictureItem :on-click="onClick" image-src="./20210630122504Aicy.png"/>
  </div>
</template>

<script>
import ScrollPictureItem from "@/components/item/ScrollPictureItem";

export default {
  name: "ScrollPictures",
  components: {ScrollPictureItem},
  props: {
    onClick: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      scrollOffset: 0,
      downX: 0
    }
  },
  created() {
    setTimeout(() => {
      this.$refs.scrollPictures.addEventListener("mouseenter", (ev) => {
        ev.target.addEventListener("mousemove", this.movingScroller)
      })
      this.$refs.scrollPictures.addEventListener("mouseleave", (ev) => {
        ev.target.removeEventListener("mousemove", this.movingScroller)
      })
      this.$refs.scrollPictures.addEventListener("touchstart", (ev) => {
        this.downX = ev.touches[0].clientX
        ev.target.addEventListener("touchmove", this.touchMoveScroller)
      })
      this.$refs.scrollPictures.addEventListener("touchend", (ev) => {
        ev.target.addEventListener("touchmove", this.touchMoveScroller)
      })
      this.$refs.scrollPictures.addEventListener("scroll", ev => ev.preventDefault())
      this.scrollRecycle()
    })
  },
  methods: {
    touchMoveScroller(ev) {
      let clientWidth = this.$refs.scrollPictures.clientWidth
      let scrollWidth = this.$refs.scrollPictures.scrollWidth

      let movement = this.downX - ev.touches[0].clientX
      this.scrollOffset = this.clamp(0, scrollWidth - clientWidth, this.scrollOffset + movement * 2)
      this.downX = ev.touches[0].clientX
      ev.preventDefault()
    },
    movingScroller(ev) {
      let clientWidth = this.$refs.scrollPictures?.clientWidth
      let scrollWidth = this.$refs.scrollPictures?.scrollWidth
      let x = ev.clientX - ev.currentTarget.offsetLeft
      let percent = ((x / clientWidth - 0.5) / 0.6 + 0.5)

      this.scrollOffset = (scrollWidth - clientWidth) * percent
    },
    scrollRecycle() {
      let nowScroll = this.$refs.scrollPictures?.scrollLeft
      let offset = nowScroll + (this.scrollOffset - nowScroll) * 0.1
      this.$refs?.scrollPictures?.scrollTo({left: offset})
      window.requestAnimationFrame(this.scrollRecycle)
    },
    clamp(min, max, value) {
      return Math.max(min, Math.min(max, value))
    }
  }
}
</script>

<style scoped>
#scroll-pictures {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-shrink: 0;
  overflow-x: scroll;

  box-sizing: border-box;

  border-left: solid 20px rgba(255, 255, 255, 0.7);
  border-right: solid 20px rgba(255, 255, 255, 0.7);
}

.phone #scroll-pictures {
  position: absolute;
  top: calc(100vh - 120px);
}

#scroll-pictures::-webkit-scrollbar { /*滚动条整体样式*/
  height: 5px;
  background: none;
  width: 80%;
}

#scroll-pictures::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
  width: 80%;
  border-radius: 10px;
  background: #e8e8e8;
}

.dark #scroll-pictures::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
  background: #797979;
}
</style>