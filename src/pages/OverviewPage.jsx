import Navs from "../components/navs";
import MobileNavs from "../components/MobileNavs";
import { useAppContext } from "../context/useAppContext";
import { formatCurrency } from "../utils/formatCurrency";
import Pots from "../components/potsComponent/Pots";
import TransactionsList from "../components/transactionsComponent/transactionsList";
import Budgets from "../components/budgetsComponent/budgets";
import { NavLink } from "react-router-dom";

function OverviewPage() {
  const { data, balance, pots, transactions, budgets } = useAppContext();
  console.log(data);

  return (
    <>
      <div className="lg:grid lg:grid-cols-5 w-screen ">
        <Navs />
        {/* <aside className="hidden lg:block flex-1/5 h-full bg-black border-4  py-8">
          <div className="px-5 mb-6">
            <img src="../images/logo-large.svg" alt="logo-image" />
          </div>

          <nav className="w-[90%]">
            <ul className="flex flex-col gap-4 bg-black pb-0 justify-around rounded-r-lg ">
              <li className="bg-[rgb(248,244,240)] cursor-pointer px-8 py-4 rounded-r-lg border-l-6  border-l-green-800 flex gap-4">
                <button className="flex items-center cursor-pointer  justify-center gap-4">
                  <img
                    src="../images/icon-nav-overview.svg"
                    alt="icon-nav-overview"
                  />
                  <p className="font-public-sans-bold">Overview</p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4 cursor-pointer hover:text-white">
                <button className="flex items-center justify-center gap-4 cursor-pointer hover:text-white">
                  <img
                    src="../images/icon-nav-transactions.svg"
                    alt="icon-nav-transaction"
                  />
                  <p className="font-public-sans-bold text-gray-400 hover:text-white">
                    Transactions
                  </p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4 cursor-pointer">
                <button className="flex items-center justify-center gap-4 cursor-pointer">
                  <img
                    src="../images/icon-nav-budgets.svg"
                    alt="icon-nav-budgets"
                  />
                  <p className="font-public-sans-bold text-gray-400 hover:text-white">
                    Budgets
                  </p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4 cursor-pointer">
                <button className="flex justify-center items-center gap-4 cursor-pointer">
                  <img src="../images/icon-nav-pots.svg" alt="icon-nav-pots" />
                  <p className="font-public-sans-bold text-gray-400 hover:text-white">
                    Pots
                  </p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4 cursor-pointer">
                <button className="flex gap-4 justify-center items-center cursor-pointer">
                  <img
                    src="../images/icon-nav-budgets.svg"
                    alt="icon-nav-budgets-recurring-bills"
                  />
                  <p className="font-public-sans-bold text-gray-400 hover:text-white">
                    Recurring Bills
                  </p>
                </button>
              </li>
            </ul>
          </nav>
        </aside> */}
        <main className="lg:col-start-2 lg:col-end-6 flex-4/5 px-5 py-6 bg-[rgb(248,244,240)]">
          <h1 className="font-public-sans-bold text-3xl m">Overview</h1>

          <section className="my-8 flex flex-col gap-2 lg:flex-row ">
            <div className="lg:flex-1 px-4 py-4 bg-black text-white font-public-sans flex flex-col gap-3 rounded-2xl">
              <p className="text-gray-300">Current Balance</p>
              <p className="font-public-sans-bold text-3xl">
                {formatCurrency(balance.current)}
              </p>
            </div>
            <div className="lg:flex-1 px-4 py-4 bg-white text-black font-public-sans flex flex-col gap-3 rounded-2xl">
              <p className="text-gray-500">Income</p>
              <p className="font-public-sans-bold text-3xl">
                {formatCurrency(balance.income)}
              </p>
            </div>
            <div className="lg:flex-1 px-4 py-4 bg-white text-black font-public-sans flex flex-col gap-3 rounded-2xl">
              <p className="text-gray-500">Expenses</p>
              <p className="font-public-sans-bold text-3xl">
                {formatCurrency(balance.expenses)}
              </p>
            </div>
          </section>

          <div className="lg:grid lg:grid-cols-5 gap-4">
            <div className="lg:col-start-1 lg:col-end-4">
              <Pots pots={pots} />

              <TransactionsList transactions={transactions} />
            </div>

            <div className="lg:col-start-4 lg:col-end-6">
              <Budgets budgets={budgets} />

              <section className="bg-white py-6 px-5 mt-4">
                <div className="flex justify-between">
                  <p className="font-public-sans-bold text-2xl">
                    Recurring Bills
                  </p>

                  <NavLink to="/recurringBills">
                    <button className="text-gray-500 flex items-center justify-center gap-2 cursor-pointer hover:text-black">
                      See Details
                      <img
                        src="../images/icon-caret-right.svg"
                        alt="icon-caret-left"
                      />
                    </button>
                  </NavLink>
                </div>
                <ul className="flex flex-col gap-4 mt-6">
                  <li className="flex justify-between items-center px-4 py-5 bg-[rgb(248,244,240)] border-l-4 border-l-green-700 rounded-lg">
                    <p className="text-gray-400 font-public-sans">Paid Bills</p>
                    <p className="font-public-sans-bold">$190.00</p>
                  </li>
                  <li className="flex justify-between items-center px-4 py-5 bg-[rgb(248,244,240)] border-l-4 border-l-yellow-300 rounded-lg">
                    <p className="text-gray-400 font-public-sans">
                      Total Upcoming
                    </p>
                    <p className="font-public-sans-bold">$190.98</p>
                  </li>
                  <li className="flex justify-between items-center px-4 py-5 bg-[rgb(248,244,240)] border-l-4 border-l-blue-300 rounded-lg">
                    <p className="text-gray-400 font-public-sans">Due Soon</p>
                    <p className="font-public-sans-bold">$59.98</p>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>

      <footer className="lg:hidden">
        <MobileNavs />
        {/* <nav>
          <ul className="flex bg-black p-4 pb-0 justify-around rounded-t-2xl ">
            <li className="bg-white px-6 py-2 rounded-t-lg border-b-6  border-b-green-800">
              <img
                src="../images/icon-nav-overview.svg"
                alt="icon-nav-overview"
              />
            </li>
            <li>
              <img
                src="../images/icon-nav-transactions.svg"
                alt="icon-nav-transaction"
              />
            </li>
            <li>
              <img
                src="../images/icon-nav-budgets.svg"
                alt="icon-nav-budgets"
              />
            </li>
            <li>
              <img src="../images/icon-nav-pots.svg" alt="icon-nav-pots" />
            </li>
            <li>
              <img
                src="../images/icon-nav-budgets.svg"
                alt="icon-nav-budgets-recurring-bills"
              />
            </li>
          </ul>
        </nav> */}
      </footer>
    </>
  );
}

export default OverviewPage;
