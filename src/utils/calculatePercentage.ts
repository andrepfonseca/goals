export const calculatePercentage = (total: number, remaining: number) => {
  return `${Math.round((remaining / total) * 100)}%`;
};
