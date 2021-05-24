export const getDoc = async () => {
  const response = await fetch('/api/getDoc');
  return await response.json();
};
