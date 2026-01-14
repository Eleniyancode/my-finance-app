function App() {
  return (
    <>
      <div className="py-6 px-4 bg-[rgb(248,244,240)]">
        <h1 className="font-public-sans-bold text-3xl">Transactions</h1>

        <main className="mt-8 py-6 px-4 bg-white">
          <section className="flex justify-around items-center gap-8">
            <div className="flex py-3 px-4 border-2 rounded-2xl border-gray-500">
              <input
                type="text"
                className="hover:outline-0 active:outline-0 focus:outline-0"
                placeholder="Search transactions"
              />
              <img src="../images/icon-search.svg" alt="icon-search" />
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
