function PotOptions({ setShowEditPotForm, setShowDeletePotForm }) {
  return (
    <ul className="p-3 flex flex-col bg-white shadow-2xl absolute top-14 right-0 rounded-lg">
      <li className="p-2 border-b border-b-gray-300 cursor-pointer">
        <button
          onClick={() => setShowEditPotForm(true)}
          className="cursor-pointer"
        >
          Edit Pot
        </button>
      </li>
      <li className="p-2 border-b border-b-gray-300 text-red-600">
        <button
          onClick={() => setShowDeletePotForm(true)}
          className="cursor-pointer"
        >
          Delete Pot
        </button>
      </li>
    </ul>
  );
}

export default PotOptions;
