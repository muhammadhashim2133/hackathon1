import Clientheader from "@/components/ui/Clientheader";
import { auth } from "@clerk/nextjs";
import React from "react";

function Header() {
  const { userId } = auth();
  //console.log(userId);
  return (
    <div>
      <Clientheader userId={userId} />
    </div>
  );
}

export default Header;
