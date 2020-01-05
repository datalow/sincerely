<template lang="pug">
  el-container#app

    el-header
      el-menu(mode="horizontal")
        el-menu-item(index="1")
          router-link(to="/")
            | Home
        el-menu-item(index="2")
          router-link(to="/about")
            | About

    el-main
      router-view
</template>

<style scoped lang="scss">
#app {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>
