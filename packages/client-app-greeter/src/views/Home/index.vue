<template lang="pug">
  div.home
    img(
      alt="Vue logo"
      src="../../assets/logo.png"
    )
    HelloWorld(
      v-show="message"
      :msg="message"
    )
</template>

<script src="./main.js"></script>
