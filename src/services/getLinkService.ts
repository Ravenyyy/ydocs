import { LinkData } from '@/components/DropdownMenu';

interface GetLinkParams {
  [param: string]: string | number;
}

export interface GetLinkResult {
  code: string;
  msg: string;
  data: LinkData;
}

export const getLink = async (
  params?: GetLinkParams,
): Promise<GetLinkResult> => {
  const response = await fetch('/api/getLink');
  return await response.json();
};
