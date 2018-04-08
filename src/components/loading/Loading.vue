<template>
  <div class="loading-container">
    <div class="loading">
      <div class="inner-loading">
        
      </div>
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
    width: 20vw;
    height: 20vw;
    top: 30%;
    left: 40%;
    border: 6px dotted orange;
    border-radius: 50%;
    animation: loading 3s infinite;
    .inner-loading{
      position: absolute;
      width: 10vw;
      height: 10vw;
      top: 40%;
      left: 100%;
      border: 6px dotted orange;
      border-radius: 50%;
      animation: loading 3s 1.5s infinite;
    }
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg)
  }
}
</style>
