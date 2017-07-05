<template lang="pug">
el-menu(theme="dark" mode="horizontal")
  span.logo {{ title }}
</template>

<script>
import { Menu, MenuItem } from 'element-ui'

export default {
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  data () {
    return {
      title: ''
    }
  },
  beforeMount () {
    this.title = this.$store.state.title
  }
}
</script>

<style lang="stylus">
.logo
  float left
  height 60px
  line-height 60px
  padding-left 20px
  text-align left
  color #16B398
</style>
