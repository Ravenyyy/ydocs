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
        { path: '*', component: '../pages/404/404' },
      ],
    },
  ],
  antd: {},
  title: 'myreact',
  fastRefresh: {},
  cssLoader: {
    localsConvention: 'camelCase',
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
});
