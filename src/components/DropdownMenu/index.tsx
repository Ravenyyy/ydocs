import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getLink } from '@/services/getLinkService';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useFetch } from '@/models/response';

interface LinkNode {
  path: string;
  title: string;
}

export interface LinkData {
  data: LinkNode[];
}

const AnchorTree: React.FC = () => {
  const res: LinkData | undefined = useFetch(getLink, () => {
    message.error('quick link 加载失败！');
  });

  const linkList: LinkNode[] = res?.data || [];

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
