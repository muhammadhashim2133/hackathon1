"use client";
import React from "react";
import { remove } from "@/store/slice/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { Button } from "@/components/ui/button";
import StripeCheckoutButton from "@/stripe/StripeCheckoutButton";

const Cartpage = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state: RootState) => state.cart.items);

  const handleremove = (id: any) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="large-screen hidden lg:block ">
        <h1 className="font-bold mt-32">Product Cart</h1>
        <div className="mt-10 ">
          {cartitems.map((item) => (
            <div className="flex   justify-between p-4  items-center mt-4 gap-2  bg-gray-100  ">
              <Image className="" src={urlForImage(item.productImage).url()} alt="product1" width={100} height={100} />

              <h5 className="p-2">
                <span className="font-semibold">Product: </span>
                {item.productName}
              </h5>
              <h5 className="p-2">
                <span className="font-semibold">Price:</span> {item.price.toFixed(2)}$
              </h5>
              <h5 className="p-2">
                <span className="font-semibold">Category:</span> {item.productCategory.name}
              </h5>
              <h5 className="p-2">
                <span className="font-semibold">Quantity:</span> {item.productQuantity}
              </h5>
              <h5 className="p-2">
                <span className="font-semibold">Size:</span> {item.productSize}
              </h5>

              <Button size="lg" className=" bg-slate-900 text-white rounded-md" onClick={() => handleremove(item._id)}>
                Remove
              </Button>
            </div>
          ))}
        </div>
        <StripeCheckoutButton />
      </div>
      <div className="small-screen lg:hidden ">
        <h1 className="font-bold text-xl px-6 pt-6 mt-20">Product Cart</h1>
        <div className="mt-10 ">
          {cartitems.map((item) => (
            <div key={item._id} className="flex flex-col justify-evenly p-4 gap-4  items-center   bg-gray-100  ">
              <Image flex-1 className="" src={urlForImage(item.productImage).url()} alt="product1" width={300} height={300} />
              <div className="flex flex-1 flex-col gap-2 w- ">
                <h5>
                  <span className="font-semibold">Product: </span>
                  {item.productName}
                </h5>
                <h5>
                  <span className="font-semibold">Total Price:</span> {item.price.toFixed(2)} $
                </h5>
                <h5>
                  <span className="font-semibold">Category:</span> {item.productCategory.name == undefined || null ? "not define" : item.productCategory.name}
                </h5>
                <h5>
                  <span className="font-semibold">Quantity:</span> {item.productQuantity}
                </h5>
                <h5>
                  <span className="font-semibold">Size:</span> {item.productSize}
                </h5>

                <Button size="lg" className=" bg-slate-900 mt-4 text-white rounded-md" onClick={() => handleremove(item._id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        <StripeCheckoutButton />
      </div>
    </>
  );
};

export default Cartpage;
