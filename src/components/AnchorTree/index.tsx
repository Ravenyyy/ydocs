import React from 'react';
import { Anchor } from 'antd';
import styles from './style.module.css';
import { DocBody } from '@/pages/page/index';

const { Link } = Anchor;

interface AnchorProps {
  data: DocBody[];
  description?: string;
}

const AnchorTree: React.FC<AnchorProps> = ({ data, description }) => {
  const createAnchor = (data: DocBody[]) => {
    let index: number = 0;
    return data.map((el: DocBody) => {
      return (
        <Link key={index++} href={'#' + el.title} title={el.title}>
          {createAnchor(el.children || [])}
        </Link>
      );
    });
  };

  return (
    <Anchor className={styles['m-anchor']} targetOffset={70}>
      {createAnchor(data || [])}
    </Anchor>
  );
};

export default AnchorTree;
