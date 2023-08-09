import React from "react";
import { SignUp } from "@clerk/nextjs";

function page() {
  return (
    <div className="mt-32">
      <SignUp />
    </div>
  );
}

export default page;
