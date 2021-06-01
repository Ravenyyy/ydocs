import React, { useEffect, useState } from 'react';
import styles from './index.css';
import { Layout, Breadcrumb, Image, Button, message } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { getDoc } from '@/services/getDocService';
import { getCate } from '@/services/getCateService';
import AnchorTree from '@/components/AnchorTree';
import SlideMenu, { SlideMenuData } from '@/components/SlideMenu';
import { RouteComponentProps } from 'react-router';
import { Helmet } from 'umi';
import { useFetch } from '@/models/fetchData';
import { useIntl } from 'umi';

const { Footer, Sider, Content } = Layout;

export interface DocBody {
  title: string;
  level: number;
  description?: string;
  img?: string;
  video?: string;
  children?: DocBody[];
}

export interface DocData {
  data: DocBody[];
  title: string;
  repo: string;
}

interface RouteParams {
  id: string;
  repo: string;
}

export type Props = RouteComponentProps<RouteParams>;

const Page: React.FC<Props> = props => {
  const id = props.match.params.id;
  const repo: string = props.match.params.repo;

  const res: DocData | undefined = useFetch(
    getDoc,
    () => {
      location.replace('../pages/404/404');
    },
    { id: id, repo: repo },
    id,
  );

  const [isFold, setIsFold] = useState(true);

  const toggleClick = () => {
    setIsFold(!isFold);
  };

  const docBodys: DocBody[] = res?.data || [];
  const title: string = res ? res.title : 'myreact';
  const repoName: string = res ? res.repo : '未知仓库';

  const createDoc = (docBodys: DocBody[]) =>
    docBodys.map(docBody => {
      return (
        <div key={docBody.title} id={docBody.title}>
          {docBody.level == 1 ? (
            <h2>{docBody.title}</h2>
          ) : (
            <h1>{docBody.title}</h1>
          )}
          <p> {docBody.description} </p>
          {imageDemo(docBody.img)}
          {videoDemo(docBody.video)}
          {createDoc(docBody.children || [])}
        </div>
      );
    });

  const imageDemo = (url: string | undefined) => {
    if (!url) return;
    return <Image width={'95%'} src={url} fallback={'@/assets/error.jpg'} />;
  };

  const videoDemo = (url: string | undefined) => {
    if (!url) return;
    return (
      <video controls width={'95%'}>
        <source src={url} type="video/mp4" />
        Your browser doesn't support HTML5 video
      </video>
    );
  };

  const foldSlide = () => {
    setIsFold(true);
  };

  const intl = useIntl();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Button type="primary" onClick={toggleClick} className={styles.mMenubtn}>
        {isFold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Layout
        className={styles.gLeft}
        style={{ display: isFold ? 'none' : 'block' }}
      >
        <Sider className={styles.gSlide}>
          <SlideMenu id={id} repo={repo} onClick={foldSlide}></SlideMenu>
        </Sider>
      </Layout>
      <Layout className={styles.gRight}>
        <Content className={styles.gContent}>
          <div className={styles.gDetail}>
            <AnchorTree data={docBodys || []}></AnchorTree>
            <Breadcrumb separator=" / " className={styles.mCrumb}>
              <Breadcrumb.Item href="/">
                {intl.formatMessage({ id: 'HOME_TITTLE' })}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">{repoName}</Breadcrumb.Item>
            </Breadcrumb>
            <div>{createDoc(docBodys)}</div>
          </div>
        </Content>
        <Footer className={styles.gFooter}>
          test demo ©2021 Created by Raven
        </Footer>
      </Layout>
    </>
  );
};

export default Page;
