import React from "react";

function RepoCard({ repo }) {
  function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    const days = Math.floor(seconds / 86400);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years}y ago`;
    if (months > 0) return `${months}mo ago`;
    if (days > 0) return `${days}d ago`;
    return "today";
  }

  const LANG_COLORS = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    Go: "#00ADD8",
    Rust: "#dea584",
    "C++": "#f34b7d",
    C: "#555555",
    "C#": "#178600",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Ruby: "#701516",
    PHP: "#4F5D95",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Shell: "#89e051",
    Dart: "#00B4AB",
    Vue: "#41b883",
  };

  return (
    <>
      <div className="bg-slate-800 border border-1 border-gray-400 p-3 sm:p-4 rounded-lg mt-3">
        <div className="flex justify-between items-start sm:items-center gap-3">
          <a href={repo.html_url} target="_blank">
            <h1 className="text-sky-600 hover:underline text-lg sm:text-xl break-words font-bold cursor-pointer">
              {repo.name}
            </h1>
          </a>

          <h1 className="text-base sm:text-lg shrink-0 text-yellow-400 font-semibold">
            ★ {repo.stargazers_count}
          </h1>
        </div>

        <div className="text-sm text-gray-400 font-semibold flex flex-wrap gap-x-5 sm:gap-x-7 gap-y-1 leading-7 mt-1">
          

          {repo.language != null && <span className="space-x-2 inline-flex items-center">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: LANG_COLORS[repo.language] }}
            ></span>
            <span>{repo.language}</span>
          </span>}
          
          <span>{repo.forks} forks</span>
          
          <span>Updated {timeAgo(repo.updated_at)}</span>

        </div>

      </div>
    </>
  );
}

export default RepoCard;
