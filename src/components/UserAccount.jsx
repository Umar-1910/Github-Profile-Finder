import React from "react";
import Profile from "./Profile";

function UserAccount({ userfound, username, userData }) {
  return (
    <>

        {userfound == null && <div className="border border-1 border-gray-400 w-full rounded-xl bg-slate-800 text-white py-5 px-4 sm:ps-5 mt-8 text-sm sm:text-base break-words">
          Enter a username above to see their profile.
        </div>}
      
      
        {userfound == false && <div className="border border-1 border-gray-400 w-full rounded-xl bg-slate-800 text-white py-5 px-4 sm:ps-5 mt-8 text-sm sm:text-base break-words">
          <span className="font-extrabold">No user named "{username}".</span> <br/>
          <span>Check the spelling and try again.</span>
        </div>}

        {userfound == true && <Profile userData={userData}/>}

    </>
  );
}

export default UserAccount;