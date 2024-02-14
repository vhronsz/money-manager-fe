'use client'
import axios from "axios";
const LoginPage = () => {
  const login = async (data) => {
    const username = data.get("username");
    const password = data.get("password");
    try {
      // const response = await fetch("http://localhost:5000/auth/login", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json;charset=UTF-8",
      //   },
      //   body: JSON.stringify({
      //     username: username,
      //     password: password,
      //   }),
      // });
      const axiosPost = await axios({
        method: "POST",
        url: "http://localhost:5000/auth/login",
        data: {
          username: username,
          password: password
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center">

      <div className="w-1/4 h-2/4 flex flex-col items-center bg-slate-200/20 border-2 border-gray-100 rounded-md">
        <div className="text-3xl pt-7 pb-7 w-full text-center">
          Login
        </div>

        <form action={(data) => { login(data) }}>
          <div className="">
            Username
            <input className="" type="text" name="username" />
          </div>
          <div className="">
            Password
            <input className="" type="password" name="password" />
          </div>
          <button type="submit">login</button>
        </form>
      </div>

    </main>
  );
}

export default LoginPage;