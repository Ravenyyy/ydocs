import { DocData } from '@/pages/page/index';

interface GetDocParams {
  [param: string]: string | number;
}

export interface GetDocResult {
  code: string;
  msg: string;
  data: DocData;
}

export const getDoc = async (params?: GetDocParams): Promise<GetDocResult> => {
  const response = await fetch(
    '/api/getDoc' + (params?.id?.toString() ? '?id=' + params.id : ''),
  );
  return await response.json();
};
