function AddNewBudgetForm({ setShowNewBudgetForm }) {
  return (
    <div className="bg-white w-full max-w-md mx-3 p-6 rounded-lg">
      <div className="flex justify-between ">
        <h3 className="font-public-sans-bold text-lg">Add New Budget</h3>
        <button
          onClick={() => setShowNewBudgetForm(false)}
          className="cursor-pointer"
        >
          <img src="../images/icon-close-modal.svg" alt="icon-close" />
        </button>
      </div>
      <form>
        <h3 className="font-public-sans text-gray-400 text-sm my-4">
          Choose a category to set a spending budget. These categories can help
          you monitor spending
        </h3>

        <div className="flex flex-col gap-1 mb-4">
          <label className="font-public-sans font-bold text-gray-500">
            Budget Category
          </label>
          <select className="border p-2 rounded-lg border-gray-300">
            <option>Bills</option>
            <option>Groceries</option>
            <option>Dining Out</option>
            <option>Transportation</option>
            <option>Personal Care</option>
            <option>Education</option>
          </select>
        </div>

        <div className="mb-3 flex flex-col">
          <label className="font-public-sans text-gray-500">
            Maximum Spend
          </label>
          <input
            type="text"
            placeholder="e.g. 2000"
            className="border p-2 rounded-lg border-gray-300"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="font-public-sans text-gray-500">Theme</label>
          <select className="p-2 border rounded-lg border-gray-300">
            <option>Green</option>
            <option>Yellow</option>
            <option>Cyan</option>
            <option>Navy</option>
            <option>Red</option>
            <option>Purple</option>
            <option>Blue</option>
            <option>Indigo</option>
          </select>
        </div>

        <div className="bg-black text-white cursor-pointer flex justify-center items-center p-3 rounded-lg">
          <button className="font-public-sans w-full cursor-pointer">
            Add Budget
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBudgetForm;
