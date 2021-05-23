import React, { useEffect, useState } from 'react';
import { Anchor } from 'antd';
import styles from './style.module.css';
import { getRepo } from '@/services/getRepoService';

const { Link } = Anchor;

export default function(props :any){
  const [repos, setRepos] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getRepo();
      setRepos(reposData);
    }
    getData();
  }, []);
  return (
    <Anchor className={styles.myAnchor}>
      <Link href="#标题" title="标题" />
      <Link href="#小标题1" title="小标题1" />
      <Link href="#小标题2" title="小标题2" />
      <Link href="#content1" title="">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  );
}