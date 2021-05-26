import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.css';
import { Layout, Breadcrumb, Image, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { getDoc } from '@/services/getDocService';
import AnchorTree from '@/components/AnchorTree';
import SlideMenu from '@/components/SlideMenu';
import { RouteComponentProps } from 'react-router';

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

export default function (props: RouteComponentProps<RouteParams>) {
  const [doc, setDoc] = useState<DocProps>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getDoc();
      setDoc(reposData);
    };
    getData();
  }, []);

  const [btnState, setBtnState] = useState(false);

  const toggleClick = () => {
    setBtnState(!btnState);
  };

  const id: number = parseInt(props.match.params.id),
    repo: string = props.match.params.repo,
    docBody: DocBody[] | undefined = doc?.data[id].data,
    crubTitle: string | undefined = doc?.title;

  document.title = doc ? doc.data[id].title : 'myreact';

  const createDoc = (docBody: DocBody[] | undefined) => {
    if (!docBody) return;
    return docBody.map((el: DocBody) => {
      return (
        <div key={el.title} id={el.title}>
          {el.level == 1 ? <h2>{el.title}</h2> : <h1>{el.title}</h1>}
          <p> {el.description} </p>
          {imageDemo(el.img)}
          {videoDemo(el.video)}
          {createDoc(el.children)}
        </div>
      );
    });
  };

  const imageDemo = (url: string | undefined) => {
    if (!url) return;
    return <Image width={'95%'} src={url} />;
  };

  const videoDemo = (url: string | undefined) => {
    if (!url) return;
    return (
      <video controls width={'95%'}>
        <source src={url} type="video/mp4" />
      </video>
    );
  };

  return (
    <>
      <Button
        type="primary"
        onClick={toggleClick}
        className={styles['m-menubtn']}
      >
        {btnState ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Layout
        className={styles['g-left']}
        style={{ display: btnState ? 'block' : 'none' }}
      >
        <Sider
          className={styles['g-slide']}
          style={{ display: btnState ? 'block' : 'none' }}
        >
          <SlideMenu id={id} repo={repo}></SlideMenu>
        </Sider>
      </Layout>
      <Layout className={styles['g-right']}>
        <Content className={styles['g-content']}>
          <div className={styles['g-detail']}>
            <AnchorTree data={docBody}></AnchorTree>
            <Breadcrumb separator=" / " className={styles['m-crumb']}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">{crubTitle}</Breadcrumb.Item>
            </Breadcrumb>
            <div>{createDoc(docBody)}</div>
          </div>
        </Content>
        <Footer className={styles['g-footer']}>
          test demo ©2021 Created by Raven
        </Footer>
      </Layout>
    </>
  );
}
