import React, { useEffect, useState } from 'react';
import styles from './index.css';
import { Breadcrumb } from 'antd';
import { getDoc } from '@/services/getDocService';
import AnchorTree from '@/components/AnchorTree';

export default function () {
  const [doc, setRepos] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const reposData = await getDoc();
      setRepos(reposData);
    }
    getData();
  }, []);

  let cxt: any = undefined,
    title: any = undefined;

  if (doc) {
    cxt = doc.data[0];
    title = doc.title;
  }

  const createDoc = (cxt :any) => {  
    if(!cxt) return;
    console.log(cxt);
    let dom :any = []; 
    const create = (cxt :any ,el: any)=>{
      for(let i=0;i<cxt.length;i++){

        if(cxt[i].children){  
          let children :any = [];
          create(cxt[i].children ,children);
          el.push(
            <div key={cxt[i].title} id={cxt[i].title}>
              {cxt[i].level == "1" ? (<h2>{cxt[i].title}</h2>) : (<h1>{cxt[i].title}</h1>)}
              <p> {cxt[i].description} </p>
              {cxt[i].img ? (<img src={require('@/assets/yay.jpg')} />) : (<></>) }
              {children}
            </div>
          )
        }else{
          el.push(
            <div key={cxt[i].title} id={cxt[i].title}>
              {cxt[i].level == "1" ? (<h2>{cxt[i].title}</h2>) : (<h1>{cxt[i].title}</h1>)}
              <p> {cxt[i].description} </p>
              {cxt[i].img ? (<img src={require('@/assets/yay.jpg')} />) : (<></>) }
            </div>
          )
        }
      }

    };
    create(cxt.data, dom);
    return dom;
  }

  return (
    <>
      <AnchorTree data={cxt}></AnchorTree>
      <Breadcrumb separator=" / " className={styles.myCrumb}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">{title}</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        {createDoc(cxt)}
      </div>
    </>
  );
}
