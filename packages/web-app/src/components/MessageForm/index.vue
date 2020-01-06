<template lang="pug">
  el-form(@submit="onSubmit")
    el-form-item
      el-input(
        type="tel"
        v-model="form.receiverNumber"
      )
    el-form-item
      el-input(
        type="textarea"
        v-model="form.content"
      )
    el-form-item
      el-button(
        type="primary"
        @click="onSubmit"
      )
        | Post
</template>

<script src="./main.js"></script>
