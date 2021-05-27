import { SlideMenuData } from '@/components/SlideMenu';

interface GetCateParams {
  params: string[];
}

export interface GetCateResult {
  code: string;
  msg: string;
  data: SlideMenuData;
}

export const getCate = async (data?: GetCateParams): Promise<GetCateResult> => {
  const response = await fetch('/api/getCate');
  return await response.json();
};
