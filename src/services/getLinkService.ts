import { LinkData } from '@/components/DropdownMenu';

export interface GetLinkResult {
  code: string;
  msg: string;
  data: LinkData;
}

export const getLink = async (): Promise<GetLinkResult> => {
  const url = new URL('/api/getLink', location.href);
  const response = await fetch(url.toString());
  return await response.json();
};
