const Home = r => require.ensure([], () => r(require('views/Home.vue')), 'home')

export default {
  path: '/home',
  component: Home
}
