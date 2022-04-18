<template>
  <div class="container">
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
</template>

<script>
import ScrollPictures from "@/components/ScrollPictures";
import ArticleWithPicturePanel from "@/components/ArticleWithPicturePanel";

export default {
  name: "DetailsPage",
  components: {ArticleWithPicturePanel, ScrollPictures},
  methods: {
    childClick(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  padding-top: 10px;
  box-sizing: border-box;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
}

.phone .container {
  z-index: 100;
  padding-top: 7vh;
  height: fit-content;
  overflow-y: visible;
}

.container::-webkit-scrollbar { /*滚动条整体样式*/
  width: 15px;
  background: none;
}

.container::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
  border-radius: 10px;
  background: #898989;
  margin-right: 2px;
}
</style>