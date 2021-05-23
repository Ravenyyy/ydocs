import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import { getLink } from '@/services/getLinkService';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function(props :any){
  const [links, setLinks] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getLink();
      setLinks(reposData);
    }
    getData();
  }, []);

  const linklist :any =links? links.data : undefined;

  const createMenu = (linklist :any) => {  
    if(!linklist) return;
    const create :any = (linklist :any)=>{
      let el :any = [];
      for(let i=0;i<linklist.length;i++){
        el.push(
          <Menu.Item key={linklist[i].path} title={linklist[i].title}>
            <a href={linklist[i].path} key={linklist[i].path}>
              <span>{linklist[i].title}</span>
            </a>
          </Menu.Item>
        )
      }
      return el
    }
    const menu = (
      <Menu>{create(linklist)}</Menu>
    )

    return menu;
  }

  return (
    <>
      <Dropdown overlay={createMenu(linklist)} className={styles.myLinkMenu}>
        <a onClick={e => e.preventDefault()}>
          Quick links <DownOutlined />
        </a>
      </Dropdown>
    </>
  );
}