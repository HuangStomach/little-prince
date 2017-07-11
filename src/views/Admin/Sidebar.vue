<template lang="pug">
el-menu(theme='dark' :default-active='active')
  el-menu-item(v-for='(item, key) of menu' :key='key' :index='"admin." + key')
    router-link(tag="li" :to='{ name: `admin.${key}` }')
      i(:class='item.icon')/ {{ item.name }}
</template>

<script>
import { Menu, MenuItem } from 'element-ui'
import config from 'lib/config'

export default {
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  computed: {
    active () { return this.$store.state.route.name }
  },
  data () {
    return {
      menu: {}
    }
  },
  beforeMount () {
    this.menu = config.get(this.$store.state.lab, 'menu')
  }
}
</script>
