import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

function Transaction({ transaction }) {
  const name = transaction.name;
  const date = transaction.date;
  const amount = transaction.amount;
  const avatar = transaction.avatar;
  return (
    <li className="flex justify-between items-center border-b border-gray-100 pb-4">
      <div className="flex justify-center items-center gap-3">
        <img
          src={avatar}
          alt="ella-phillips-image"
          className="size-8 rounded-full"
        />
        <p className="font-public-sans-bold">{name}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p
          className={`text-right font-public-sans-bold ${amount > 0 ? "text-green-700" : "text-red-700"} `}
        >
          {formatCurrency(amount)}
        </p>
        <p className="text-right text-gray-500">{formatDate(date)}</p>
      </div>
    </li>
  );
}

export default Transaction;
