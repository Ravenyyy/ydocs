import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getCate } from '@/services/getCateService';
import { LeftOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'umi';

interface SlideMenuProps {
  repo: string;
  id: number;
  onClick: () => void;
}

interface SlideMenuContext {
  path: string;
  title: string;
  decription?: string;
  icon?: string;
  children?: SlideMenuContext[];
}

export interface SlideMenuData {
  data: SlideMenuContext[];
  title?: string;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ repo, id, onClick }) => {
  const [cate, setCates] = useState<SlideMenuData | undefined>();

  useEffect(() => {
    const getData = async () => {
      const catesData = await getCate();
      setCates(catesData.data);
    };
    getData();
  }, []);

  const cates: SlideMenuContext[] = cate?.data || [];

  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    setDefaultOpenKeys([]);
    const mapChildren = (cates: SlideMenuContext[]) => {
      cates.map(el => {
        if (el.children) {
          defaultOpenKeys.push(el.path);
          mapChildren(el.children);
        }
      });
    };
    mapChildren(cates);
    setDefaultOpenKeys(defaultOpenKeys);
  }, [cates]);

  const createMenu = (cates: SlideMenuContext[]) =>
    cates.map(el => {
      if (el.children) {
        return (
          <Menu.SubMenu key={el.path} title={el.title}>
            {createMenu(el.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={el.path} title={el.title} onClick={onClick}>
            <Link to={'/' + repo + el.path}>
              <span>{el.title}</span>
            </Link>
          </Menu.Item>
        );
      }
    });

  return (
    <>
      <div className={styles.sReturnbtn}>
        <a href="/">
          <LeftOutlined /> back to home
        </a>
      </div>
      <div className={styles.sMenutitle}>{cate?.title || ''}</div>
      <Menu
        defaultSelectedKeys={['/' + id]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        className={styles.sMenu}
      >
        {createMenu(cates)}
      </Menu>
    </>
  );
};

export default SlideMenu;
