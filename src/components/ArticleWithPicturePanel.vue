<template>
  <div class="article-with-picture-panel">
    <div v-if="isObjectEmpty($slots)" class="article">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
    <div v-else class="article">
      <slot></slot>
    </div>
    <div :style="{'background-image':getImageUrl}" class="article-with-picture"/>
  </div>
</template>

<script>
export default {
  name: "ArticleWithPicturePanel",
  props: {
    title: {
      type: String,
      default: "EMPTY TITLE!"
    },
    content: {
      type: String,
      default: "EMPTY!"
    },
    imageSrc: {
      type: String,
      default: "./五等分の花嫁_75034219.png"
    },
  },
  computed: {
    getImageUrl() {
      return "url(" + this.imageSrc + ")"
    }
  },
  methods: {
    isObjectEmpty(obj) {
      for (const key in obj) {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
.article-with-picture-panel {
  box-sizing: border-box;
  margin: 30px 60px;
  height: fit-content;

  background-color: #eee;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 0;
}

.dark .article-with-picture-panel {
  background-color: #5e5e5e;
}

.article {
  box-sizing: border-box;

  width: 100%;
  padding: 20px 30px;

  letter-spacing: 1px;
  line-height: 24px;
  font-weight: 900;
}

.dark .article {
  color: #ececec;
}

.article h1, .article h2, .article h3, .article h4, .article h5 {
  width: fit-content;
  margin: 10px 0;
  padding-bottom: 1vh;
  border-bottom: solid 4px #5b1b8e;
}


.article p {
  font-weight: 900;
  color: #555555;
}

.dark .article p {
  font-weight: 500;
  color: #cecece;
}

.article-with-picture {
  width: 50%;
  height: 100%;
  min-height: 30vh;

  flex-shrink: 0;
  border-radius: inherit;

  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}

.phone .article-with-picture-panel,
.pad .article-with-picture-panel {
  flex-direction: column-reverse;
}

.pad .article-with-picture-panel {
  margin-right: 20px;
}

.phone .article-with-picture-panel {
  margin: 40px 0;
  border-radius: 0;
}

.phone .article-with-picture,
.pad .article-with-picture {
  width: 100%;
  height: 30vh;
}
</style>