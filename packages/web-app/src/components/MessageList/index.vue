<template lang="pug">
  el-timeline
    template(v-for="message in messages")
      el-timeline-item(
        placement="top"
        timestamp="2020/01/04"
      )
        el-card
          div(slot="header")
            a(:href="referenceOf(message.receiverNumber)")
              | {{ message.receiverNumber }}
          p {{ message.content }}
</template>

<script src="./main.js"></script>
