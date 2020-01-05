<template lang="pug">
  div.home
    HelloWorld(
      v-show="message"
      :msg="message"
    )
</template>

<script src="./main.js"></script>
