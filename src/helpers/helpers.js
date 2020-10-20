import { formatter } from "../utils/utils";

export const formatCurrency = (data) => {
  const x = data / 100;
  const val = formatter.format(x);

  return val;
};
