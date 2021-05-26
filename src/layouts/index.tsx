import styles from './index.css';
import DropdownMenu from '@/components/DropdownMenu';
import { Layout, Input, BackTop, Button } from 'antd';

const { Header } = Layout;

const { Search } = Input;

const BasicLayout: React.FC<any> = props => {
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
};

export default BasicLayout;
