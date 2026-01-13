function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[rgb(248,244,240)]">
        <div className="w-full h-[10%] border border-black flex justify-center items-center bg-black text-white">
          <h1 className="font-public-sans-bold text-3xl py-2">Finance</h1>
        </div>

        <div className="w-full h-[90%] border flex justify-center items-center">
          <form className="px-5 py-6 bg-white font-public-sans rounded-2xl">
            <h2 className="font-bold text-3xl">Login</h2>

            <div className="my-8">
              <div className="flex flex-col gap-1 mb-5">
                <label className="">Email</label>
                <input
                  type="text"
                  className="border p-2 rounded-md border-[(rgb(248,244,240))]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="">Password</label>
                <input
                  type="text"
                  className="border p-2 rounded-md border-[(rgb(248,244,240))]"
                />
              </div>
            </div>

            <div className="flex justify-center items-center p-3 bg-black text-white rounded mb-8">
              <button>Login</button>
            </div>

            <p className="text-gray-500">
              Need to create an account?{" "}
              <button className="italic underline text-gray-900 font-bold">
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
