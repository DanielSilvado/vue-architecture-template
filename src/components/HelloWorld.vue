<template>
  <span>{{msg}}</span>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
span {
  font-size: 38px;
}
</style>
