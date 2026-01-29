import { useState } from "react";
import PotOptions from "../components/dropdowns/PotOptions";
import AddNewPotForm from "../components/modals/AddNewPotForm";
import EditPotForm from "../components/modals/EditPotForm";
import DeletePotForm from "../components/modals/DeletePot";
import WithdrawFromPotForm from "../components/modals/WithdrawFromPotForm";
import SaveToPotForm from "../components/modals/SaveToPotForm";
import Navs from "../components/navs";

function PotsPage() {
  const [showNewPotForm, setShowNewPotForm] = useState(false);
  const [showPotOption, setShowPotOption] = useState(false);
  const [showEditPotForm, setShowEditPotForm] = useState(false);
  const [showDeletePotForm, setShowDeletePotForm] = useState(false);
  const [showWithdrawFromPotForm, setShowWithdrawFromPotForm] = useState(false);
  const [showSaveToPotForm, setShowSaveToPotForm] = useState(false);

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
      <div className="lg:grid lg:grid-cols-5 w-screen">
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
        </aside> */}
        <main className="lg:col-start-2 lg:col-end-6 flex-4/5 px-5 py-6 bg-[rgb(248,244,240)]">
          <header className="flex justify-between items-center">
            <h1 className="font-public-sans-bold text-3xl">Pots</h1>
            <button
              onClick={() => setShowNewPotForm(true)}
              className="p-4 bg-black text-white rounded-lg font-public-sans font-bold"
            >
              + Add New Pot
            </button>
          </header>

          <div className="lg:flex lg:gap-5 lg:items-start">
            <div className="lg:flex lg:flex-wrap lg:flex-3 lg:gap-5">
              <section className="mt-8 pt-8 pb-3 px-4 bg-white rounded-lg lg:w-[45%] relative">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-teal-800"></span>
                    <h3 className="font-public-sans text-lg font-bold">
                      Savings
                    </h3>
                  </div>
                  <div>
                    <button
                      className="w-full cursor-pointer"
                      onClick={() => setShowPotOption((clicked) => !clicked)}
                    >
                      <img
                        src="../images/icon-ellipsis.svg"
                        alt="icon-ellipsis"
                      />
                    </button>
                    {showPotOption && (
                      <PotOptions
                        setShowEditPotForm={setShowEditPotForm}
                        setShowDeletePotForm={setShowDeletePotForm}
                      />
                    )}
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
                      <div className=" cursor-pointer gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button
                          className="cursor-pointer font-bold"
                          onClick={() => setShowSaveToPotForm(true)}
                        >
                          + Add Money
                        </button>
                      </div>
                      <div className=" cursor-pointer gap-2 flex-1 flex flex-col p-3 bg-[rgb(248,244,240)] ">
                        <button
                          className="font-bold cursor-pointer"
                          onClick={() => setShowWithdrawFromPotForm(true)}
                        >
                          Withdraw
                        </button>
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
      {showNewPotForm && (
        <div
          id="overlay"
          className="fixed top-0 h-full w-full bg-black/60 flex items-center justify-center z-50"
        >
          <AddNewPotForm setShowNewPotForm={setShowNewPotForm} />
        </div>
      )}
      {showEditPotForm && (
        <div
          id="overlay"
          className="fixed top-0 h-full w-full bg-black/60 flex items-center justify-center z-50"
        >
          <EditPotForm setShowEditPotForm={setShowEditPotForm} />
        </div>
      )}
      {showDeletePotForm && (
        <div
          id="overlay"
          className="fixed top-0 h-full w-full bg-black/60 flex items-center justify-center z-50"
        >
          <DeletePotForm setShowDeletePotForm={setShowDeletePotForm} />
        </div>
      )}
      {showSaveToPotForm && (
        <div
          id="overlay"
          className="fixed top-0 h-full w-full bg-black/60 flex items-center justify-center z-50"
        >
          <SaveToPotForm setShowSaveToPotForm={setShowSaveToPotForm} />
        </div>
      )}
      {showWithdrawFromPotForm && (
        <div
          id="overlay"
          className="fixed top-0 h-full w-full bg-black/60 flex items-center justify-center z-50"
        >
          <WithdrawFromPotForm
            setShowWithdrawFromPotForm={setShowWithdrawFromPotForm}
          />
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

export default PotsPage;
