function SortTransactionDates() {
  return (
    <div>
      <ul className="flex flex-col gap-3 bg-white absolute top-10 p-3  right-0 rouded-lg shadow-2xl">
        <li className="border-b p-2 border-b-gray-200">Latest</li>
        <li className="border-b p-2 border-b-gray-200">A to Z</li>
        <li className="border-b p-2 border-b-gray-200">Oldest</li>
        <li className="border-b p-2 border-b-gray-200">Z to A</li>
        <li className="border-b p-2 border-b-gray-200">Highest</li>
        <li className="border-b p-2 border-b-gray-200">Lowest</li>
      </ul>
    </div>
  );
}

export default SortTransactionDates;
