export const getCate = async () => {
  const response = await fetch('/api/getCate');
  return await response.json();
};
