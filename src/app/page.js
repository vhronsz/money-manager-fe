'use client'
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <form onSubmit={(e)=>{e.preventDefault();}} className="w-1/4 h-2/4 flex flex-col items-center bg-slate-200/20 border-2 border-gray-100 rounded-md">
        <div className="text-3xl pt-7 pb-7 w-full text-center">
          Login
        </div>

        <div className="">
          Username
          <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div className="">
          Password
          <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button type="submit">Submit</button>
      </form>
 
    </main>
  );
}

export default LoginPage;