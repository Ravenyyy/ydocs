import React, { useEffect, useState } from 'react';
import styles from './index.css';
import { Layout, Breadcrumb } from 'antd';
import { getDoc } from '@/services/getDocService';
import AnchorTree from '@/components/AnchorTree';
import SlideMenu from '@/components/SlideMenu';

const { Footer, Sider, Content } = Layout;

export default function (props: any) {
  const [doc, setDoc] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getDoc();
      setDoc(reposData);
    };
    getData();
  }, []);

  const docBody: any = doc?.data[props.match.params.id].data,
    crubTitle: any = doc?.title;

  document.title = doc?.data[props.match.params.id].title;

  const createDoc = (docBody: any) => {
    if (!docBody) return;
    return docBody.map((el: any) => {
      return (
        <div key={el.title} id={el.title}>
          {el.level == '1' ? <h2>{el.title}</h2> : <h1>{el.title}</h1>}
          <p> {el.description} </p>
          {el.img ? <img src={require('@/assets/yay.jpg')} /> : <></>}
          {createDoc(el.children)}
        </div>
      );
    });
  };

  return (
    <>
      <Layout>
        <Sider className={styles['g-slide']}>
          <SlideMenu params={props.match.params}></SlideMenu>
        </Sider>
      </Layout>
      <Layout style={{ marginLeft: 200 }}>
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
