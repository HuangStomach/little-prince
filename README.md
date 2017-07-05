# gini-vue-template

供gini使用的vue 2.0模板

> Note: 修改自 [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)

## Features

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
- Single-file Vue Components
  - Hot-reload in development
  - CSS extraction for production
- Real-time List Updates with FLIP Animation

## 安装使用

**Requires Node.js 6+**

``` base
# install gini-vue
npm install -g gini-vue

# install template
gini init <template-name>

# mv to targer dir
cd <template-name>

# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```
