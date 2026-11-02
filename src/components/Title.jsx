import React from "react";

function Title() {
  return (
    <>
      <div className="pt-8 pb-6 sm:pt-12 sm:pb-8">
        
        <h1 className="text-gray-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          GitHub profile finder
        </h1>
        
        <p className="text-gray-400 mt-3 w-full md:w-9/12 lg:w-7/12">
          Look up any public GitHub account: profile details, total stars and a
          searchable list of repositories.
        </p>
        
      </div>
    </>
  );
}

export default Title;
