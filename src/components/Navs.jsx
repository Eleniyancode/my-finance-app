import { NavLink } from "react-router-dom";

function Navs() {
  return (
    <aside className="hidden lg:block flex-1/5 h-full bg-black border-4  py-8">
      <div className="px-5 mb-6">
        <img src="../images/logo-large.svg" alt="logo-image" />
      </div>

      <nav className="w-[90%]">
        <ul className="flex flex-col gap-4 bg-black pb-0 justify-around rounded-r-lg ">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              isActive
                ? "bg-[rgb(248,244,240)] cursor-pointer px-8 py-4 rounded-r-lg border-l-6  border-l-green-800 hover:text-black"
                : "text-gray-600 flex items-center px-8 py-4"
            }
          >
            <li className=" flex gap-4">
              <button className="flex items-center justify-center gap-4 cursor-pointer">
                <img
                  src="../images/icon-nav-overview.svg"
                  alt="icon-nav-overview"
                />
                <p className="font-public-sans-bold">Overview</p>
              </button>
            </li>
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive
                ? "bg-[rgb(248,244,240)] cursor-pointer px-8 py-4 rounded-r-lg border-l-6  border-l-green-800 hover:text-black"
                : "text-gray-600 flex items-center px-8 py-4"
            }
          >
            <li className="rounded-r-lg flex gap-4 cursor-pointer hover:text-white">
              <button className="flex items-center justify-center gap-4 cursor-pointer">
                <img
                  src="../images/icon-nav-transactions.svg"
                  alt="icon-nav-transaction"
                />
                <p className="font-public-sans-bold text-gray-400">
                  Transactions
                </p>
              </button>
            </li>
          </NavLink>
          <NavLink
            to="/budgets"
            className={({ isActive }) =>
              isActive
                ? "bg-[rgb(248,244,240)] cursor-pointer px-8 py-4 rounded-r-lg border-l-6  border-l-green-800 hover:text-black"
                : "text-gray-600 flex items-center px-8 py-4"
            }
          >
            <li className="rounded-r-lg flex gap-4 cursor-pointer">
              <button className="flex items-center justify-center gap-4 cursor-pointer">
                <img
                  src="../images/icon-nav-budgets.svg"
                  alt="icon-nav-budgets"
                />
                <p className="font-public-sans-bold text-gray-400">Budgets</p>
              </button>
            </li>
          </NavLink>
          <NavLink
            to="/pots"
            className={({ isActive }) =>
              isActive
                ? "bg-[rgb(248,244,240)] cursor-pointer px-8 py-4 rounded-r-lg border-l-6  border-l-green-800 hover:text-black"
                : "text-gray-600 flex items-center px-8 py-4"
            }
          >
            <li className="rounded-r-lg flex gap-4 cursor-pointer">
              <button className="flex justify-center items-center gap-4 cursor-pointer">
                <img src="../images/icon-nav-pots.svg" alt="icon-nav-pots" />
                <p className="font-public-sans-bold text-gray-400">Pots</p>
              </button>
            </li>
          </NavLink>
          <NavLink
            to="/recurringBills"
            className={({ isActive }) =>
              isActive
                ? "bg-[rgb(248,244,240)] cursor-pointer px-8 py-4 rounded-r-lg border-l-6  border-l-green-800 hover:text-black"
                : "text-gray-600 flex items-center px-8 py-4"
            }
          >
            <li className="rounded-r-lg flex gap-4 cursor-pointer">
              <button className="flex gap-4 justify-center items-center cursor-pointer">
                <img
                  src="../images/icon-nav-budgets.svg"
                  alt="icon-nav-budgets-recurring-bills"
                />
                <p className="font-public-sans-bold text-gray-400">
                  Recurring Bills
                </p>
              </button>
            </li>
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
}

export default Navs;
