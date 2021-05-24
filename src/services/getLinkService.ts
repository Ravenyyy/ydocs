export const getLink = async () => {
  const response = await fetch('/api/getLink');
  return await response.json();
};
