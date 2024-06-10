'use client'
import axios from "axios";
import style from "./login.module.css";
import Master from "./Master";
import {useRouter} from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const login = async (data) => {
    const URL = `${process.env.NEXT_PUBLIC_SERVICE_URL}/auth/login`;
    const username = data.get("username");
    const password = data.get("password")

    try {
      const response = await axios({
        method: "POST",
        url: URL,
        data: {
          username: username,
          password: password
        },
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      router.push("/homepage");
    } catch (e) {
      const errorMessage = e.response.data ? e.response.data.message : e;
      console.log(errorMessage);
      alert(errorMessage);
    }
  }

  return (
      <main className="flex h-screen flex-col items-center justify-center">
        <div className={style.loginBox}>
          <div className="text-3xl pt-7 pb-7 w-full text-center">
            Login
          </div>

          <form className="w-full h-full" action={(data) => { login(data) }}>
            <div className={style.inputContainer}>
              <input className={style.input} type="text" name="username" placeholder="Username" />
            </div>

            <div className={style.inputContainer}>
              <input className={style.input} type="password" name="password" placeholder="Password" />
            </div>

            <div className={style.buttonContainer}>
              <button type="submit" className={style.button}>Login</button>
            </div>
          </form>
        </div>
      </main>
  );
}

export default LoginPage;