import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getCate } from '@/services/getCateService';
import { LeftOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { Link } from 'umi';
import { useFetch } from '@/models/fetchData';
import { useIntl } from 'umi';

interface SlideMenuProps {
  repo: string;
  id: string;
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
  front: string;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ repo, id, onClick }) => {
  const res: SlideMenuData | undefined = useFetch(
    getCate,
    () => {
      message.error('slidemenu 加载失败！');
    },
    { repo: repo },
  );

  const cates: SlideMenuContext[] = res?.data || [];
  const title: string = res?.title || '';

  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    setDefaultOpenKeys([]);
    const mapChildren = (cates: SlideMenuContext[]) => {
      cates.map(cate => {
        if (cate.children) {
          defaultOpenKeys.push(cate.path);
          mapChildren(cate.children);
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
  const intl = useIntl();

  return (
    <>
      <div className={styles.sReturnbtn}>
        <a href="/">
          <LeftOutlined /> {intl.formatMessage({ id: 'BACK_TO_HOME' })}
        </a>
      </div>
      <div className={styles.sMenutitle}>{title}</div>
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
