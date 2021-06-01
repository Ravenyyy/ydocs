import React, { useState, useEffect } from 'react';
import styles from './index.css';
import DropdownMenu from '@/components/DropdownMenu';
import { Layout, Input, BackTop, Button, Radio, RadioChangeEvent } from 'antd';
import { getLocale, setLocale } from 'umi';
import { useIntl } from 'umi';

const { Header } = Layout;

const { Search } = Input;

const BasicLayout: React.FC = props => {
  const [lang, setLang] = useState(getLocale());
  const switchLang = (e: RadioChangeEvent) => {
    setLang(e.target.value);
    if (lang === 'zh-CN') {
      setLocale('en-US', false);
    } else {
      setLocale('zh-CN', false);
    }
  };
  const intl = useIntl();
  return (
    <Layout>
      <Header className={styles.gHeader}>
        <div className={styles.mLogo}></div>
        <Search
          placeholder={intl.formatMessage({ id: 'SEARCH_DOCUMENTATION' })}
          className={styles.mSearch}
        />
        <Radio.Group
          value={lang}
          onChange={switchLang}
          className={styles.mLangswitch}
        >
          <Radio.Button key="en" value={'en-US'}>
            En
          </Radio.Button>
          <Radio.Button key="cn" value={'zh-CN'}>
            中
          </Radio.Button>
        </Radio.Group>
        <DropdownMenu />
      </Header>
      {props.children}
      <BackTop />
    </Layout>
  );
};

export default BasicLayout;
