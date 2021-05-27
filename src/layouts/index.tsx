import styles from './index.css';
import DropdownMenu from '@/components/DropdownMenu';
import { Layout, Input, BackTop } from 'antd';

const { Header } = Layout;

const { Search } = Input;

interface BasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  return (
    <Layout>
      <Header className={styles.gHeader}>
        <div className={styles.mLogo}></div>
        <Search placeholder="input search text" className={styles.mSearch} />
        <DropdownMenu />
      </Header>
      {props.children}
      <BackTop />
    </Layout>
  );
};

export default BasicLayout;
