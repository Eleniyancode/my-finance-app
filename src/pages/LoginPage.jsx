import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/overview");
  }
  return (
    <>
      <div className="w-screen h-screen bg-[rgb(248,244,240)] lg:flex lg:p-3 ">
        <div className="w-full lg:w-[40%] h-[10%] lg:h-full border  flex justify-center lg:justify-between items-center lg:flex-col lg:items-start lg:px-6 lg:py-8 bg-black text-white lg:bg-[url('../images/illustration-authentication.svg')] bg-cover bg-center bg-no-repeat lg:rounded-md">
          <img src="../images/logo-large.svg" alt="logo-image" />
          <div className="hidden lg:block">
            <h3 className="font-bold text-4xl mb-6 font-public-sans-bold">
              Keep track of your money and save for your future
            </h3>
            <p className="font-public-sans">
              Personal finance app puts you in control of your spending, Track
              transactions, set budgets and add to savings pots easily
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[60%] h-[90%] lg:h-full flex justify-center items-center">
          <form className="px-5 py-6 bg-white font-public-sans rounded-2xl md:w-[70%]">
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
              <button onClick={(e) => handleSubmit(e)}>Login</button>
            </div>

            <p className="text-gray-500 text-center">
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

export default LoginPage;
