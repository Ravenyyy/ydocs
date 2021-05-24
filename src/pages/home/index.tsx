import React, { useState, useEffect } from 'react';
import styles from './index.css';
import { Layout, Row, Col } from 'antd';
import { SnippetsTwoTone } from '@ant-design/icons';
import { getRepo } from '@/services/getRepoService';
import { Link } from 'umi';

const { Footer, Content } = Layout;

function BasicLayout(props: any) {
  const [repo, setRepo] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getRepo();
      setRepo(reposData);
    };
    getData();
  }, []);

  const repoList: any = repo?.data;

  const createRepo = (repoList: any) => {
    if (!repoList) return;
    return repoList.map((repo: any) => {
      return (
        <Col span={12} key={repo.path}>
          <Row>
            <Col span={2}>
              <SnippetsTwoTone className={styles['s-icon']} />
            </Col>
            <Col span={4}>
              <Row>
                <Link to={repo.path}>{repo.title}</Link>
              </Row>
              <Row>{repo.description}</Row>
            </Col>
          </Row>
        </Col>
      );
    });
  };

  return (
    <>
      <Layout>
        <Content className={styles['g-content']}>
          <div className={styles['g-detail']}>
            <h1>首页</h1>
            <p>这是一个demo</p>
            <h2>文档仓库</h2>
            <Row className={styles['s-repo']}>{createRepo(repoList)}</Row>
          </div>
        </Content>
        <Footer className={styles['g-footer']}>
          test demo ©2021 Created by Raven
        </Footer>
      </Layout>
    </>
  );
}

export default BasicLayout;
