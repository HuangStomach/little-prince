const Admin = r => require.ensure([], () => r(require('views/Admin.vue')), 'admin')
const People = r => require.ensure([], () => r(require('components/Admin/People.vue')), 'people')

export default {
  path: '/admin',
  component: Admin,
  children: [
    {
      name: 'admin',
      path: '/',
      redirect: { name: 'admin.people' }
    },
    {
      name: 'admin.people',
      path: 'people',
      component: People
    },
    {
      name: 'admin.link',
      path: 'link',
      component: People
    }
  ]
}
