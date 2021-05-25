import React from 'react';
import { Anchor } from 'antd';
import styles from './style.module.css';

const { Link } = Anchor;

interface AnchorData {
  title: string;
  level: number;
  description?: string;
  img?: string;
  video?: string;
  children?: AnchorData[];
}

interface AnchorProps {
  data: AnchorData[];
  description?: string;
}

const AnchorTree: React.FC<AnchorProps> = ({ data, description }) => {
  const createAnchor = (data: AnchorData[] | undefined) => {
    if (!data) return;
    let index: number = 0;
    return data.map((el: AnchorData) => {
      return (
        <Link key={index++} href={'#' + el.title} title={el.title}>
          {createAnchor(el.children)}
        </Link>
      );
    });
  };

  return (
    <Anchor className={styles['m-anchor']} targetOffset={70}>
      {createAnchor(data)}
    </Anchor>
  );
};

export default AnchorTree;
