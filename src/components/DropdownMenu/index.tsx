import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getLink } from '@/services/getLinkService';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface LinkNode {
  path: string;
  title: string;
}

interface LinkData {
  data: LinkNode[];
}

export default function () {
  const [links, setLinks] = useState<LinkData>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getLink();
      setLinks(reposData);
    };
    getData();
  }, []);

  const linklist: LinkNode[] | undefined = links?.data;

  const createMenu = (linklist: LinkNode[] | undefined) => {
    if (!linklist) return;
    return linklist.map((el: LinkNode) => {
      return (
        <Menu.Item key={el.path} title={el.title}>
          <a href={el.path} key={el.path}>
            <span>{el.title}</span>
          </a>
        </Menu.Item>
      );
    });
  };

  return (
    <>
      <Dropdown
        overlay={<Menu>{createMenu(linklist)}</Menu>}
        className={styles['m-linkmenu']}
      >
        <a onClick={e => e.preventDefault()}>
          Quick links <DownOutlined />
        </a>
      </Dropdown>
    </>
  );
}
