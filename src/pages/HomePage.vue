<template>
  <div id="home">
    <MainPicture :image-position-y="rightContainerScrollPercent + '%'" :image-src="mainImageUrl">
      <FloatButton link-option="details" text="DETAILS"/>
    </MainPicture>

    <MainSlogan slogan="SUMMER TIME!"/>
    <div id="right-container" ref="rightContainer">
      <ScrollPictures :on-click="childClick"/>
      <ArticleWithPicturePanel>
        <h2>五等分的花嫁</h2>
        <p>
          简介：一直过着贫困生活的高中二年级学生·上杉风太郎，找到了一份条件非常好的家庭教师兼职。
          然而，要教导的学生居然是同级生！而且还是五胞胎！！虽然都是美少女，但同时也是“将要留级”、
          “讨厌学习”的问题学生们！最开始的任务就是要取得这些女孩们的信任……！？每天都热闹喧嚣！
          中野家的五姐妹所带来的可爱度500%的五个不一样的恋爱喜剧，就此开幕！！
        </p>
      </ArticleWithPicturePanel>
    </div>
  </div>
</template>

<script>
import MainPicture from "@/components/MainPicture";
import MainSlogan from "@/components/MainSlogan";
import ScrollPictures from "@/components/ScrollPictures";
import ArticleWithPicturePanel from "@/components/ArticleWithPicturePanel";
import FloatButton from "@/components/FloatButton";

export default {
  name: 'HomePage',
  components: {ArticleWithPicturePanel, ScrollPictures, MainSlogan, MainPicture, FloatButton},
  data() {
    return {
      client_width: 0,
      cut_point: [700, 1357],
      rightContainerScrollPercent: 0,
      mainImageUrl: "./SUMMER_TIME_76134052.png",
    }
  },
  created() {
    this.getClientWidth()
    window.addEventListener("resize", this.getClientWidth)
    setTimeout(() => {
      this.$refs.rightContainer.addEventListener("scroll", (ev) => {
        this.rightContainerScrollPercent = ev.target.scrollTop / (ev.target.scrollHeight - ev.target.clientHeight) * 100
      })
    })
  },
  methods: {
    getClientWidth() {
      setTimeout(() => {
        this.client_width = window.innerWidth
      })
    },
    childClick(ev) {
      console.log(ev)
      this.mainImageUrl = ev
    },
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

#home {
  position: absolute;

  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.phone #home {
  flex-direction: column;
}

.dark #home {
  background-color: #444444;
}

#right-container {
  height: 100vh;
  padding-top: 10px;
  box-sizing: border-box;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
}

.phone #right-container {
  z-index: 100;
  padding-top: 7vh;
  height: fit-content;
  overflow-y: visible;
}

#right-container::-webkit-scrollbar { /*滚动条整体样式*/
  width: 15px;
  background: none;
}

#right-container::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
  border-radius: 10px;
  background: #898989;
  margin-right: 2px;
}
</style>