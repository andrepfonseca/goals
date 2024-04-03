import { calculatePercentage } from "utils/calculatePercentage";
import { formatCurrency } from "utils/formatCurrency";

export const useProductViewModel = ({
  price,
  remainingValue,
}: {
  price: number;
  remainingValue: number;
}) => {
  return {
    price: formatCurrency(price),
    remainingValue: formatCurrency(price - remainingValue),
    percentage: calculatePercentage(price, remainingValue),
  };
};
