function TransactionsPage() {
  return (
    <>
      <div className="py-6 px-1 md:px-2 bg-[rgb(248,244,240)] lg:grid lg:grid-cols-5 w-screen">
        <aside className="hidden lg:block flex-1/5 h-full bg-black rounded-r-lg border-4  py-8">
          <div className="px-5 mb-6">
            <img src="../images/logo-large.svg" alt="logo-image" />
          </div>

          <nav className="w-[90%]">
            <ul className="flex flex-col gap-4 bg-black pb-0 justify-around rounded-r-lg ">
              <li className=" px-8 py-4 rounded-r-lg  flex gap-4">
                <button className="flex items-center justify-center gap-4">
                  <img
                    src="../images/icon-nav-overview.svg"
                    alt="icon-nav-overview"
                  />
                  <p className="font-public-sans-bold text-gray-400">
                    Overview
                  </p>
                </button>
              </li>
              <li className="bg-[rgb(248,244,240)] border-l-6  border-l-green-800 px-8 py-4 rounded-r-lg flex gap-4">
                <button className="flex items-center justify-center gap-4">
                  <img
                    src="../images/icon-nav-transactions.svg"
                    alt="icon-nav-transaction"
                  />
                  <p className="font-public-sans-bold text-gray-400">
                    Transactions
                  </p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4">
                <button className="flex items-center justify-center gap-4">
                  <img
                    src="../images/icon-nav-budgets.svg"
                    alt="icon-nav-budgets"
                  />
                  <p className="font-public-sans-bold text-gray-400">Budgets</p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4">
                <button className="flex justify-center items-center gap-4">
                  <img src="../images/icon-nav-pots.svg" alt="icon-nav-pots" />
                  <p className="font-public-sans-bold text-gray-400">Pots</p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4">
                <button className="flex gap-4 justify-center items-center">
                  <img
                    src="../images/icon-nav-budgets.svg"
                    alt="icon-nav-budgets-recurring-bills"
                  />
                  <p className="font-public-sans-bold text-gray-400">
                    Recurring Bills
                  </p>
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="lg:col-start-2 lg:col-end-6 flex-4/5 px-5 py-6 bg-[rgb(248,244,240)]">
          <h1 className="font-public-sans-bold text-3xl">Transactions</h1>
          <main className="mt-8 py-6 px-4 bg-white md:hidden">
            <section className="flex justify-around items-center gap-4">
              <div className="flex py-2 px-2 border-2 rounded-2xl border-gray-500">
                <input
                  type="text"
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
                <img
                  src="../images/icon-filter-mobile.svg"
                  className="size-6"
                  alt="icon-filter"
                />
                <img
                  src="../images/icon-sort-mobile.svg"
                  className="size-6"
                  alt="icon-sort"
                />
              </div>
            </section>

            <section>
              <ul className="mt-8 flex flex-col gap-4">
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
                </li>
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
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-100 py-6">
                  <div className="flex flex-1 justify-start items-center gap-3">
                    <img
                      src="../images/avatars/ella-phillips.jpg"
                      alt="ella-phillips-image"
                      className="size-14 rounded-full"
                    />
                    <p className="font-public-sans-bold">Emma Richardson</p>
                  </div>
                  <div className="flex-1 flex justify-between text-gray-600">
                    <p>Personal Care</p>
                    <p>20 Aug 2024</p>

                    <div className="flex flex-col gap-2">
                      <p className="text-right font-public-sans-bold">
                        -$75.50
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mt-6">
              <ul className="flex gap-2 justify-between">
                <li className="p-4 border-2 rounded-md border-gray-400 flex justify-center items-center gap-3">
                  <img
                    src="../images/icon-caret-left.svg"
                    alt="icon-left-arrow"
                  />
                  <p>Previous</p>
                </li>
                <div className="flex gap-2">
                  <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center ">
                    1
                  </li>
                  <li className=" p-4 border-2 bg-black text-white rounded-md border-gray-400 flex justify-center items-center ">
                    2
                  </li>
                  <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center ">
                    3
                  </li>
                  <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center ">
                    4
                  </li>
                  <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center ">
                    5
                  </li>
                </div>

                <li className=" p-4 border-2 rounded-md border-gray-400 flex justify-center items-center gap-3">
                  <p>Next</p>
                  <img
                    src="../images/icon-caret-right.svg"
                    alt="icon-right-arrow"
                  />
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
      <footer className="lg:hidden">
        <nav>
          <ul className="flex bg-black p-4 pb-0 justify-around rounded-t-2xl ">
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
            <li
              className="bg-white rounded-t-lg border-b-4 border-b-green-800 px-6 py-2 md:flex md:justify-center md:items-center md:gap-1 font-public-sans-bold
             md:flex-col "
            >
              <img
                src="../images/icon-nav-transactions.svg"
                alt="icon-nav-transaction"
              />
              <p className="text-gray-600 hidden md:block">Transactions</p>
            </li>
            <li
              className=" px-6 py-2 md:flex md:justify-center md:items-center md:gap-1 font-public-sans-bold
             md:flex-col "
            >
              <img
                src="../images/icon-nav-budgets.svg"
                alt="icon-nav-budgets"
              />
              <p className="text-gray-600 hidden md:block">Budgets</p>
            </li>
            <li
              className=" px-6 py-2 md:flex md:justify-center md:items-center md:gap-1 font-public-sans-bold
             md:flex-col "
            >
              <img src="../images/icon-nav-pots.svg" alt="icon-nav-pots" />
              <p className="text-gray-600 hidden md:block">Pots</p>
            </li>
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
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default TransactionsPage;
