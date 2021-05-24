export const getRepo = async () => {
  const response = await fetch('/api/getRepo');
  return await response.json();
};
