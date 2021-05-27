export default {
  'GET /api/getRepo': {
    code: '200',
    msg: 'success!',
    data: {
      data: [
        {
          path: '/repo1',
          title: '仓库1',
          description: '这是仓库1',
          icon: '1',
          front: '/0',
        },
        {
          path: '/repo2',
          title: '仓库2',
          description: '这是仓库2',
          icon: '2',
          front: '/3',
        },
      ],
    },
  },
};
