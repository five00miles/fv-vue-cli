<template>
  <div id="app">
    <div id="nav" style="font-size: 20px; color: red">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~@/common/styles/variables.scss';

/* 超小屏幕（手机，小于 768px） */
#app {
  width: 300px;
  height: 200px;
  font-size: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e52;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 小屏幕（平板，大于等于 768px） */
@media (min-width: $screen-md-min) {
  #app {
    color: #2c3e10;
  }
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: $screen-lg-min) {
  #app {
    color: #2c3e50;
  }
}

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: $screen-xl-min) {
  #app {
    color: #2c3e50;
  }
}

/* 大屏幕（大桌面显示器，大于等于 1400px） */
@media (min-width: $screen-xxl-min) {
  #app {
    color: #2c3e50;
  }
}
</style>
