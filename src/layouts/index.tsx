import React, { useState } from 'react';
import styles from './index.css';
import DropdownMenu from '@/components/DropdownMenu';
import { Layout, Input, BackTop, Button } from 'antd';

const { Header } = Layout;

const { Search } = Input;

function BasicLayout(props: any) {
  return (
    <Layout>
      <Header className={styles['g-header']}>
        <div className={styles['m-logo']}></div>
        <Search
          placeholder="input search text"
          className={styles['m-search']}
        />
        <DropdownMenu />
      </Header>
      {props.children}
      <BackTop />
    </Layout>
  );
}

export default BasicLayout;
