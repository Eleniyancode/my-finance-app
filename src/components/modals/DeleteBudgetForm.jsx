function DeleteBudgetForm({ setShowDeleteBudgetForm }) {
  return (
    <div className="bg-white w-full max-w-md mx-3 p-6 rounded-lg">
      <div className="flex justify-between ">
        <h3 className="font-public-sans-bold text-lg">Add New Budget</h3>
        <button
          onClick={() => setShowDeleteBudgetForm(false)}
          className="cursor-pointer"
        >
          <img src="../images/icon-close-modal.svg" alt="icon-close" />
        </button>
      </div>
      <form>
        <h3 className="font-public-sans text-gray-400 text-sm my-4">
          Are you sure you want to delete this budget? This action cannot be
          reversed, and all the data inside it will be removed forever
        </h3>

        <div className="bg-red-800 text-white cursor-pointer flex justify-center items-center p-3 rounded-lg">
          <button className="font-public-sans w-full cursor-pointer">
            Yes, Confirm Deletion
          </button>
        </div>

        <div className=" text-gray-300 cursor-pointer flex justify-center items-center p-3 rounded-lg">
          <button
            className="font-public-sans w-full cursor-pointer"
            onClick={() => setShowDeleteBudgetForm(false)}
          >
            No, Go Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteBudgetForm;
