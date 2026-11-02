import React, { useState } from "react";
import UserAccount from "./UserAccount";

function SearchBar() {
  const [username, setUsername] = useState("");
  const [searched, setSearched] = useState("");
  const [userfound, setUserfound] = useState(null);
  const [userData,setUserData] = useState({})
  let recentUser = []

    const api = async (username) => {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();

    if(data.message === "Not Found"){
      setUserfound(false)
    }else{
      setUserfound(true)

      if(localStorage.getItem("recent") == null){
        recentUser.unshift(username)
        localStorage.setItem("recent",JSON.stringify(recentUser))
      }else{
        recentUser = JSON.parse(localStorage.getItem("recent"))
        recentUser = recentUser.filter((user) => user !== username)
        if(recentUser.length >= 5){
          recentUser.pop()
        }
        recentUser.unshift(username)
        localStorage.setItem("recent",JSON.stringify(recentUser))
      }
    }

    setSearched(username)

    setUserData(data)
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2">
        <label className="flex border border-1 border-gray-400 py-3 w-full sm:flex-1 rounded-xl bg-slate-800 focus-within:border-sky-600">
          <span className="text-gray-400 ps-3 sm:ps-4 text-sm sm:text-base self-center">github.com/</span>
        
          <input
            type="text"
            value={username}
            placeholder="username"
            className="text-white outline-none flex-1 min-w-0 pe-3 bg-slate-800 ps-2 placeholder:text-gray-500"
            onChange={(event) => {
              setUsername(event.target.value)
            }}
            onKeyDown={(event)=>{
            if(event.key === "Enter"){
              api(username);
            }
          }}
          />
        </label>

        <button
          className="text-nowrap w-full sm:w-auto py-3 sm:py-4 px-5 bg-sky-600 font-semibold rounded-xl active:bg-sky-700"
          onClick={() => {
            api(username);
          }}
        >
          Find profile
        </button>
      </div>

      <div className="mt-4">       

        <ul className="ms-2 flex flex-wrap gap-2">
          <span className="text-gray-400">Recent:</span>
          {(JSON.parse(localStorage.getItem("recent")) || []).map((user,index)=>(
            <li key={index} onClick={() => {
                setUsername(user)
                api(user)
              }}
              className="text-sm bg-slate-800 text-white border border-1 border-gray-400 hover:border-sky-600 cursor-pointer py-1 px-2 rounded-full">
              {user}
            </li>
          ))}
          
        </ul>
      </div>

      <UserAccount userfound={userfound} username={searched} userData={userData}/>
    </>
  );
}

export default SearchBar;
