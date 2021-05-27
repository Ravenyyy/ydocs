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
    return data.map((el, index) => {
      return (
        <Link key={el.title + index} href={'#' + el.title} title={el.title}>
          {createAnchor(el.children || [])}
        </Link>
      );
    });
  };

  return (
    <Anchor className={styles.mAnchor} targetOffset={70}>
      {createAnchor(data || [])}
    </Anchor>
  );
};

export default AnchorTree;
