function SortTransactionCategories() {
  return (
    <div>
      <ul className="flex flex-col gap-3 bg-white absolute top-10 p-3  right-0 rouded-lg shadow-2xl">
        <li className="border-b p-2 border-b-gray-200">Entertainment</li>
        <li className="border-b p-2 border-b-gray-200">Bills</li>
        <li className="border-b p-2 border-b-gray-200">Groceries</li>
        <li className="border-b p-2 border-b-gray-200">Dining Out</li>
        <li className="border-b p-2 border-b-gray-200">transportaton</li>
        <li className="border-b p-2 border-b-gray-200">Personal Care</li>
      </ul>
    </div>
  );
}

export default SortTransactionCategories;
