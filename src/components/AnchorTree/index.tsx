import React from 'react';
import { Anchor } from 'antd';
import styles from './style.module.css';

const { Link } = Anchor;

export default function(props :any){
  const treeData :any =props.data;

  const createAnchor = (treeData :any) => {  
    if(!treeData) return;
    let anchor :any = []; 
    const create = (treeData :any ,el: any)=>{
      for(let i=0;i<treeData.length;i++){
        if(treeData[i].children){  
          let children :any = [];
          create(treeData[i].children ,children);
          el.push(
            <Link key={i} href={"#" + treeData[i].title} title={treeData[i].title} >
              {children}
            </Link>
          )
        }else{
          el.push(
            <Link key={i} href={"#" + treeData[i].title} title={treeData[i].title} />
          )
        }
      }

    };
    create(treeData.data, anchor);
    return anchor;
  }
  return (
    <Anchor className={styles.myAnchor} targetOffset={70}>
      {createAnchor(treeData)}
    </Anchor>
  );
}