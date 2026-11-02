import React, { useState } from "react";
import RepoCard from "./RepoCard";

function ReposList({ reposData }) {
  const [sorted, setSorted] = useState("stars");
  const [search, setSearch] = useState("");

  const sortData = (data, option) => {
    let copy = [...data];
    if (option === "stars") {
      copy.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (option == "updates") {
      copy.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    } else if (option == "names") {
      copy.sort((a, b) => a.name.localeCompare(b.name));
    }
    return copy;
  };


  const filteredRepos = reposData.filter((repo) => {
    const text = search.toLowerCase();
    return (
      repo.name.toLowerCase().includes(text) ||
      (repo.language && repo.language.toLowerCase().includes(text)) ||
      repo.topics.some((topic) => topic.toLowerCase().includes(text))
    );
  });


  const sortRepos = sortData(filteredRepos, sorted);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
        <div className="space-x-1">
          <h1 className="text-white text-xl sm:text-2xl font-bold inline">Repositories</h1>
          <span className="text-gray-500 text-xl sm:text-2xl font-semibold">
            ({search ? sortRepos.length + " matching" : reposData.length})
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Filter by name, topic or language"
            className="bg-slate-800 placeholder:text-gray-500 rounded-xl py-2 px-3 text-white border border-1 border-gray-400 w-full sm:flex-1 lg:w-72"
          />

          <select
            className="rounded-xl py-2 px-3 text-white bg-slate-800 outline-none focus:border-sky-600 border border-1 border-gray-400 w-full sm:w-auto"
            value={sorted}
            onChange={(event) => {
              setSorted(event.target.value);
            }}
          >
            <option value="stars">Most stars</option>
            <option value="updates">Recently updated</option>
            <option value="names">Name A-Z</option>
          </select>
        </div>
      </div>

      {sortRepos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </>
  );
}

export default ReposList;
