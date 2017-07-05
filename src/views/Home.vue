<template lang="pug">
div
  h1 Gini-Vue-Template
  div.container
    user(v-for="user in users", v-bind:url="user.links.avatar.href", v-bind:name="user.display_name" v-bind:key="user.id")
</template>

<script>
import User from 'components/User.vue'

export default {
  name: 'home-view',
  components: { User },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    users () {
      return this.$store.state.user.users
    }
  },
  asyncData ({ store }) {
    return store.dispatch('fetchUser')
  }
}
</script>

<style lang="stylus" scoped>
.container
  text-align center
h1
  font-family fantasy
  margin 40px auto
  text-align center
  font-size 60px
  color #369d8b
</style>
