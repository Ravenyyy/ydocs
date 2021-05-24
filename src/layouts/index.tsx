import React from 'react';
import styles from './index.css';
import DropdownMenu from '@/components/DropdownMenu';
import { Layout, Input, BackTop } from 'antd';

const { Header } = Layout;

const { Search } = Input;

function BasicLayout(props: any) {
  return (
    <Layout>
      <Header className={styles.myHeader}>
        <div className={styles.myLogo}></div>
        <Search placeholder="input search text" className={styles.mySearch} />
        <DropdownMenu />
      </Header>
      {props.children}
      <BackTop />
    </Layout>
  );
}

export default BasicLayout;
