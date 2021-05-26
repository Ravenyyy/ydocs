import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getCate } from '@/services/getCateService';
import { LeftOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'umi';

interface SlideMenuProps {
  repo: string;
  id: number;
}

interface SlideMenuContext {
  path: string;
  title: string;
  decription?: string;
  icon?: string;
  children?: SlideMenuContext[];
}

interface SlideMenuData {
  data: SlideMenuContext[];
  title?: string;
}

const defaultOpenKeys: string[] = [];

const SlideMenu: React.FC<SlideMenuProps> = ({ repo, id }) => {
  const [cate, setCates] = useState<SlideMenuData>();

  useEffect(() => {
    const getData = async () => {
      const catesData = await getCate();
      setCates(catesData);
    };
    getData();
  }, []);

  const cates: SlideMenuContext[] | undefined = cate?.data,
    title: string | undefined = cate?.title;

  let submenuIndex: number = 0;

  const createMenu = (cates: SlideMenuContext[] | undefined) => {
    if (!cates) return;
    return cates.map((el: SlideMenuContext) => {
      if (el.children) {
        defaultOpenKeys.push('sub' + submenuIndex);
        return (
          <Menu.SubMenu key={'sub' + submenuIndex} title={el.title}>
            {createMenu(el.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={el.path} title={el.title}>
            <Link to={'/' + repo + el.path}>
              <span>{el.title}</span>
            </Link>
          </Menu.Item>
        );
      }
    });
  };

  return (
    <>
      <div className={styles['s-returnbtn']}>
        <a href="/">
          {' '}
          <LeftOutlined /> back to home{' '}
        </a>
      </div>
      <div className={styles['s-menutitle']}>{title}</div>
      <Menu
        defaultSelectedKeys={['/' + id]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        className={styles['s-menu']}
      >
        {createMenu(cates)}
      </Menu>
    </>
  );
};

export default SlideMenu;
