import { useEffect, useState } from 'react';

export function useFetch<T>(
  service: Function,
  fallback: Function,
  params = {},
  target?: string,
): T | undefined {
  const [content, setContent] = useState<T | undefined>();
  useEffect(() => {
    const getData = async () => {
      const resData = await service(params);
      if (resData.code === '200') {
        setContent(resData.data);
      } else {
        fallback();
      }
    };
    getData();
  }, [target]);
  return content;
}
