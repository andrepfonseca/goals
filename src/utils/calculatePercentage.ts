export const calculatePercentage = (total: number, remaining: number) => {
  return `${Math.round(((total - remaining) / total) * 100)}%`;
};
