import repos from '@/model/getRepo';

export const getRepo = () => {
  return Promise.resolve(repos);
}