"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSize } from "@/store/slice/cardSlice";

function Sizes() {
  const dispatch = useDispatch();

  const handleSizeClick = (size: any) => {
    dispatch(addSize({ size }));
    setSelectedSize(size);
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const isButtonSelected = (size: any) => selectedSize === size;

  return (
    <div className="flex gap-x-4">
      <button onClick={() => handleSizeClick("XS")} className={`w-10 h-10 flex items-center justify-center rounded-full  hover:shadow-xl ${isButtonSelected("XS") ? "bg-slate-900 text-white" : "bg-white text-gray-500"}`}>
        <span className="font-bold text-lg">XS</span>
      </button>
      <button onClick={() => handleSizeClick("S")} className={`w-10 h-10 flex items-center justify-center rounded-full  hover:shadow-xl ${isButtonSelected("S") ? "bg-slate-900 text-white" : "bg-white text-gray-500"}`}>
        <span className="font-bold text-lg">S</span>
      </button>
      <button onClick={() => handleSizeClick("M")} className={`w-10 h-10 flex items-center justify-center rounded-full  hover:shadow-xl ${isButtonSelected("M") ? "bg-slate-900 text-white" : "bg-white text-gray-500"}`}>
        <span className="font-bold text-lg">M</span>
      </button>
      <button onClick={() => handleSizeClick("L")} className={`w-10 h-10 flex items-center justify-center rounded-full  hover:shadow-xl ${isButtonSelected("L") ? "bg-slate-900 text-white" : "bg-white text-gray-500"}`}>
        <span className="font-bold text-lg">L</span>
      </button>
      <button onClick={() => handleSizeClick("XL")} className={`w-10 h-10 flex items-center justify-center rounded-full  hover:shadow-xl ${isButtonSelected("XL") ? "bg-slate-900 text-white" : "bg-white text-gray-500"}`}>
        <span className="font-bold text-lg">XL</span>
      </button>
    </div>
  );
}

export default Sizes;
