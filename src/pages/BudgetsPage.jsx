import { useState } from "react";
import BudgetOptions from "../components/dropdowns/BudgetOptions";
import AddNewBudgetForm from "../components/modals/AddNewBudgetForm";
import EditBudgetForm from "../components/modals/EditBudgetForm";
import DeleteBudgetForm from "../components/modals/DeleteBudgetForm";
import Navs from "../components/navs";
function BudgetsPage() {
  const [showNewBudgetForm, setShowNewBudgetForm] = useState(false);
  const [showBudgetOption, setShowBudgetOption] = useState(false);
  const [showEditBudgetForm, setShowEditBudgetForm] = useState(false);
  const [showDeleteBudgetForm, setShowDeleteBudgetForm] = useState(false);

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
            <li className="bg-white px-6 py-2 rounded-t-lg border-b-6  border-b-green-800">
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
      </header>
      <div className=" lg:grid lg:grid-cols-5 w-screen">
        <Navs />
        {/* <aside className="hidden lg:block flex-1/5 h-full bg-black rounded-r-lg border-4  py-8">
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
              <li className="px-8 py-4 bg-[rgb(248,244,240)] border-l-6  border-l-green-800  rounded-r-lg flex gap-4">
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
              <li className="px-8 py-4 rounded-r-lg  flex gap-4">
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
        </aside> */}
        <main className="lg:col-start-2 lg:col-end-6 flex-4/5 px-5 py-6 bg-[rgb(248,244,240)]">
          <header className="flex justify-between items-center">
            <h1 className="font-public-sans-bold text-3xl">Budgets</h1>
            <button
              onClick={() => setShowNewBudgetForm(true)}
              className="p-4 bg-black text-white rounded-lg font-public-sans font-bold cursor-pointer"
            >
              + Add New Budget
            </button>
          </header>

          <div className="lg:flex lg:gap-5 lg:items-start">
            <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg md:flex lg:block lg:flex-2  ">
              <div className="flex justify-center items-center mt-5 md:flex-1">
                <img src="../images/budget-chart.svg" alt="budget-chart" />
              </div>

              <div className="mt-8 md:mt-0 md:flex-1 p-4">
                <h3 className="font-public-sans-bold text-lg mb-3 md:text-2xl">
                  Spending Summary
                </h3>
                <ul className="flex flex-col gap-5 md:text-[18px]">
                  <li className="flex p-2 font-public-sans border-b border-b-gray-100">
                    <p className="flex-1 flex items-center border-l-4 px-4 text-gray-500 border-l-blue-300">
                      Bills
                    </p>
                    <p className="flex-2 flex justify-end gap-2 items-center">
                      <span className="font-public-sans-bold text-md">
                        $250.00
                      </span>{" "}
                      <span className="text-gray-500 text-sm">of $750.00</span>
                    </p>
                  </li>
                  <li className="flex p-2 font-public-sans border-b border-b-gray-200">
                    <p className="flex-1 flex items-center border-l-4 px-4 text-gray-500 border-l-yellow-200">
                      Dining Out
                    </p>
                    <p className="flex-2 flex justify-end gap-2 items-center">
                      <span className="font-public-sans-bold text-md">
                        $67.00
                      </span>{" "}
                      <span className="text-gray-500 text-sm">of $75.00</span>
                    </p>
                  </li>
                  <li className="flex p-2 font-public-sans border-b border-b-gray-200">
                    <p className="flex-1 flex items-center border-l-4 px-4 text-gray-500 border-l-purple-600">
                      Personal Care
                    </p>
                    <p className="flex-1 flex justify-end gap-2 items-center">
                      <span className="font-public-sans-bold text-md">
                        $65.00
                      </span>{" "}
                      <span className="text-gray-500 text-sm">of $100.00</span>
                    </p>
                  </li>
                  <li className="flex p-2 font-public-sans border-b border-b-gray-100">
                    <p className="flex-1 flex items-center border-l-4 px-4 text-gray-500 border-l-green-600">
                      Entertaiment
                    </p>
                    <p className="flex-2 flex justify-end gap-2 items-center">
                      <span className="font-public-sans-bold text-md">
                        $25.00
                      </span>{" "}
                      <span className="text-gray-500 text-sm">of $30.00</span>
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <div className="lg:flex lg:flex-col lg:flex-3">
              <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg relative">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-teal-800"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Entertainment
                    </h3>
                  </div>
                  <div
                    onClick={() => setShowBudgetOption((clicked) => !clicked)}
                    className="cursor-pointer"
                  >
                    <img
                      src="../images/icon-ellipsis.svg"
                      alt="icon-ellipsis"
                      className="size-6 "
                    />

                    {showBudgetOption && (
                      <BudgetOptions
                        setShowEditBudgetForm={setShowEditBudgetForm}
                        setShowDeleteBudgetForm={setShowDeleteBudgetForm}
                      />
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-5">
                    <p className="font-public-sans mb-4 text-gray-500">
                      Maximum of $50.00
                    </p>

                    <div className="mb-5 bg-[rgb(248,244,240)] rounded-md h-7">
                      <div className="bg-teal-800 w-[60%] h-full rounded-md"></div>
                    </div>

                    <div className="flex">
                      <div className=" gap-2 flex-1 flex flex-col pl-4 border-l-4 border-l-teal-800">
                        <p className="text-gray-400 font-public-sans">Spent</p>
                        <p className="text-md font-bold">$25.00</p>
                      </div>
                      <div className="gap-2 flex-1 flex flex-col pl-4 border-l-4 border-l-[rgb(248,244,240)]">
                        <p className="text-gray-400 font-public-sans">Free</p>
                        <p className="text-md font-bold">$50.00</p>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-8 mx-1 px-4 py-4 bg-[rgb(248,244,240)] rounded-md flex flex-col gap-4">
                    <div className="flex justify-between">
                      <p className="font-public-sans-bold text-md">
                        Latest Spending
                      </p>
                      <button className="text-gray-500 flex items-center justify-center gap-2">
                        See All
                        <img
                          src="../images/icon-caret-right.svg"
                          alt="icon-caret-left"
                        />
                      </button>
                    </div>
                    <li className="flex justify-between items-center text-[14px] border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold ">Papa Software</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold">
                          +$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center text-[14px] border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">Quebec Services</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold">
                          -$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center border-b text-[14px] border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">
                          Romoe Cloud Service
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold">
                          -$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mt-8 mx-1 px-4 py-4 bg-white rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-blue-400"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Bills
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
                    <p className="font-public-sans mb-4 text-gray-500">
                      Maximum of $750.00
                    </p>

                    <div className="mb-5 bg-[rgb(248,244,240)] rounded-md h-7">
                      <div className="bg-blue-400 w-[60%] h-full rounded-md"></div>
                    </div>

                    <div className="flex">
                      <div className=" gap-2 flex-1 flex flex-col pl-4 border-l-4 border-l-blue-400">
                        <p className="text-gray-400 font-public-sans">Spent</p>
                        <p className="text-md font-bold">$250.00</p>
                      </div>
                      <div className="gap-2 flex-1 flex flex-col pl-4 border-l-4 border-l-[rgb(248,244,240)]">
                        <p className="text-gray-400 font-public-sans">Free</p>
                        <p className="text-md font-bold">$750.00</p>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-8 mx-1 px-2 py-4 bg-[rgb(248,244,240)] rounded-md flex flex-col gap-4">
                    <div className="flex justify-between">
                      <p className="font-public-sans-bold text-md">
                        Latest Spending
                      </p>
                      <button className="text-gray-500 flex items-center justify-center gap-2">
                        See All
                        <img
                          src="../images/icon-caret-right.svg"
                          alt="icon-caret-left"
                        />
                      </button>
                    </div>
                    <li className="flex justify-between text-[14px] items-center border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">
                          Charlie Electric Company
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold ">
                          +$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                    <li className="flex justify-between text-[14px] items-center border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">
                          Foxtrot Waterline
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold">
                          -$100.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                    <li className="flex justify-between text-[14px] items-center border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">
                          Tango Gas Company
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold">
                          -$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-orange-200"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Dining Out
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
                    <p className="font-public-sans mb-4 text-gray-500">
                      Maximum of $50.00
                    </p>

                    <div className="mb-5 bg-[rgb(248,244,240)] rounded-md h-7">
                      <div className="bg-orange-200 w-[60%] h-full rounded-md"></div>
                    </div>

                    <div className="flex">
                      <div className=" gap-2 flex-1 flex flex-col pl-4 border-l-4 border-l-orange-200">
                        <p className="text-gray-400 font-public-sans">Spent</p>
                        <p className="text-md font-bold">$25.00</p>
                      </div>
                      <div className="gap-2 flex-1 flex flex-col pl-4 border-l-4 border-l-[rgb(248,244,240)]">
                        <p className="text-gray-400 font-public-sans">Free</p>
                        <p className="text-md font-bold">$50.00</p>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-8 mx-1 px-2 py-4 bg-[rgb(248,244,240)] rounded-md flex flex-col gap-4">
                    <div className="flex justify-between">
                      <p className="font-public-sans-bold text-md">
                        Latest Spending
                      </p>
                      <button className="text-gray-500 flex items-center justify-center gap-2">
                        See All
                        <img
                          src="../images/icon-caret-right.svg"
                          alt="icon-caret-left"
                        />
                      </button>
                    </div>
                    <li className="flex text-[14px] justify-between items-center border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">Papa Software</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold ">
                          +$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                    <li className="flex justify-between text-[14px] items-center border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">Quebec Services</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold">
                          -$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center text-[14px] border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">
                          Romoe Cloud Service
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold">
                          -$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-blue-950"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Personal Care
                    </h3>
                  </div>
                  <div>
                    <img src="../images/icon-ellipsis.svg" alt="" />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-5">
                    <p className="font-public-sans mb-4 text-gray-500">
                      Maximum of $50.00
                    </p>

                    <div className="mb-5 bg-[rgb(248,244,240)] rounded-md h-7">
                      <div className="bg-blue-950 w-[60%] h-full rounded-md"></div>
                    </div>

                    <div className="flex">
                      <div className=" gap-2 flex-1 flex flex-col pl-4 border-l-4 border-l-blue-950">
                        <p className="text-gray-400 font-public-sans">Spent</p>
                        <p className="text-md font-bold">$25.00</p>
                      </div>
                      <div className="gap-2 flex-1 flex flex-col pl-4 border-l-4 border-l-[rgb(248,244,240)]">
                        <p className="text-gray-400 font-public-sans">Free</p>
                        <p className="text-md font-bold">$50.00</p>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-8 mx-2 px-2 py-4 bg-[rgb(248,244,240)] rounded-md flex flex-col gap-4">
                    <div className="flex justify-between">
                      <p className="font-public-sans-bold text-md">
                        Latest Spending
                      </p>
                      <button className="text-gray-500 flex items-center justify-center gap-2">
                        See All
                        <img
                          src="../images/icon-caret-right.svg"
                          alt="icon-caret-left"
                        />
                      </button>
                    </div>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">Papa Software</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold ">
                          +$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">Quebec Services</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold">
                          -$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <div className="flex justify-center items-center gap-3">
                        <p className="font-public-sans-bold">
                          Romoe Cloud Service
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-right font-public-sans-bold">
                          -$75.50
                        </p>
                        <p className="text-right text-gray-500">19 Aug 2024</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      {showNewBudgetForm && (
        <div
          id="overlay"
          className="fixed top-0 h-full w-full bg-black/60 flex items-center justify-center z-50"
        >
          <AddNewBudgetForm setShowNewBudgetForm={setShowNewBudgetForm} />
        </div>
      )}

      {showEditBudgetForm && (
        <div
          id="overlay"
          className="fixed top-0 h-full w-full bg-black/60 flex items-center justify-center z-50"
        >
          <EditBudgetForm setShowEditBudgetForm={setShowEditBudgetForm} />
        </div>
      )}
      {showDeleteBudgetForm && (
        <div
          id="overlay"
          className="fixed top-0 h-full w-full bg-black/60 flex items-center justify-center z-50"
        >
          <DeleteBudgetForm setShowDeleteBudgetForm={setShowDeleteBudgetForm} />
        </div>
      )}

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

export default BudgetsPage;
