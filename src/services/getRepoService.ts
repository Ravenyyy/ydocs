import { RepoData } from '@/pages/home/index';

interface GetCateParams {
  [param: string]: string | number;
}

export interface GetCateResult {
  code: string;
  msg: string;
  data: RepoData;
}

export const getRepo = async (
  params?: GetCateParams,
): Promise<GetCateResult> => {
  const response = await fetch('/api/getRepo');
  return await response.json();
};
