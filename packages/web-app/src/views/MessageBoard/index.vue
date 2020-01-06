<template lang="pug">
  div.home
    div
      message-list(:messages="messages")
      el-divider
      message-form(@MessageForm="postMessage")
</template>

<script src="./main.js"></script>
