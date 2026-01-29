import Transaction from "./Transaction";
import { NavLink } from "react-router-dom";

function TransactionsList({ transactions }) {
  return (
    <section className="bg-white py-6 px-5 mt-4">
      <div className="flex justify-between">
        <p className="font-public-sans-bold text-2xl">Transactions</p>
        <NavLink to="/transactions">
          <button className="text-gray-500 flex items-center justify-center cursor-pointer hover:text-black gap-2">
            View All
            <img src="../images/icon-caret-right.svg" alt="icon-caret-left" />
          </button>
        </NavLink>
      </div>
      <ul className="mt-8 flex flex-col gap-4">
        {transactions.slice(0, 5).map((transaction, i) => (
          <Transaction transaction={transaction} key={i} />
        ))}
        {/* <li className="flex justify-between items-center border-b border-gray-100 pb-4">
    <div className="flex justify-center items-center gap-3">
    <img
        src="../images/avatars/ella-phillips.jpg"
        alt="ella-phillips-image"
        className="size-8 rounded-full"
    />
    <p className="font-public-sans-bold">Emma Richardson</p>
    </div>

    <div className="flex flex-col gap-2">
    <p className="text-right font-public-sans-bold text-green-700">
        +$75.50
    </p>
    <p className="text-right text-gray-500">19 Aug 2024</p>
    </div>
</li>
<li className="flex justify-between items-center border-b border-gray-100 pb-4">
    <div className="flex justify-center items-center gap-3">
    <img
        src="../images/avatars/ella-phillips.jpg"
        alt="ella-phillips-image"
        className="size-8 rounded-full"
    />
    <p className="font-public-sans-bold">Emma Richardson</p>
    </div>

    <div className="flex flex-col gap-2">
    <p className="text-right font-public-sans-bold text-green-700">
        +$75.50
    </p>
    <p className="text-right text-gray-500">19 Aug 2024</p>
    </div>
</li>
<li className="flex justify-between items-center border-b border-gray-100 pb-4">
    <div className="flex justify-center items-center gap-3">
    <img
        src="../images/avatars/ella-phillips.jpg"
        alt="ella-phillips-image"
        className="size-8 rounded-full"
    />
    <p className="font-public-sans-bold">Emma Richardson</p>
    </div>

    <div className="flex flex-col gap-2">
    <p className="text-right font-public-sans-bold">-$75.50</p>
    <p className="text-right text-gray-500">19 Aug 2024</p>
    </div>
</li>
<li className="flex justify-between items-center border-b border-gray-100 pb-4">
    <div className="flex justify-center items-center gap-3">
    <img
        src="../images/avatars/ella-phillips.jpg"
        alt="ella-phillips-image"
        className="size-8 rounded-full"
    />
    <p className="font-public-sans-bold">Emma Richardson</p>
    </div>

    <div className="flex flex-col gap-2">
    <p className="text-right font-public-sans-bold">-$75.50</p>
    <p className="text-right text-gray-500">19 Aug 2024</p>
    </div>
</li> */}
      </ul>
    </section>
  );
}

export default TransactionsList;
