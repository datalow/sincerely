<template lang="pug">
  div
    aside
      el-button(@click="viewAllMessages")
        | Refresh
    el-divider
    message-list(:messages="messages")
    el-divider
    message-form(@MessageForm="postMessage")
</template>

<script src="./main.js"></script>
