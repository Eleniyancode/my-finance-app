import { formatCurrency } from "../../utils/formatCurrency";

function Pot({ pot }) {
  const theme = pot.theme;
  return (
    <div
      className={`w-[50%] border-l-2 pl-4`}
      style={{ borderLeftColor: theme }}
    >
      <p className="text-gray-500 mb-2">{pot.name}</p>
      <p className="font-public-sans-bold font-bold">
        {formatCurrency(pot.total)}
      </p>
    </div>
  );
}

export default Pot;
