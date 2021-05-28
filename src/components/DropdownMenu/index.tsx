import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getLink } from '@/services/getLinkService';
import { Menu, Dropdown, message } from 'antd';
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
      const resData = await getLink();
      if (resData.code === '200') {
        setLinks(resData.data);
      } else {
        message.error('slidemenu 加载失败！');
      }
    };
    getData();
  }, []);

  const linkList: LinkNode[] = links?.data || [];

  const createMenu = (linkList: LinkNode[]) =>
    linkList.map(link => {
      return (
        <Menu.Item key={link.path} title={link.title}>
          <a href={link.path}>
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
