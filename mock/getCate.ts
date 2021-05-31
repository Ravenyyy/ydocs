export default {
  'GET /api/getCate': (req: any, res: any) => {
    const { query } = req;
    if (!query?.repo) {
      res.send({
        code: '400',
        msg: 'Bad Request',
        data: {},
      });
      return;
    } else {
      switch (query.repo) {
        case 'repo1':
          res.send({
            code: '200',
            msg: 'success!',
            data: {
              data: [
                {
                  path: '/0',
                  title: '文档1',
                  decription: '这是文档1',
                  icon: '1',
                },
                {
                  path: '/@1',
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
              front: '0',
            },
          });
          break;
        case 'repo2':
          res.send({
            code: '200',
            msg: 'success!',
            data: {
              data: [
                {
                  path: '/3',
                  title: '文档3',
                  decription: '这是文档3',
                  icon: '1',
                },
                {
                  path: '/@4',
                  title: '文档4',
                  decription: '这是文档4',
                  icon: '2',
                  children: [
                    {
                      path: '/4',
                      title: '文档4.1',
                      decription: '这是文档4.1',
                      icon: '21',
                    },
                    {
                      path: '/5',
                      title: '文档4.2',
                      decription: '这是文档4.2',
                      icon: '22',
                    },
                  ],
                },
              ],
              title: '仓库2',
              front: '3',
            },
          });
          break;
        default:
          res.send({
            code: '404',
            msg: 'Not Found',
            data: {},
          });
      }
    }
  },
};
