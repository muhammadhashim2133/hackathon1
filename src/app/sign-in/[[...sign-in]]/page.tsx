import React from "react";
import { SignIn } from "@clerk/nextjs";

function page() {
  return (
    <div className="mt-32">
      <h2 className=" m-4 text-xl font-bold text-slate-700">
        TO purchase product you need to <span className="text-blue-900">Sign in/Sign up</span> first
      </h2>
      <SignIn />
    </div>
  );
}

export default page;
