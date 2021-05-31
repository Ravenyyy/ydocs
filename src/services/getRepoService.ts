import { RepoData } from '@/pages/home/index';

export interface GetCateResult {
  code: string;
  msg: string;
  data: RepoData;
}

export const getRepo = async (): Promise<GetCateResult> => {
  const url = new URL('/api/getRepo', 'http://localhost:8001');
  const response = await fetch(url.toString());
  return await response.json();
};
