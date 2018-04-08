<template>
  <div class="loading-container">
    <div class="loading">
      <Icon type="wifi" size="800"></Icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  .loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: loading 1s alternate infinite;
  }
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
