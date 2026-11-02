import React, { useEffect, useState } from "react";
import ReposList from "./ReposList";

function Profile({ userData }) {

  const joinedDate = new Date(userData.created_at);
  const month = joinedDate.toLocaleString("en-US", { month: "short" });
  const year = joinedDate.getFullYear();

  const [stars, setStars] = useState(0);
  const [repos,setRepos] = useState([])

  useEffect(() => {
    const total_stars = async () => {
      let response = await fetch(userData.repos_url);
      let data = await response.json();
      setRepos(data)
      let total = data.reduce((sum, repo_star) => {
        return sum + repo_star.stargazers_count;
      }, 0);
      setStars(total);
    };
    total_stars();
  }, [userData.repos_url]);

  return (
    <>
      <div className="border border-1 border-gray-400 p-4 sm:p-8 w-full rounded-xl bg-slate-800 text-white mt-8 mb-10">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <img src={userData.avatar_url} className="rounded-full h-24 w-24 sm:h-36 sm:w-36 shrink-0" />

          <div className="mt-4 sm:mt-0 sm:ms-8 min-w-0">
            <h1 className="text-2xl sm:text-3xl break-words font-bold">
              {userData.name == null ? userData.login : userData.name}
            </h1>

            <a href={userData.html_url} target="_blank">
              <h2 className="text-base font-semibold text-gray-400 hover:text-sky-600 cursor-pointer">
                @{userData.login}
              </h2>
            </a>

            <p className="text-gray-400 text-base font-semibold mt-2 sm:mt-4">
              Joined {month} {year}
            </p>
          </div>
        </div>

        <div className="mt-7 border border-1 border-gray-600 rounded-xl grid grid-cols-2 md:grid-cols-4 text-2xl sm:text-3xl overflow-hidden font-bold">
          
          <div className="p-3 sm:p-4 border-e border-b md:border-b-0 border-e-1 border-gray-600">
            {userData.public_repos}
            <span className="block text-gray-400 text-sm sm:text-base font-medium">
              Repositories
            </span>
          </div>

          <div className="p-3 sm:p-4 md:border-e border-b md:border-b-0 border-e-1 border-gray-600 text-yellow-400">
            {stars}
            <span className="block text-gray-400 text-sm sm:text-base font-medium">
              Total stars
            </span>
          </div>

          <div className="p-3 sm:p-4 border-e border-e-1 border-gray-600">
            {userData.followers}
            <span className="block text-gray-400 text-sm sm:text-base font-medium">
              Followers
            </span>
          </div>

          <div className="p-3 sm:p-4">
            {userData.following}
            <span className="block text-gray-400 text-sm sm:text-base font-medium">
              Following
            </span>
          </div>
        </div>
      </div>

      <ReposList reposData={repos}/>
    </>
  );
}

export default Profile;
