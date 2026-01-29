import { NavLink } from "react-router-dom";
function MobileNavs() {
  return (
    <nav>
      <ul className="flex bg-black p-4 pb-0 justify-around rounded-t-2xl ">
        <NavLink
          to="/overview"
          className={({ isActive }) =>
            isActive
              ? "bg-white rounded-t-lg border-b-4 border-b-green-800 hover:text-black"
              : "text-gray-600 flex items-center px-8 py-4"
          }
        >
          <li
            className=" px-6 py-2 md:flex md:justify-center md:items-center md:gap-1 font-public-sans-bold
             md:flex-col "
          >
            <img
              src="../images/icon-nav-overview.svg"
              alt="icon-nav-overview"
            />
            <p className="text-gray-600 hidden md:block">Overview</p>
          </li>
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            isActive
              ? "bg-white rounded-t-lg border-b-4 border-b-green-800 hover:text-black"
              : "text-gray-600 flex items-center px-8 py-4"
          }
        >
          <li
            className=" px-6 py-2 md:flex md:justify-center md:items-center md:gap-1 font-public-sans-bold
             md:flex-col "
          >
            <img
              src="../images/icon-nav-transactions.svg"
              alt="icon-nav-transaction"
            />
            <p className="text-gray-600 hidden md:block">Transactions</p>
          </li>
        </NavLink>

        <NavLink
          to="/budgets"
          className={({ isActive }) =>
            isActive
              ? "bg-white rounded-t-lg border-b-4 border-b-green-800 hover:text-black"
              : "text-gray-600 flex items-center px-8 py-4"
          }
        >
          <li
            className=" px-6 py-2 md:flex md:justify-center md:items-center md:gap-1 font-public-sans-bold
             md:flex-col "
          >
            <img src="../images/icon-nav-budgets.svg" alt="icon-nav-budgets" />
            <p className="text-gray-600 hidden md:block">Budgets</p>
          </li>
        </NavLink>
        <NavLink
          to="/pots"
          className={({ isActive }) =>
            isActive
              ? "bg-white rounded-t-lg border-b-4 border-b-green-800 hover:text-black"
              : "text-gray-600 flex items-center px-8 py-4"
          }
        >
          <li
            className=" px-6 py-2 md:flex md:justify-center md:items-center md:gap-1 font-public-sans-bold
             md:flex-col "
          >
            <img src="../images/icon-nav-pots.svg" alt="icon-nav-pots" />
            <p className="text-gray-600 hidden md:block">Pots</p>
          </li>
        </NavLink>
        <NavLink
          to="recurringBills"
          className={({ isActive }) =>
            isActive
              ? "bg-white rounded-t-lg border-b-4 border-b-green-800 hover:text-black"
              : "text-gray-600 flex items-center px-8 py-4"
          }
        >
          <li
            className=" px-6 py-2 md:flex md:justify-center md:items-center md:gap-1 font-public-sans-bold
             md:flex-col "
          >
            <img
              src="../images/icon-nav-budgets.svg"
              alt="icon-nav-budgets-recurring-bills"
            />
            <p className="text-gray-600 hidden md:block">Recurring Bills</p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default MobileNavs;
