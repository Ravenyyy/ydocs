import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getCate } from '@/services/getCateService';
import { LeftOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'umi';

export default function (props: any) {
  const [cate, setCates] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const catesData = await getCate();
      setCates(catesData);
    };
    getData();
  }, []);

  let cates: any = cate ? cate.data : undefined,
    title: any = cate ? cate.data : undefined;

  const createMenu = (cates: any) => {
    if (!cates) return;
    let submenuIndex: number = 0;
    let menu: any = [];
    const create = (cates: any, el: any) => {
      for (let i = 0; i < cates.length; i++) {
        if (cates[i].children) {
          let children: any = [];
          create(cates[i].children, children);
          submenuIndex++;
          el.push(
            <Menu.SubMenu key={`sub${submenuIndex}`} title={cates[i].title}>
              {children}
            </Menu.SubMenu>,
          );
        } else {
          el.push(
            <Menu.Item key={cates[i].path} title={cates[i].title}>
              <Link to={'/' + props.params.repo + cates[i].path}>
                <span>{cates[i].title}</span>
              </Link>
            </Menu.Item>,
          );
        }
      }
    };
    create(cates, menu);
    return menu;
  };

  return (
    <>
      <div className={styles.returnBtn}>
        <a href="/">
          {' '}
          <LeftOutlined /> back to home{' '}
        </a>
      </div>
      <div className={styles.menuTitle}>{title}</div>
      <Menu
        style={{ width: 200 }}
        defaultSelectedKeys={['/' + props.params.id]}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {createMenu(cates)}
      </Menu>
    </>
  );
}
