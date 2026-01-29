import { useState } from "react";
import Navs from "../components/navs";
import SortTransactionCategories from "../components/dropdowns/SortTransactionCategories";
import SortTransactionDates from "../components/dropdowns/SortTransactionDates";
import MobileNavs from "../components/MobileNavs";
import { useAppContext } from "../context/useAppContext";
import { formatDate } from "../utils/formatDate";
import { formatCurrency } from "../utils/formatCurrency";
import { usePagination } from "../utils/usePagination";

function TransactionsPage() {
  const [showSortListByCategory, setshowSortListByCategory] = useState(false);
  const [showSortListByDate, setshowSortListByDate] = useState(false);
  const [query, setQuery] = useState("");

  const { transactions } = useAppContext();

  const filteredData = transactions.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  //pagination logic
  const { setPage, paginatedData, page, totalPages } = usePagination(
    filteredData,
    10,
  );

  return (
    <>
      <div className=" bg-[rgb(248,244,240)] lg:grid lg:grid-cols-5 w-screen">
        <Navs />

        <div className="lg:col-start-2 lg:col-end-6 flex-4/5 px-5 py-6 bg-[rgb(248,244,240)]">
          <h1 className="font-public-sans-bold text-3xl">Transactions</h1>
          <main className="mt-8 py-6 px-4 bg-white md:hidden">
            <section className="flex relative justify-around items-center gap-4">
              <div className="flex py-2 px-2 border-2 rounded-2xl border-gray-500">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="hover:outline-0 active:outline-0 focus:outline-0"
                  placeholder="Search transactions"
                />

                <img
                  src="../images/icon-search.svg"
                  className="pr-3"
                  alt="icon-search"
                />
              </div>
              <div className="flex justify-between gap-4">
                <button
                  className="cursor-pointer"
                  onClick={() =>
                    setshowSortListByCategory((clicked) => !clicked)
                  }
                >
                  <img
                    src="../images/icon-filter-mobile.svg"
                    className="size-6"
                    alt="icon-filter"
                  />
                </button>

                <button
                  className="cursor-pointer"
                  onClick={() => setshowSortListByDate((clicked) => !clicked)}
                >
                  <img
                    src="../images/icon-sort-mobile.svg"
                    className="size-6"
                    alt="icon-sort"
                  />
                </button>
              </div>
              {showSortListByCategory && <SortTransactionCategories />}
              {showSortListByDate && <SortTransactionDates />}
            </section>

            <section>
              <ul className="mt-8 flex flex-col gap-4">
                {paginatedData.map((transaction, i) => {
                  return (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-gray-100 pb-4"
                    >
                      <div className="flex justify-center items-center gap-3">
                        <img
                          src={transaction.avatar}
                          alt="ella-phillips-image"
                          className="size-8 rounded-full"
                        />
                        <p className="font-public-sans-bold">
                          {transaction.name}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p
                          className={`text-right font-public-sans-bold ${transaction.amount > 0 ? "text-green-700" : "text-red-700"}`}
                        >
                          {formatCurrency(transaction.amount)}
                        </p>
                        <p className="text-right text-gray-500">
                          {formatDate(transaction.date)}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="mt-6">
              <ul className="flex gap-2 justify-center">
                <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center">
                  <img
                    src="../images/icon-caret-left.svg"
                    alt="icon-left-arrow"
                  />
                </li>
                <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center ">
                  1
                </li>
                <li className=" p-4 border-2 bg-black text-white rounded-md border-gray-400 flex justify-center items-center ">
                  2
                </li>
                <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center ">
                  ...
                </li>
                <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center ">
                  5
                </li>

                <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center">
                  <img
                    src="../images/icon-caret-right.svg"
                    alt="icon-right-arrow"
                  />
                </li>
              </ul>
            </section>
          </main>
          <main className="mt-8 py-10 px-10 md:px-2 lg:px-12 bg-white hidden md:block">
            <section className="flex justify-center lg:justify-around items-center gap-8">
              <div className="flex py-3 px-4 border-2 rounded-2xl border-gray-500">
                <input
                  type="text"
                  className="hover:outline-0 font-public-sans active:outline-0 focus:outline-0"
                  placeholder="Search transactions"
                />
                <img src="../images/icon-search.svg" alt="icon-search" />
              </div>

              <div className="flex justify-between gap-4 ">
                <div className="flex gap-4">
                  <label className="flex justify-center items-center gap-2">
                    <p className="font-public-sans">Sort by</p>
                    <select className="p-2 font-public-sans font-bold px-4 rounded-md border border-gray-400">
                      <option value="latest">Latest</option>
                      <option value="latest">Latest</option>
                      <option value="latest">Latest</option>
                      <option value="latest">Latest</option>
                    </select>
                  </label>

                  <label className="flex justify-center items-center gap-2">
                    <p className="font-public-sans">Cartegory</p>
                    <select className="p-2 font-public-sans font-bold px-4 rounded-md border border-gray-400">
                      <option value="latest">All transactions</option>
                      <option value="latest">Latest</option>
                      <option value="latest">Latest</option>
                      <option value="latest">Latest</option>
                    </select>
                  </label>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <div className="flex pb-4 text-gray-600 justify-center items-center">
                <p className="flex-1">Recipient / Sender</p>
                <div className="flex-1 flex justify-between items-center">
                  <p>Category</p>
                  <p>
                    Transaction <br /> Date
                  </p>
                  <p>Amount</p>
                </div>
              </div>
              <ul>
                {paginatedData.map((transaction, i) => {
                  return (
                    <li
                      key={i}
                      className="flex justify-between items-center border-t-2 border-gray-100 py-6"
                    >
                      <div className="flex flex-1 justify-start items-center gap-3">
                        <img
                          src={transaction.avatar}
                          alt="ella-phillips-image"
                          className="size-14 rounded-full"
                        />
                        <p className="font-public-sans-bold">
                          {transaction.name}
                        </p>
                      </div>
                      <div className="flex-1 flex justify-between text-gray-600">
                        <p>{transaction.category}</p>
                        <p>{formatDate(transaction.date)}</p>

                        <div className="flex flex-col gap-2">
                          <p
                            className={`text-right font-public-sans-bold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}
                          >
                            {formatCurrency(transaction.amount)}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="mt-6">
              <ul className="flex gap-2 justify-between">
                <li className="cursor-pointer p-4 border-2 rounded-md border-gray-400 flex justify-center items-center gap-3">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                    className="flex justify-center gap-2 cursor-pointer"
                  >
                    <img
                      src="../images/icon-caret-left.svg"
                      alt="icon-left-arrow"
                    />
                    <p>Previous</p>
                  </button>
                </li>
                <div className="flex gap-2">
                  <li
                    onClick={() => setPage(1)}
                    className={`cursor-pointer p-4 border-2 rounded-md border-gray-400 flex justify-center items-center ${page === 1 ? "bg-black text-white" : "bg-white"}`}
                  >
                    1
                  </li>
                  <li
                    onClick={() => setPage(2)}
                    className={`cursor-pointer p-4 border-2 ${page === 2 ? "bg-black text-white" : ""} rounded-md border-gray-400 flex justify-center items-center `}
                  >
                    2
                  </li>
                  <li
                    onClick={() => setPage(3)}
                    className={`cursor-pointer p-4 border-2 ${page === 3 ? "bg-black text-white" : ""} rounded-md border-gray-400 flex justify-center items-center `}
                  >
                    3
                  </li>
                  <li
                    onClick={() => setPage(4)}
                    className={`cursor-pointer p-4 border-2 ${page === 4 ? "bg-black text-white" : ""} rounded-md border-gray-400 flex justify-center items-center `}
                  >
                    4
                  </li>
                  <li
                    onClick={() => setPage(5)}
                    className={`cursor-pointer p-4 border-2 ${page === 5 ? "bg-black text-white" : ""} rounded-md border-gray-400 flex justify-center items-center `}
                  >
                    5
                  </li>
                </div>

                <li className="cursor-pointer p-4 border-2 rounded-md border-gray-400 flex justify-center items-center gap-3">
                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                    className="flex justify-center cursor-pointer gap-2"
                  >
                    <p>Next</p>
                    <img
                      src="../images/icon-caret-right.svg"
                      alt="icon-right-arrow"
                    />
                  </button>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
      <footer className="lg:hidden">
        <MobileNavs />
      </footer>
    </>
  );
}

export default TransactionsPage;
