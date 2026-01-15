function PotsPage() {
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
            <li className="bg-white px-6 py-2 rounded-t-lg border-b-6  border-b-green-800">
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
            <h1 className="font-public-sans-bold text-3xl">Pots</h1>
            <button className="p-4 bg-black text-white rounded-lg font-public-sans font-bold">
              + Add New Pot
            </button>
          </header>

          <div className="lg:flex lg:gap-5 lg:items-start">
            <div className="lg:flex lg:flex-wrap lg:flex-3 lg:gap-5">
              <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg lg:w-[45%]">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-teal-800"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Savings
                    </h3>
                  </div>
                  <div>
                    <img
                      src="../images/icon-ellipsis.svg"
                      alt="icon-ellipsis"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-5">
                    <div className=" flex justify-center items-end py-2 mb-4">
                      <p className="font-public-sans flex-1 mb-4 text-gray-500">
                        Total Saved
                      </p>
                      <p className="text-3xl font-bold flex-1 text-right">
                        $159.00
                      </p>
                    </div>

                    <div className="mb-1 bg-[rgb(248,244,240)] rounded-md h-2">
                      <div className="bg-teal-800 w-[20%] h-full rounded-md"></div>
                    </div>
                    <div className="flex justify-between text-xs  text-shadow-gray-500">
                      <p>7.95%</p>
                      <p>Target of $2,000</p>
                    </div>

                    <div className="flex mt-8 gap-3">
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> + Add Money</button>
                      </div>
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> Withdraw</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg lg:w-[45%]">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-teal-800"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Savings
                    </h3>
                  </div>
                  <div>
                    <img
                      src="../images/icon-ellipsis.svg"
                      alt="icon-ellipsis"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-5">
                    <div className=" flex justify-center items-end py-2 mb-4">
                      <p className="font-public-sans flex-1 mb-4 text-gray-500">
                        Total Saved
                      </p>
                      <p className="text-3xl font-bold flex-1 text-right">
                        $159.00
                      </p>
                    </div>

                    <div className="mb-1 bg-[rgb(248,244,240)] rounded-md h-2">
                      <div className="bg-teal-800 w-[20%] h-full rounded-md"></div>
                    </div>
                    <div className="flex justify-between text-xs  text-shadow-gray-500">
                      <p>7.95%</p>
                      <p>Target of $2,000</p>
                    </div>

                    <div className="flex mt-8 gap-3">
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> + Add Money</button>
                      </div>
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> Withdraw</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg lg:w-[45%]">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-teal-800"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Savings
                    </h3>
                  </div>
                  <div>
                    <img
                      src="../images/icon-ellipsis.svg"
                      alt="icon-ellipsis"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-5">
                    <div className=" flex justify-center items-end py-2 mb-4">
                      <p className="font-public-sans flex-1 mb-4 text-gray-500">
                        Total Saved
                      </p>
                      <p className="text-3xl font-bold flex-1 text-right">
                        $159.00
                      </p>
                    </div>

                    <div className="mb-1 bg-[rgb(248,244,240)] rounded-md h-2">
                      <div className="bg-teal-800 w-[20%] h-full rounded-md"></div>
                    </div>
                    <div className="flex justify-between text-xs  text-shadow-gray-500">
                      <p>7.95%</p>
                      <p>Target of $2,000</p>
                    </div>

                    <div className="flex mt-8 gap-3">
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> + Add Money</button>
                      </div>
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> Withdraw</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg lg:w-[45%]">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-teal-800"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Savings
                    </h3>
                  </div>
                  <div>
                    <img
                      src="../images/icon-ellipsis.svg"
                      alt="icon-ellipsis"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-5">
                    <div className=" flex justify-center items-end py-2 mb-4">
                      <p className="font-public-sans flex-1 mb-4 text-gray-500">
                        Total Saved
                      </p>
                      <p className="text-3xl font-bold flex-1 text-right">
                        $159.00
                      </p>
                    </div>

                    <div className="mb-1 bg-[rgb(248,244,240)] rounded-md h-2">
                      <div className="bg-teal-800 w-[20%] h-full rounded-md"></div>
                    </div>
                    <div className="flex justify-between text-xs  text-shadow-gray-500">
                      <p>7.95%</p>
                      <p>Target of $2,000</p>
                    </div>

                    <div className="flex mt-8 gap-3">
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> + Add Money</button>
                      </div>
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> Withdraw</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg lg:w-[45%]">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-teal-800"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Savings
                    </h3>
                  </div>
                  <div>
                    <img
                      src="../images/icon-ellipsis.svg"
                      alt="icon-ellipsis"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-5">
                    <div className=" flex justify-center items-end py-2 mb-4">
                      <p className="font-public-sans flex-1 mb-4 text-gray-500">
                        Total Saved
                      </p>
                      <p className="text-3xl font-bold flex-1 text-right">
                        $159.00
                      </p>
                    </div>

                    <div className="mb-1 bg-[rgb(248,244,240)] rounded-md h-2">
                      <div className="bg-teal-800 w-[20%] h-full rounded-md"></div>
                    </div>
                    <div className="flex justify-between text-xs  text-shadow-gray-500">
                      <p>7.95%</p>
                      <p>Target of $2,000</p>
                    </div>

                    <div className="flex mt-8 gap-3">
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> + Add Money</button>
                      </div>
                      <div className=" gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button className="font-bold"> Withdraw</button>
                      </div>
                    </div>
                  </div>
                </div>
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
              className="bg-white px-6 py-2 rounded-t-lg border-b-6  border-b-green-800 flex justify-center items-center gap-1 font-public-sans-bold
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
              className="px-6 py-2  flex justify-center items-center gap-1 font-public-sans-bold
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

export default PotsPage;
