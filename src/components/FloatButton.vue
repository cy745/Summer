<template>
  <button id="float_button" @click="linkOption !== null? $router.push(linkOption): onClick">{{ text }}</button>
</template>

<script>
export default {
  name: "FloatButton",
  props: {
    text: {
      type: String,
      default: "button"
    },
    onClick: {
      type: Function,
      default: null
    },
    linkOption: {
      default: null
    }
  },
}
</script>

<style scoped>
#float_button {
  width: fit-content;
  height: 40px;
  padding: 0 20px;

  float: right;

  color: white;
  font-weight: 900;
  letter-spacing: 1px;
  background-color: #444444;
  border-radius: 20px;

  outline: none;
  border: none;
  transition: all .1s ease-in-out;
  cursor: pointer;
}

#float_button:hover {
  transform: scale(1.05) translateY(-5px);
}

#float_button:active {
  transform: scale(0.9) translateY(-2px);
  filter: brightness(0.6);
}

.dark #float_button {
  background-color: #eeeeee;
  color: black;
}
</style>