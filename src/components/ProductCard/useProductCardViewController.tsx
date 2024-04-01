import { calculatePercentage } from "utils/calculatePercentage";
import { formatCurrency } from "utils/formatCurrency";

export const useProductCardViewController = ({
  price,
  remainingValue,
}: {
  price: number;
  remainingValue: number;
}) => {
  return {
    price: formatCurrency(price),
    remainingValue: formatCurrency(remainingValue),
    percentage: calculatePercentage(price, remainingValue),
  };
};
