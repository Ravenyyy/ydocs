import { RepoData } from '@/pages/home/index';

interface GetCateParams {
  params: string[];
}

export interface GetCateResult {
  code: string;
  msg: string;
  data: RepoData;
}

export const getRepo = async (data?: GetCateParams): Promise<GetCateResult> => {
  const response = await fetch('/api/getRepo');
  return await response.json();
};
