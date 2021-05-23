import React from 'react';
import styles from './index.css';
import { Layout , Menu , Icon, Input, Breadcrumb, BackTop, Anchor } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function(props: any) {
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content className={styles.myContent}>
          <Breadcrumb separator=" / " className={styles.myCrumb}>
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.myDetail}>
            {props.children}
          </div>
        </Content>
      </Layout>
  );
}
