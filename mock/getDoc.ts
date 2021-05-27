export default {
  'GET /api/getDoc': (req: any, res: any) => {
    const { query } = req;

    if (!query?.id) {
      res.send({
        code: '400',
        msg: 'Bad Request',
        data: {},
      });
      return;
    } else {
      switch (query.id) {
        case '0':
          res.send({
            code: '200',
            msg: 'success!',
            data: {
              data: [
                {
                  title: '标题',
                  level: 1,
                  description: '这是文档1的介绍内容',
                  children: [
                    {
                      title: '小标题1',
                      level: 2,
                      description: '这是正文111111111',
                      img: 'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/WQFY0FHHmm/yay.jpg',
                    },
                    {
                      title: '小标题2',
                      description: '这是正文22222222222',
                      video:
                        'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/%24Td7YC%264Gf/Jietu20210524-131721-HD.mp4',
                    },
                  ],
                },
              ],
              title: '文档1',
            },
          });
          break;
        case '1':
          res.send({
            code: '200',
            msg: 'success!',
            data: {
              data: [
                {
                  title: '标题',
                  level: 1,
                  description: '这是文档2.1的介绍内容',
                  children: [
                    {
                      title: '小标题1',
                      level: 2,
                      description: '这是正文111111111',
                    },
                    {
                      title: '小标题2',
                      level: 2,
                      description: '这是正文22222222222',
                    },
                  ],
                },
              ],
              title: '文档2.1',
            },
          });
          break;
        case '2':
          res.send({
            code: '200',
            msg: 'success!',
            data: {
              data: [
                {
                  title: '标题',
                  level: 1,
                  description: '这是文档2.2的介绍内容',
                  img: 'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/WQFY0FHHmm/yay.jpg',
                  children: [
                    {
                      title: '小标题1',
                      level: 2,
                      description: '这是正文111111111',
                      img: 'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/WQFY0FHHmm/yay.jpg',
                      video:
                        'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/%24Td7YC%264Gf/Jietu20210524-131721-HD.mp4',
                    },
                    {
                      title: '小标题2',
                      level: 2,
                      description:
                        '这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221s这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221s这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221s',
                    },
                  ],
                },
              ],
              title: '文档2.2',
            },
          });
          break;

        case '3':
          res.send({
            code: '200',
            msg: 'success!',
            data: {
              data: [
                {
                  title: '标题',
                  level: 1,
                  description: '这是文档3的介绍内容',
                  children: [
                    {
                      title: '小标题1',
                      level: 2,
                      description: '这是正文111111111',
                    },
                    {
                      title: '小标题2',
                      level: 2,
                      description: '这是正文22222222222',
                    },
                  ],
                },
              ],
              title: '文档3',
            },
          });
          break;
        case '4':
          res.send({
            code: '200',
            msg: 'success!',
            data: {
              data: [
                {
                  title: '标题',
                  level: 1,
                  description: '这是文档4.1的介绍内容',
                  children: [
                    {
                      title: '小标题1',
                      level: 2,
                      description: '这是正文111111111',
                      img: 'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/WQFY0FHHmm/yay.jpg',
                    },
                    {
                      title: '小标题2',
                      description: '这是正文22222222222',
                      video:
                        'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/%24Td7YC%264Gf/Jietu20210524-131721-HD.mp4',
                    },
                  ],
                },
              ],
              title: '文档4.1',
            },
          });
          break;
        case '5':
          res.send({
            code: '200',
            msg: 'success!',
            data: {
              data: [
                {
                  title: '标题',
                  level: 1,
                  description: '这是文档4.2的介绍内容',
                  img: 'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/WQFY0FHHmm/yay.jpg',
                  children: [
                    {
                      title: '小标题1',
                      level: 2,
                      description: '这是正文111111111',
                      img: 'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/WQFY0FHHmm/yay.jpg',
                      video:
                        'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/%24Td7YC%264Gf/Jietu20210524-131721-HD.mp4',
                    },
                    {
                      title: '小标题2',
                      level: 2,
                      description:
                        '这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221s这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221s这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221这是正文222222222221s',
                    },
                  ],
                },
              ],
              title: '文档4.2',
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
