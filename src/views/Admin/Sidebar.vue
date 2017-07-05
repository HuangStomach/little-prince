<template lang="pug">
el-menu(theme="dark")
  el-menu-item(index="2") 导航二
  el-menu-item(index="3") 导航三
</template>

<script>
import { Menu, MenuItem } from 'element-ui'

export default {
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  }
}
</script>
