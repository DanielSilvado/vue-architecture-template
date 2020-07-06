<template>
  <span>{{ msg }}</span>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
span {
  font-size: 38px;
}
</style>
