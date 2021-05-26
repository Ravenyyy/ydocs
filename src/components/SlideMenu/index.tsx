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

  const cates: SlideMenuContext[] = cate?.data || [];

  const createMenu = (cates: SlideMenuContext[]) =>
    cates.map((el: SlideMenuContext, index: number) => {
      if (el.children) {
        defaultOpenKeys.push('sub' + index);
        return (
          <Menu.SubMenu key={'sub' + index} title={el.title}>
            {createMenu(el.children || [])}
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
