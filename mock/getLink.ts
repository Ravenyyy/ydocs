export default {
  'GET /api/getLink': {
    code: '200',
    msg: 'success!',
    data: {
      data: [
        { path: 'http://www.baidu.com', title: 'baidu' },
        { path: 'http://www.google.com', title: 'google' },
      ],
    },
  },
};
