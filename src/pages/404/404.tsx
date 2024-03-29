import React from 'react';
import styles from './404.css';
import { Layout, Button } from 'antd';
import { useIntl } from 'umi';

const { Footer, Content } = Layout;

const ErrorPage: React.FC = () => {
  const goBack = () => {
    history.back();
  };

  const intl = useIntl();

  return (
    <Layout>
      <Content className={styles.gContent}>
        <div className={styles.gDetail}>
          <h1>404 NOT FOUND</h1>
          <div>
            <img
              src={require('@/assets/error.jpg')}
              className={styles.sErrorphoto}
            />
          </div>
          <Button type="primary" onClick={goBack} className={styles.sReturnbtn}>
            {intl.formatMessage({ id: 'GO_BACK' })}
          </Button>
        </div>
      </Content>
      <Footer className={styles.gFooter}>
        test demo ©2021 Created by Raven
      </Footer>
    </Layout>
  );
};

export default ErrorPage;
