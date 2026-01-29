import { formatCurrency } from "../../utils/formatCurrency";
import { NavLink } from "react-router-dom";
import Pot from "./Pot";

function Pots({ pots }) {
  const totalSaved = pots.reduce((acc, curr) => acc + curr.total, 0);
  return (
    <section className="py-6 px-5 bg-white">
      <div className="mb-5   flex justify-between items-center bg-white">
        <p className="font-bold text-2xl">Pots</p>
        <NavLink to="/pots">
          <button className="text-gray-500 cursor-pointer hover:text-black flex items-center justify-center gap-2">
            See Details
            <img src="../images/icon-caret-right.svg" alt="icon-caret-left" />
          </button>
        </NavLink>
      </div>
      <div className="lg:flex lg:gap-2">
        <div className="p-4 lg:flex-1 flex item-center lg:flex-col bg-[rgb(248,244,240)] rounded-2xl gap-5">
          <img
            src="../images/icon-pot.svg"
            alt="icon-pot"
            className="lg:size-20"
          />
          <div className="flex flex-col gap-2">
            <p className="text-gray-500">Total Saved</p>
            <p className="font-public-sans-bold text-3xl">
              {formatCurrency(totalSaved)}
            </p>
          </div>
        </div>

        <div className="mt-5 lg:flex-2 flex flex-wrap gap-y-4">
          {pots.map((pot, i) => (
            <Pot pot={pot} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pots;
