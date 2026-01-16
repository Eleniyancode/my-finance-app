function BudgetOptions({ setShowEditBudgetForm, setShowDeleteBudgetForm }) {
  return (
    <ul className="p-3 flex flex-col bg-white shadow-2xl absolute top-14 right-0 rounded-lg">
      <li className="p-2 border-b border-b-gray-300 cursor-pointer">
        <button
          onClick={() => setShowEditBudgetForm(true)}
          className="cursor-pointer"
        >
          Edit Budget
        </button>
      </li>
      <li className="p-2 border-b border-b-gray-300 text-red-600">
        <button
          onClick={() => setShowDeleteBudgetForm(true)}
          className="cursor-pointer"
        >
          Delete Budget
        </button>
      </li>
    </ul>
  );
}

export default BudgetOptions;
