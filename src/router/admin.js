const Admin = r => require.ensure([], () => r(require('views/Admin.vue')), 'admin')
const Link = r => require.ensure([], () => r(require('components/Admin/Link.vue')), 'link')
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
      name: 'admin.article',
      path: 'article',
      component: People
    },
    {
      name: 'admin.file',
      path: 'file',
      component: People
    },
    {
      name: 'admin.link',
      path: 'link',
      component: Link
    }
  ]
}
