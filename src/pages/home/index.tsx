import React, { useState, useEffect } from 'react';
import styles from './index.css';
import { Layout, Row, Col } from 'antd';
import { SnippetsTwoTone } from '@ant-design/icons';
import { getRepo } from '@/services/getRepoService';
import { Link } from 'umi';

const { Footer, Content } = Layout;

interface RepoNode {
  path: string;
  title: string;
  description: string;
  icon?: string;
}

interface RepoData {
  data: RepoNode[];
}

const Home: React.FC = () => {
  const [repo, setRepo] = useState<RepoData | undefined>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getRepo();
      setRepo(reposData);
    };
    getData();
  }, []);

  const repoList: RepoNode[] = repo?.data || [];

  const createRepo = (repoList: RepoNode[]) =>
    repoList.map(repo => {
      return (
        <div className={styles.gRepoitem} key={repo.path}>
          <div className={styles.sLeft}>
            <SnippetsTwoTone className={styles.sIcon} />
          </div>
          <div className={styles.sRight}>
            <Link to={repo.path}>{repo.title}</Link>
            <div>{repo.description}</div>
          </div>
        </div>
      );
    });

  return (
    <Layout>
      <Content className={styles.gContent}>
        <div className={styles.gDetail}>
          <h1>首页</h1>
          <p>这是一个demo</p>
          <h2>文档仓库</h2>
          <div className={styles.sRepo}>{createRepo(repoList)}</div>
        </div>
      </Content>
      <Footer className={styles.gFooter}>
        test demo ©2021 Created by Raven
      </Footer>
    </Layout>
  );
};

export default Home;
