import React from 'react';
import { Anchor } from 'antd';
import styles from './style.module.css';

const { Link } = Anchor;

interface AnchorData {
  path?: string;
  title?: string;
  decription?: string;
  icon?: string;
  children?: Array<AnchorData>;
}

export default function (props: any) {
  const createAnchor = (treeData: any) => {
    if (!treeData) return;
    let index: number = 0;
    return treeData.map((el: any) => {
      return (
        <Link key={index++} href={'#' + el.title} title={el.title}>
          {createAnchor(el.children)}
        </Link>
      );
    });
  };

  return (
    <Anchor className={styles['m-anchor']} targetOffset={70}>
      {createAnchor(props.data)}
    </Anchor>
  );
}
