import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import { getRepo } from '@/services/getRepoService';
import { LeftOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'umi';

export default function(props :any){
  const [repo, setRepos] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getRepo();
      setRepos(reposData);
    }
    getData();
  }, []);

  console.log(repo);

  let repos :any = undefined,
      title :any = undefined;

  if(repo){
    repos = repo.data;
    title = repo.title;
  }

  const createMenu = (repos :any) => {  
    if(!repos) return;
    let submenuIndex :number = 0; 
    let menu :any = []; 
    const create = (repos :any ,el: any)=>{
      for(let i=0;i<repos.length;i++){
        if(repos[i].children){  
          let children :any = [];
          create(repos[i].children ,children);
          submenuIndex++;
          el.push(
            <Menu.SubMenu
              key={`sub${submenuIndex}`}
              title={repos[i].title}
            >
              {children}
            </Menu.SubMenu>
          )
        }else{
          el.push(
            <Menu.Item key={repos[i].path} title={repos[i].title}>
              <Link to={'/repo/document' + repos[i].path}>
                <span>{repos[i].title}</span>
              </Link>
            </Menu.Item>
          )
        }
      }

    };
    create(repos, menu);
    return menu;
  }

  return (
    <>
      <div className={styles.returnBtn}>
        <a> <LeftOutlined /> back to home </a>
      </div>
      <div className={styles.menuTitle}>
        {title}
      </div>
      <Menu style={{ width: 256 }} defaultSelectedKeys={['/1']} defaultOpenKeys={['sub1']} mode="inline">
        {createMenu(repos)}
      </Menu>
    </>
  );
}