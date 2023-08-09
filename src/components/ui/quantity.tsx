"use client";

import { addQuantity, removeQuantity } from "@/store/slice/cardSlice";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Quantity() {
  //const [state, setstate] = useState(1);
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addQuantity({ quantity: 1 }));
  };
  const items = useSelector((state: RootState) => state.cart.totalQuantity);
  const removeItem = () => {
    dispatch(removeQuantity({ quantity: 1 }));
  };
  return (
    <div className="  flex content-center justify-items-center items-baseline gap-4 ">
      <div className="text-lg font-bold">Quantity:</div>
      <div className="w-10 h-10 ml-4 bg-slate-200 flex items-center justify-center  rounded-full mt-4 ">
        <button disabled={items <= 1} onClick={removeItem} className="  p-2  text-xl">
          -
        </button>
      </div>

      <span>{items}</span>
      <div className="w-10 h-10 border-2 border-black  flex items-center justify-center  rounded-full mt-4 ">
        <button onClick={addItem} className="p-2 text-xl ">
          +
        </button>
      </div>
    </div>
  );
}

export default Quantity;
