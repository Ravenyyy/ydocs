export default {
  data: [
    {
      path: '/0',
      title: '文档1',
      decription: '这是文档1',
      icon: '1',
    },
    {
      path: '/1',
      title: '文档2',
      decription: '这是文档2',
      icon: '2',
      children: [
        {
          path: '/1',
          title: '文档2.1',
          decription: '这是文档2.1',
          icon: '21',
        },
        {
          path: '/2',
          title: '文档2.2',
          decription: '这是文档2.2',
          icon: '22',
        },
      ],
    },
  ],
  title: '仓库1',
};
