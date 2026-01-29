function WithdrawFromPotForm({ setShowWithdrawFromPotForm }) {
  return (
    <section className="bg-white w-full max-w-md mx-3 p-6 rounded-lg">
      <div className="flex justify-between ">
        <h3 className="font-public-sans-bold text-lg">Add New Pot</h3>
        <button
          onClick={() => setShowWithdrawFromPotForm(false)}
          className="cursor-pointer"
        >
          <img src="../images/icon-close-modal.svg" alt="icon-close" />
        </button>
      </div>
      <form>
        <h3 className="font-public-sans text-gray-400 text-sm my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          aliquam placeat, excepturi a dolor vitae doloribus sint beatae
          expedita. Similique at blanditiis quaerat, nihil ipsum a enim ab
          expedita corporis.
        </h3>

        <div className="flex justify-between items-center gap-1 mb-4">
          <p className="font-public-sans font-bold text-gray-500">New Amount</p>
          <p className="text-4xl font-bold">$139.00</p>
        </div>

        <div className="my-4 bg-[rgb(248,244,240)] flex gap-1 rounded-lg w-full h-2">
          <div className="bg-black w-[2%] rounded-lg"></div>
          <div className="bg-red-700 w-[5%] rounded-lg"></div>
        </div>
        <div className="flex mb-5 justify-between font-public-sans ">
          <p className="text-red-900">5.95%</p>
          <p className="text-gray-400">Target of $2,000</p>
        </div>

        <div className="flex flex-col mb-6">
          <label className="font-public-sans text-gray-500">
            Amount to Withdraw
          </label>
          <input
            type="text"
            placeholder="$ 20"
            className="border p-2 rounded-lg border-gray-300"
          />
        </div>

        <div className="bg-black text-white cursor-pointer flex justify-center items-center p-3 rounded-lg">
          <button className="font-public-sans w-full cursor-pointer">
            Confirm Withdrawal
          </button>
        </div>
      </form>
    </section>
  );
}

export default WithdrawFromPotForm;
