import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getLink } from '@/services/getLinkService';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface LinkNode {
  path: string;
  title: string;
}

export interface LinkData {
  data: LinkNode[];
}

const AnchorTree: React.FC = () => {
  const [links, setLinks] = useState<LinkData | undefined>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getLink();
      setLinks(reposData.data);
    };
    getData();
  }, []);

  const linkList: LinkNode[] = links?.data || [];

  const createMenu = (linkList: LinkNode[]) =>
    linkList.map(link => {
      return (
        <Menu.Item key={link.path} title={link.title}>
          <a href={link.path} key={link.path}>
            <span>{link.title}</span>
          </a>
        </Menu.Item>
      );
    });

  return (
    <Dropdown
      overlay={<Menu>{createMenu(linkList)}</Menu>}
      className={styles.mLinkmenu}
    >
      <a onClick={e => e.preventDefault()}>
        Quick links <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default AnchorTree;
