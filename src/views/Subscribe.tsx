import { Button } from "@/components/ui/button";
import React from "react";

function Subscribe() {
  return (
    <div className="flex flex-col p-6 justify-center items-center relative">
      <h2 className="mt-28 text-4xl font-bold">Subscribe Our Newsletter</h2>
      <div className="mt-4">Get the latest information and promo offers directly</div>
      <div className="flex flex-col flex-shrink-0 sm:flex-row  mt-4 gap-2">
        <input className="border p-1 pl-3 max-w-[350px]" placeholder="Input email address" type="text" />
        <Button size="sm" className="bg-gray-950 flex-shrink-0 text-white">
          Get started
        </Button>
      </div>
      <div className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-gray-200 absolute right-6 -z-10 top-0">Newsletter</div>
    </div>
  );
}

export default Subscribe;
