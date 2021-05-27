import { SlideMenuData } from '@/components/SlideMenu';

interface GetCateParams {
  [param: string]: string | number;
}

export interface GetCateResult {
  code: string;
  msg: string;
  data: SlideMenuData;
}

export const getCate = async (
  params?: GetCateParams,
): Promise<GetCateResult> => {
  const response = await fetch(
    '/api/getCate' + (params?.repo?.toString() ? '?repo=' + params.repo : ''),
  );
  return await response.json();
};
