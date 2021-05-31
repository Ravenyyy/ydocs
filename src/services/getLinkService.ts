import { LinkData } from '@/components/DropdownMenu';

// interface GetLinkParams {
//   [param: string]: string | number;
// }

export interface GetLinkResult {
  code: string;
  msg: string;
  data: LinkData;
}

export const getLink = async (): Promise<GetLinkResult> => {
  const url = new URL('/api/getLink', 'http://localhost:8001');
  const response = await fetch(url.toString());
  return await response.json();
};
