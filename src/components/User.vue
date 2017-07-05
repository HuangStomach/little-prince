<template lang="pug">
img(v-bind:src="url.replace('32', '64')", v-bind:alt="name")
</template>

<script>
export default {
  name: 'user',
  props: ['url', 'name']
}
</script>

<style lang="stylus" scoped>
img
  width 64px
  height 64px
  border-radius 5px
  margin 5px
</style>
