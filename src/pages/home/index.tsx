import React, { useState , useEffect} from 'react';
import styles from './index.css';
import { Layout , Input , Typography , Row, Col } from 'antd';
import { SnippetsTwoTone , DiffTwoTone} from '@ant-design/icons';
import { getRepo } from '@/services/getRepoService';
import { Link } from 'umi';
 
const { Header, Footer, Content } = Layout;
const { Title , Text} = Typography;
const { Search } = Input;

function BasicLayout(props: any) {
  const [repo, setRepo] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getRepo();
      setRepo(reposData);
    }
    getData();
  }, []);

  let repolist :any =repo? repo.data : undefined;

  const createRepo = (repolist :any) => {  
    if(!repolist) return;
    const create :any = (repolist :any)=>{
      let el :any = [];
      for(let i=0;i<repolist.length;i++){
        el.push(
          <Col span={12}  key={repolist[i].path}>
            <Row justify='center'>
              <Col span={2}>
                <SnippetsTwoTone className={styles.myIcon}/>
              </Col>
              <Col span={4}>
                <Row><Link to={repolist[i].path}>{repolist[i].title}</Link></Row>
                <Row>{repolist[i].description}</Row>
              </Col>
            </Row>
          </Col>  
        )
      }
      return el
    }

    return create(repolist);
  }

  return (
    <>
      <Layout>
        <Content className={styles.myContent} > 
          <div className={styles.myDetail}>
            <h1>首页</h1>
            <p>这是一个demo</p>
            <h2>文档仓库</h2>
            <Row className={styles.myRepo}>
              {createRepo(repolist)}
            </Row>
          </div>
        </Content>
        
        <Footer className={styles.myFooter}>test demo ©2021 Created by Raven</Footer>
      </Layout>
    </>
  )
}

export default BasicLayout;