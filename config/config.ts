import { defineConfig } from 'umi';

// ref: https://umijs.org/config/
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: './', component: '../pages/home/index' },
        {
          path: './:repo',
          component: '../pages/page/index',
        },
        { path: './:repo/:id', component: '../pages/page/index' },
      ],
    },
  ],
  antd: {},
  title: 'myreact',
  fastRefresh: {},
  cssLoader: {
    localsConvention: 'camelCase',
  },
});
