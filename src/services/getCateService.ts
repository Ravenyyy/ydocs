import { SlideMenuData } from '@/components/SlideMenu';

interface GetCateParams {
  repo: string;
}

export interface GetCateResult {
  code: string;
  msg: string;
  data: SlideMenuData;
}

export const getCate = async (
  params: GetCateParams,
): Promise<GetCateResult> => {
  const url = new URL('/api/getCate', location.href);
  url.searchParams.set('repo', params.repo);
  const response = await fetch(url.toString());
  return await response.json();
};
