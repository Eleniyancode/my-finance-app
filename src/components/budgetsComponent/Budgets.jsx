import Budget from "./budget";
import { NavLink } from "react-router-dom";

function Budgets({ budgets }) {
  return (
    <section className="bg-white py-6 px-5 mt-4 lg:mt-0">
      <div className="flex justify-between">
        <p className="font-public-sans-bold text-2xl">Budgets</p>

        <NavLink to="/budgets">
          <button className="text-gray-500 flex items-center justify-center gap-2 cursor-pointer hover:text-black">
            See Details
            <img src="../images/icon-caret-right.svg" alt="icon-caret-left" />
          </button>
        </NavLink>
      </div>

      <div className="lg:flex lg:gap-3">
        <div className="flex justify-center items-center mt-5">
          <img src="../images/budget-chart.svg" alt="budget-chart" />
        </div>
        <div className="mt-5 flex lg:flex-col flex-wrap gap-y-4">
          {budgets.map((budget, i) => (
            <Budget budget={budget} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Budgets;
