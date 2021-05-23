import React, { useEffect, useState } from 'react';
import styles from './index.css';
import { Layout , Breadcrumb } from 'antd';
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
    }
    getData();
  }, []);

  let cxt: any = undefined,
    title: any = undefined;

  if (doc) {
    cxt = doc.data[props.match.params.id];
    title = doc.title;
  }

  const createDoc = (cxt: any) => {
    if (!cxt) return;
    let dom: any = [];
    const create = (cxt: any, el: any) => {
      for (let i = 0; i < cxt.length; i++) {
        if (cxt[i].children) {
          let children: any = [];
          create(cxt[i].children, children);
          el.push(
            <div key={cxt[i].title} id={cxt[i].title}>
              {cxt[i].level == "1" ? (<h2>{cxt[i].title}</h2>) : (<h1>{cxt[i].title}</h1>)}
              <p> {cxt[i].description} </p>
              {cxt[i].img ? (<img src={require('@/assets/yay.jpg')} />) : (<></>)}
              {children}
            </div>
          )
        } else {
          el.push(
            <div key={cxt[i].title} id={cxt[i].title}>
              {cxt[i].level == "1" ? (<h2>{cxt[i].title}</h2>) : (<h1>{cxt[i].title}</h1>)}
              <p> {cxt[i].description} </p>
              {cxt[i].img ? (<img src={require('@/assets/yay.jpg')} />) : (<></>)}
            </div>
          )
        }
      }

    };
    create(cxt.data, dom);
    return dom;
  }
  return (
    <>
      <Layout>
        <Sider className={styles.mySlide}>
          <SlideMenu repo={props.match.params.repo}></SlideMenu>
        </Sider>
      </Layout>
      <Layout style={{ marginLeft: 200 }}>
        <Content className={styles.myContent} >
          <div className={styles.myDetail}>
            <AnchorTree data={cxt}></AnchorTree>
            <Breadcrumb separator=" / " className={styles.myCrumb}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">{title}</Breadcrumb.Item>
            </Breadcrumb>
            <div>
              {createDoc(cxt)}
            </div>
          </div>
        </Content>
        <Footer className={styles.myFooter}>test demo ©2021 Created by Raven</Footer>
      </Layout>
    </>
  );
}
