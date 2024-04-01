'use client'
import axios from "axios";
import style from "../Login.module.css";

const LoginPage = () => {
  const login = async (data) => {
    const username = data.get("username");
    const password = data.get("password");
    try {
      const response = await axios({
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
      <div className={style.loginBox}>
        <div className="text-3xl pt-7 pb-7 w-full text-center">
          Login
        </div>

        <form className="" action={(data) => { login(data) }}>
          <div className="ml-2.5 mr-2.5 h-8 border">
            <input className="h-full w-full" type="text" name="username" placeholder="Username" />
          </div>

          <div className="ml-2.5 mr-2.5 h-8 border">
            <input className="h-full w-full" type="password" name="password" placeholder="Password" />
          </div>

          <button type="submit" className="">Login</button>
        </form>
      </div>

    </main>
  );
}

export default LoginPage;