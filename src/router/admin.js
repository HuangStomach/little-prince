const Admin = r => require.ensure([], () => r(require('views/Admin.vue')), 'admin')

export default {
  path: '/admin',
  component: Admin
}
