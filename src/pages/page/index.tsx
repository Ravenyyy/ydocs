import React, { useEffect, useState } from 'react';
import styles from './index.css';
import { Layout, Breadcrumb, Image, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { getDoc } from '@/services/getDocService';
import AnchorTree from '@/components/AnchorTree';
import SlideMenu from '@/components/SlideMenu';
import { RouteComponentProps } from 'react-router';
import { Helmet } from 'umi';

const { Footer, Sider, Content } = Layout;

export interface DocBody {
  title: string;
  level: number;
  description?: string;
  img?: string;
  video?: string;
  children?: DocBody[];
}

type DocData = {
  data: DocBody[];
  title: string;
};

interface DocProps {
  data: DocData[];
  title: string;
}

interface RouteParams {
  id: string;
  repo: string;
}

type Props = RouteComponentProps<RouteParams>;

const Page: React.FC<Props> = props => {
  const [doc, setDoc] = useState<DocProps>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getDoc();
      setDoc(reposData);
    };
    getData();
  }, []);

  const [isFold, setFold] = useState(true);

  const toggleClick = () => {
    setFold(!isFold);
  };

  const id: number = parseInt(props.match.params.id),
    docBody: DocBody[] = doc?.data[id].data || [];

  const createDoc = (docBody: DocBody[]) =>
    docBody.map(el => {
      return (
        <div key={el.title} id={el.title}>
          {el.level == 1 ? <h2>{el.title}</h2> : <h1>{el.title}</h1>}
          <p> {el.description} </p>
          {imageDemo(el.img || '')}
          {videoDemo(el.video || '')}
          {createDoc(el.children || [])}
        </div>
      );
    });

  const imageDemo = (url: string) => {
    if (!url) return;
    return <Image width={'95%'} src={url} />;
  };

  const videoDemo = (url: string) => {
    if (!url) return;
    return (
      <video controls width={'95%'}>
        <source src={url} type="video/mp4" />
        Your browser doesn't support HTML5 video
      </video>
    );
  };

  const foldSlide = () => {
    setFold(true);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{doc ? doc.data[id].title : 'myreact'}</title>
      </Helmet>
      <Button type="primary" onClick={toggleClick} className={styles.mMenubtn}>
        {isFold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Layout
        className={styles.gLeft}
        style={{ display: isFold ? 'none' : 'block' }}
      >
        <Sider className={styles.gSlide}>
          <SlideMenu
            id={id}
            repo={props.match.params.repo}
            onClick={foldSlide}
          ></SlideMenu>
        </Sider>
      </Layout>
      <Layout className={styles.gRight}>
        <Content className={styles.gContent}>
          <div className={styles.gDetail}>
            <AnchorTree data={docBody || []}></AnchorTree>
            <Breadcrumb separator=" / " className={styles.mCrumb}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">{doc?.title || ''}</Breadcrumb.Item>
            </Breadcrumb>
            <div>{createDoc(docBody)}</div>
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
