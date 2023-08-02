export default <T>(arr: T[], chunkSize: number): T[][] => {
  if (chunkSize === 0) return [];
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};
