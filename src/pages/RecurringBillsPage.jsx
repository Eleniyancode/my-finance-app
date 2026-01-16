function RecurringBillsPage() {
  return (
    <>
      <header className="md:hidden">
        <nav>
          <ul className="flex bg-black p-4 pb-0 justify-around rounded-b-2xl ">
            <li className="">
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
            <li className=" ">
              <img
                src="../images/icon-nav-budgets.svg"
                alt="icon-nav-budgets"
              />
            </li>
            <li className="">
              <img src="../images/icon-nav-pots.svg" alt="icon-nav-pots" />
            </li>
            <li className="bg-white px-6 py-2 rounded-t-lg border-b-6  border-b-green-800">
              <img
                src="../images/icon-nav-budgets.svg"
                alt="icon-nav-budgets-recurring-bills"
              />
            </li>
          </ul>
        </nav>
      </header>
      <div className="py-6 px-4 md:p-10 lg:pl-0 lg:pb-0 lg:pt-0 gap-10 overflow-x-hidden bg-[rgb(248,244,240)]  lg:grid lg:grid-cols-5 w-screen">
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
                  <p className="font-public-sans-bold text-gray-400 text-[16px]">
                    Overview
                  </p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4">
                <button className="flex items-center justify-center gap-4">
                  <img
                    src="../images/icon-nav-transactions.svg"
                    alt="icon-nav-transaction"
                  />
                  <p className="font-public-sans-bold text-gray-400 text-[16px]">
                    Transactions
                  </p>
                </button>
              </li>
              <li className="px-8 py-4 flex gap-4">
                <button className="flex items-center justify-center gap-4">
                  <img
                    src="../images/icon-nav-budgets.svg"
                    alt="icon-nav-budgets"
                  />
                  <p className="font-public-sans-bold text-gray-400 text-[16px]">
                    Budgets
                  </p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg bg-[rgb(248,244,240)] border-l-6  border-l-green-800 flex gap-4">
                <button className="flex justify-center items-center gap-4">
                  <img src="../images/icon-nav-pots.svg" alt="icon-nav-pots" />
                  <p className="font-public-sans-bold text-gray-400 text-[16px]">
                    Pots
                  </p>
                </button>
              </li>
              <li className="px-8 py-4 rounded-r-lg flex gap-4">
                <button className="flex gap-4 justify-center items-center">
                  <img
                    src="../images/icon-nav-budgets.svg"
                    alt="icon-nav-budgets-recurring-bills"
                  />
                  <p className="font-public-sans-bold text-gray-400 text-[14px]">
                    Recurring Bills
                  </p>
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="lg:col-start-2 lg:col-end-6 lg:mt-5 pb-5">
          <header className="flex justify-between items-center">
            <h1 className="font-public-sans-bold text-3xl">Recurring Bills</h1>
          </header>

          <div className="lg:flex lg:gap-5 lg:items-start">
            <div className="lg:flex lg:flex-wrap lg:items-start lg:flex-3 lg:gap-5">
              <div className="md:flex lg:flex-col lg:flex-1 gap-5">
                <section className="p-6 mt-4 md:pt-10 md:pl-10 md:flex-1 lg:flex-1 flex md:flex-col item-center bg-black rounded-2xl gap-10">
                  <img
                    src="../images/icon-recurring-bills.svg"
                    className="md:size-10"
                    alt="icon-pot"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-300">Total Saved</p>
                    <p className="font-public-sans-bold text-4xl text-white">
                      $850.00
                    </p>
                  </div>
                </section>

                <section className="mt-4 pt-6 pb-3 md:flex-1 px-6 bg-white rounded-lg ">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="font-public-sans-bold text-lg font-bold">
                        Summary
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-2">
                    <li className="flex justify-between py-4 border-b border-b-gray-200">
                      <p>Paid Bills</p>
                      <p className="font-public-sans-bold">2 ($320.00)</p>
                    </li>
                    <li className="flex justify-between py-4 border-b border-b-gray-200">
                      <p>Total Upcoming</p>
                      <p className="font-public-sans-bold">2 ($320.00)</p>
                    </li>
                    <li className="flex text-red-500 justify-between py-4 border-b border-b-gray-200">
                      <p>Due Soon</p>
                      <p className="font-public-sans-bold">2 ($320.00)</p>
                    </li>
                  </ul>
                </section>
              </div>

              <section className="mt-8 flex-2 pt-8 pb-3 px-4 bg-white rounded-lg lg:w-[45%]">
                <div className="flex justify-around items-center gap-4">
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
                      src="../images/icon-sort-mobile.svg"
                      className="size-6"
                      alt="icon-sort"
                    />
                  </div>
                </div>

                <ul className="my-2 md:px-8">
                  <header className="hidden md:mb-2 md:flex text-gray-400 border-b border-b-gray-300 ">
                    <span className="flex-1">Bill Title</span>
                    <div className="flex-1 flex">
                      <span className="flex-1">Due Date</span>
                      <span className="flex-1 text-right">Amount</span>
                    </div>
                  </header>
                  <li className="py-4 border-b border-b-gray-300 md:flex">
                    <div className="flex gap-3 items-center md:flex-1">
                      <img
                        src="../images/avatars/elevate-education.jpg"
                        className="size-8 rounded-full"
                        alt="avatar-icon"
                      />
                      <p className="font-public-sans-bold">Elevate Education</p>
                    </div>
                    <div className="flex justify-between md:flex-1">
                      <p className="flex py-1 items-center justify-center gap-2">
                        <span className="text-green-700">Monthly-1st</span>
                        <img src="../images/icon-bill-paid.svg" alt="" />
                      </p>
                      <p className="font-public-sans-bold">$250.00</p>
                    </div>
                  </li>
                  <li className="py-4 border-b border-b-gray-300 md:flex">
                    <div className="flex gap-3 items-center md:flex-1">
                      <img
                        src="../images/avatars/elevate-education.jpg"
                        className="size-8 rounded-full"
                        alt=""
                      />
                      <p className="font-public-sans-bold">Elevate Education</p>
                    </div>
                    <div className="flex justify-between md:flex-1">
                      <p className="flex py-1 items-center justify-center gap-2">
                        <span className="text-green-700">Monthly-1st</span>
                        <img src="../images/icon-bill-due.svg" alt="" />
                      </p>
                      <p className="font-public-sans-bold text-red-500">
                        $250.00
                      </p>
                    </div>
                  </li>
                  <li className="py-4 border-b border-b-gray-300 md:flex">
                    <div className="flex gap-3 items-center md:flex-1">
                      <img
                        src="../images/avatars/elevate-education.jpg"
                        className="size-8 rounded-full"
                        alt="avatar-icon"
                      />
                      <p className="font-public-sans-bold">Elevate Education</p>
                    </div>
                    <div className="flex justify-between md:flex-1">
                      <p className="flex py-1 items-center justify-center gap-2">
                        <span className="text-green-700">Monthly-1st</span>
                        <img src="../images/icon-bill-paid.svg" alt="" />
                      </p>
                      <p className="font-public-sans-bold">$250.00</p>
                    </div>
                  </li>
                  <li className="py-4 border-b border-b-gray-300 md:flex">
                    <div className="flex gap-3 items-center md:flex-1">
                      <img
                        src="../images/avatars/elevate-education.jpg"
                        className="size-8 rounded-full"
                        alt=""
                      />
                      <p className="font-public-sans-bold">Elevate Education</p>
                    </div>
                    <div className="flex justify-between md:flex-1">
                      <p className="flex py-1 items-center justify-center gap-2">
                        <span className="text-green-700">Monthly-1st</span>
                        <img src="../images/icon-bill-due.svg" alt="" />
                      </p>
                      <p className="font-public-sans-bold text-red-500">
                        $250.00
                      </p>
                    </div>
                  </li>
                  <li className="py-4 border-b border-b-gray-300 md:flex">
                    <div className="flex gap-3 items-center md:flex-1">
                      <img
                        src="../images/avatars/elevate-education.jpg"
                        className="size-8 rounded-full"
                        alt="avatar-icon"
                      />
                      <p className="font-public-sans-bold">Elevate Education</p>
                    </div>
                    <div className="flex justify-between md:flex-1">
                      <p className="flex py-1 items-center justify-center gap-2">
                        <span className="text-green-700">Monthly-1st</span>
                        <img src="../images/icon-bill-paid.svg" alt="" />
                      </p>
                      <p className="font-public-sans-bold">$250.00</p>
                    </div>
                  </li>
                  <li className="py-4 border-b border-b-gray-300 md:flex">
                    <div className="flex gap-3 items-center md:flex-1">
                      <img
                        src="../images/avatars/elevate-education.jpg"
                        className="size-8 rounded-full"
                        alt=""
                      />
                      <p className="font-public-sans-bold">Elevate Education</p>
                    </div>
                    <div className="flex justify-between md:flex-1">
                      <p className="flex py-1 items-center justify-center gap-2">
                        <span className="text-green-700">Monthly-1st</span>
                        <img src="../images/icon-bill-due.svg" alt="" />
                      </p>
                      <p className="font-public-sans-bold text-red-500">
                        $250.00
                      </p>
                    </div>
                  </li>
                  <li className="py-4 border-b border-b-gray-300 md:flex">
                    <div className="flex gap-3 items-center md:flex-1">
                      <img
                        src="../images/avatars/elevate-education.jpg"
                        className="size-8 rounded-full"
                        alt="avatar-icon"
                      />
                      <p className="font-public-sans-bold">Elevate Education</p>
                    </div>
                    <div className="flex justify-between md:flex-1">
                      <p className="flex py-1 items-center justify-center gap-2">
                        <span className="text-green-700">Monthly-1st</span>
                        <img src="../images/icon-bill-paid.svg" alt="" />
                      </p>
                      <p className="font-public-sans-bold">$250.00</p>
                    </div>
                  </li>
                  <li className="py-4 border-b border-b-gray-300 md:flex">
                    <div className="flex gap-3 items-center md:flex-1">
                      <img
                        src="../images/avatars/elevate-education.jpg"
                        className="size-8 rounded-full"
                        alt=""
                      />
                      <p className="font-public-sans-bold">Elevate Education</p>
                    </div>
                    <div className="flex justify-between md:flex-1">
                      <p className="flex py-1 items-center justify-center gap-2">
                        <span className="text-green-700">Monthly-1st</span>
                        <img src="../images/icon-bill-due.svg" alt="" />
                      </p>
                      <p className="font-public-sans-bold text-red-500">
                        $250.00
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>
      <footer className="hidden md:block lg:hidden">
        <nav>
          <ul className="flex bg-black p-4 pb-0 justify-around rounded-t-2xl ">
            <li
              className=" px-6 py-2  flex justify-center items-center gap-1 font-public-sans-bold
             flex-col"
            >
              <img
                src="../images/icon-nav-overview.svg"
                alt="icon-nav-overview"
                className="size-7"
              />
              <p className="text-gray-600">Overview</p>
            </li>
            <li
              className=" px-6 py-2  flex justify-center items-center gap-1 font-public-sans-bold
             flex-col"
            >
              <img
                src="../images/icon-nav-transactions.svg"
                alt="icon-nav-transaction"
              />
              <p className="text-gray-600">Transactions</p>
            </li>
            <li
              className="px-6 py-2  flex justify-center items-center gap-1 font-public-sans-bold
             flex-col"
            >
              <img
                src="../images/icon-nav-budgets.svg"
                alt="icon-nav-budgets"
              />
              <p className="text-gray-600">Budgets</p>
            </li>
            <li
              className="px-6 py-2  flex justify-center items-center gap-1 font-public-sans-bold
             flex-col"
            >
              <img src="../images/icon-nav-pots.svg" alt="icon-nav-pots" />
              <p className="text-gray-600">Pots</p>
            </li>
            <li
              className="px-6 py-2 bg-white rounded-t-lg border-b-6  border-b-green-800  flex justify-center items-center gap-1 font-public-sans-bold
             flex-col"
            >
              <img
                src="../images/icon-nav-budgets.svg"
                alt="icon-nav-budgets-recurring-bills"
              />
              <p className="text-gray-600">Recurring Bills</p>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default RecurringBillsPage;
