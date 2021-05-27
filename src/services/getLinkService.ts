import { LinkData } from '@/components/DropdownMenu';

interface GetLinkParams {
  params: string[];
}

export interface GetLinkResult {
  code: string;
  msg: string;
  data: LinkData;
}

export const getLink = async (data?: GetLinkParams): Promise<GetLinkResult> => {
  const response = await fetch('/api/getLink');
  return await response.json();
};
