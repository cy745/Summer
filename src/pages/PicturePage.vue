<template>
  <div id="main_picture">
    <MainPicture :image-position-y="rightContainerScrollPercent + '%'" :image-src="mainImageUrl">
      <FloatButton link-option="details" text="DETAILS"/>
    </MainPicture>
  </div>
</template>

<script>
import MainPicture from "@/components/MainPicture";
import FloatButton from "@/components/FloatButton";

export default {
  name: "PicturePage",
  components: {FloatButton, MainPicture},
  data() {
    return {
      mainImageUrl: "./SUMMER_TIME_76134052.png",
      rightContainerScrollPercent: 0
    }
  }
}
</script>

<style scoped>
#main_picture {
  width: 50vw;
}

.phone #main_picture {
  width: 100%;
}
</style>