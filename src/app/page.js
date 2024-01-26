const LoginPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center">

      <div className="w-1/4 h-2/4 flex flex-col items-center bg-slate-200/20 border-2 border-gray-100 rounded-md">
        <div className="text-3xl pt-7 pb-7 w-full text-center">
          Login
        </div>

        <div className="">
          Username
          <input type="text"/>
        </div>
        <div className="">
          Password
        </div>

      </div>
 
    </main>
  );
}

export default LoginPage;