<template lang="pug">
div
  .navbar
    navbar
  .sidebar
    sidebar
  .content
    router-view
</template>

<script>
import Navbar from './Admin/Navbar.vue'
import Sidebar from './Admin/Sidebar.vue'

export default {
  components: { Navbar, Sidebar }
}
</script>

<style lang="stylus">
@import '../../public/style/admin.styl'

.navbar
  box-shadow #aaa 2px 2px 5px
.sidebar
  width 200px
  position fixed
  top 60px
  bottom 0
  left 0
  margin-top 0
  margin-bottom 0
  background-color #fff
  overflow-y auto
  box-shadow #aaa 2px 4px 5px
.content
  position fixed
  top 60px
  bottom 0
  left 200px
  right 0
  overflow-y scroll
  padding 15px
</style>
