<template>
  <div id="app" :class="device_type">
    <transition mode="out-in" name="slide-fade-left">
      <router-view name="left"/>
    </transition>
    <MainSlogan slogan="SUMMER TIME!"/>
    <transition appear mode="out-in" name="slide-fade">
      <router-view name="right"/>
    </transition>
  </div>
</template>

<script>
import MainSlogan from "@/components/MainSlogan";

export default {
  name: 'App',
  components: {MainSlogan},
  data() {
    return {
      client_width: 0,
      cut_point: [700, 1357],
    }
  },
  computed: {
    device_type() {
      if (this.client_width <= this.cut_point[0]) {
        return "phone"
      }
      if (this.client_width > this.cut_point[0] && this.client_width <= this.cut_point[1]) {
        return "pad"
      }
      return "pc"
    },
  },
  created() {
    this.getClientWidth()
    window.addEventListener("resize", this.getClientWidth)
  },
  methods: {
    getClientWidth() {
      setTimeout(() => {
        this.client_width = window.innerWidth
      })
    },
  }
}
</script>

<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .3s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */
{
  opacity: 0;
}

.slide-fade-left-enter-active,
.slide-fade-left-leave-active {
  transition: all .3s ease-in-out;
}

.slide-fade-left-enter, .slide-fade-left-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */
{
  transform: translateX(-200px);
  opacity: 0;
}

body {
  margin: 0;
}

#app {
  position: relative;

  display: flex;
  flex-direction: row;
  overflow: hidden;
}

#app.phone {
  flex-direction: column;
}
</style>
