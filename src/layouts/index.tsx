import React from 'react';
import styles from './index.css';
import AnchorTree from '../components/AnchorTree';
import SlideMenu from '../components/SlideMenu';
import { Layout , Input, Breadcrumb, BackTop } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

function BasicLayout(props: any) {
  return (
    <Layout>
      <Header className={styles.myHeader}>
        <div className={styles.myLogo}></div>
        <Search placeholder="input search text" className={styles.mySearch} />
      </Header>
      <Layout>
        <Sider className={styles.mySlide}>
          <SlideMenu id={props.id} title={props.title}></SlideMenu>
        </Sider>
      </Layout>
      <Layout style={{ marginLeft: 200 }}>
        <Content className={styles.myContent} > 
          <div className={styles.myDetail}>
            {props.children}
          </div>
        </Content>
        
        <Footer className={styles.myFooter}>test demo ©2021 Created by Raven</Footer>
      </Layout>
      <>
        <BackTop />
      </>
    </Layout>
    
  )
}

export default BasicLayout;