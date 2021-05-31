import { DocData } from '@/pages/page/index';

interface GetDocParams {
  id: string;
  repo: string;
}

export interface GetDocResult {
  code: string;
  msg: string;
  data: DocData;
}

export const getDoc = async (params: GetDocParams): Promise<GetDocResult> => {
  const url = new URL('/api/getDoc', 'http://localhost:8001');
  url.searchParams.set('id', params.id);
  url.searchParams.set('repo', params.repo);

  const response = await fetch(url.toString());
  return await response.json();
};
