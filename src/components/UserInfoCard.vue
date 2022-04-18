<template>
  <div class="user_info_card">
    <div :style="{'background-image':getImageUrl}" class="user_avatar"/>
    <div class="user_details">
      <h4 class="user_name">{{ userName }}</h4>
      <p class="user_intro">{{ userIntro }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfoCard",
  props: {
    imageSrc: {
      type: String,
      default: "./SUMMER_TIME_76134052.png"
    },
    userName: {
      type: String,
      default: "Someone."
    },
    userIntro: {
      type: String,
      default: "Say Something."
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
.user_info_card {
  display: flex;
}

.user_avatar {

}

.user_details {

}

.user_name {

}

.user_intro {

}
</style>