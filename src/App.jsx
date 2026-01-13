function App() {
  return (
    <>
      <div className="lg:flex w-screen border-4 lg:items-stretch">
        <aside className="hidden lg:block flex-1/5 h-full bg-black border-4 border-red-400 py-8">
          <div className="px-5 mb-6">
            <img src="../images/logo-large.svg" alt="logo-image" />
          </div>

          <nav className="w-[90%]">
            <ul className="flex flex-col gap-4 bg-black pb-0 justify-around rounded-r-lg ">
              <li className="bg-[rgb(248,244,240)] px-8 py-4 rounded-r-lg border-l-6  border-l-green-800 flex gap-4">
                <button className="flex items-center justify-center gap-4">
                  <img
                    src="../images/icon-nav-overview.svg"
                    alt="icon-nav-overview"
                  />
                  <p className="font-public-sans-bold">Overview</p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4">
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
        <main className=" flex-4/5 px-5 py-6 bg-[rgb(248,244,240)]">
          <h1 className="font-public-sans-bold text-3xl m">Overview</h1>

          <section className="my-8 flex flex-col gap-2 lg:flex-row ">
            <div className="lg:flex-1 px-4 py-4 bg-black text-white font-public-sans flex flex-col gap-3 rounded-2xl">
              <p className="text-gray-300">Current Balance</p>
              <p className="font-public-sans-bold text-3xl">$4,836.00</p>
            </div>
            <div className="lg:flex-1 px-4 py-4 bg-white text-black font-public-sans flex flex-col gap-3 rounded-2xl">
              <p className="text-gray-500">Income</p>
              <p className="font-public-sans-bold text-3xl">$4,836.00</p>
            </div>
            <div className="lg:flex-1 px-4 py-4 bg-white text-black font-public-sans flex flex-col gap-3 rounded-2xl">
              <p className="text-gray-500">Expenses</p>
              <p className="font-public-sans-bold text-3xl">$4,836.00</p>
            </div>
          </section>

          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2">
            <section className="py-6 px-5 bg-white">
              <div className="mb-5   flex justify-between items-center bg-white">
                <p className="font-bold text-2xl">Pots</p>
                <button className="text-gray-500 flex items-center justify-center gap-2">
                  See Details
                  <img
                    src="../images/icon-caret-right.svg"
                    alt="icon-caret-left"
                  />
                </button>
              </div>
              <div className="p-4 flex item-center bg-[rgb(248,244,240)] rounded-2xl gap-5">
                <img src="../images/icon-pot.svg" alt="icon-pot" />
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500">Total Saved</p>
                  <p className="font-public-sans-bold text-4xl">$850</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-y-4">
                <div className="w-[50%] border-l-2 border-l-blue-800 pl-4">
                  <p className="text-gray-500 mb-2">Savings</p>
                  <p className="font-public-sans-bold font-bold">$159</p>
                </div>
                <div className="w-[50%] border-l-2 border-l-blue-400 pl-4">
                  <p className="text-gray-500 mb-2">Gift</p>
                  <p className="font-public-sans-bold font-bold">$40</p>
                </div>
                <div className="w-[50%] border-l-2 border-purple-800 pl-4">
                  <p className="text-gray-500 mb-2">ConcertTicket</p>
                  <p className="font-public-sans-bold font-bold">$110</p>
                </div>
                <div className="w-[50%] border-l-2 border-l-yellow-600 pl-4">
                  <p className="text-gray-500 mb-2">New Laptop</p>
                  <p className="font-public-sans-bold font-bold">$10</p>
                </div>
              </div>
            </section>
            <section className="bg-white py-6 px-5 mt-4">
              <div className="flex justify-between">
                <p className="font-public-sans-bold text-2xl">Transactions</p>
                <button className="text-gray-500 flex items-center justify-center gap-2">
                  View All
                  <img
                    src="../images/icon-caret-right.svg"
                    alt="icon-caret-left"
                  />
                </button>
              </div>
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
              </ul>
            </section>
            <section className="bg-white py-6 px-5 mt-4">
              <div className="flex justify-between">
                <p className="font-public-sans-bold text-2xl">Budgets</p>
                <button className="text-gray-500 flex items-center justify-center gap-2">
                  See Details
                  <img
                    src="../images/icon-caret-right.svg"
                    alt="icon-caret-left"
                  />
                </button>
              </div>
              <div className="flex justify-center items-center mt-5">
                <img src="../images/budget-chart.svg" alt="budget-chart" />
              </div>
              <div className="mt-5 flex flex-wrap gap-y-4">
                <div className="w-[50%] border-l-2 border-l-blue-800 pl-4">
                  <p className="text-gray-500 mb-2">Entertainment</p>
                  <p className="font-public-sans-bold font-bold">$50.00</p>
                </div>
                <div className="w-[50%] border-l-2 border-l-blue-400 pl-4">
                  <p className="text-gray-500 mb-2">Bills</p>
                  <p className="font-public-sans-bold font-bold">$750.00</p>
                </div>
                <div className="w-[50%] border-l-2 border-purple-800 pl-4">
                  <p className="text-gray-500 mb-2">Dining Out</p>
                  <p className="font-public-sans-bold font-bold">$75.00</p>
                </div>
                <div className="w-[50%] border-l-2 border-l-yellow-600 pl-4">
                  <p className="text-gray-500 mb-2">Personal Care</p>
                  <p className="font-public-sans-bold font-bold">$100.00</p>
                </div>
              </div>
            </section>

            <section className="bg-white py-6 px-5 mt-4">
              <div className="flex justify-between">
                <p className="font-public-sans-bold text-2xl">
                  Recurring Bills
                </p>
                <button className="text-gray-500 flex items-center justify-center gap-2">
                  See Details
                  <img
                    src="../images/icon-caret-right.svg"
                    alt="icon-caret-left"
                  />
                </button>
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
        </main>
      </div>

      <footer className="lg:hidden">
        <nav>
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
        </nav>
      </footer>
    </>
  );
}

export default App;
