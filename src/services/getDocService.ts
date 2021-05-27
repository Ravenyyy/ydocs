import { DocData } from '@/pages/page/index';

interface GetDocParams {
  params: string[];
}

export interface GetDocResult {
  code: string;
  msg: string;
  data: DocData;
}

export const getDoc = async (data?: GetDocParams): Promise<GetDocResult> => {
  const response = await fetch('/api/getDoc');
  return await response.json();
};
