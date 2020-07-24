<template>
  <div id="hello">
    <div class="wrapper">
      <div class="typing">Welcome to the Vue.js Template 😉</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hello"
};
</script>

<style lang="scss">
#hello {

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .typing {
    width: 30ch;
    animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-size: 1.6em;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
}
</style>
