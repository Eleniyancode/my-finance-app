import { formatCurrency } from "../../utils/formatCurrency";

function Budget({ budget }) {
  const category = budget.category;
  const maximum = budget.maximum;
  const theme = budget.theme;
  return (
    <div
      className="w-[50%] border-l-2  pl-4"
      style={{ borderLeftColor: theme }}
    >
      <p className="text-gray-500 mb-2">{category}</p>
      <p className="font-public-sans-bold font-bold">
        {formatCurrency(maximum)}
      </p>
    </div>
  );
}

export default Budget;
