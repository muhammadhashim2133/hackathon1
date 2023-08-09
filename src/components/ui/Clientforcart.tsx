"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import React from "react";
import { Image as IImage } from "sanity";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { add, removeQuantity, addQuantity } from "@/store/slice/cardSlice";
import toast from "react-hot-toast";

function Clientforcart(props: { showButton?: boolean; showCategory?: boolean; productSize?: string; productQuantity?: number; productname: string; price: number; id: string; category?: string; img: string | any }) {
  interface IIProduct {
    productName: string;
    price: number;
    productImage: IImage | string;
    _id: string;
    productQuantity?: number;
    productSize?: string;

    productCategory: { name: string | any };
  }

  const dispatch = useDispatch();

  const productItem = useSelector((state: RootState) => state.cart.items);

  const handleadd = (product: IIProduct) => {
    if (productItem.some((item) => item._id === props.id + productSize)) {
      toast.error("this product is already added into the cart");
    } else {
      dispatch(add(product));
      toast.success("Your product is Successfully added!");
    }
  };

  const productQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
  const productSize = useSelector((state: RootState) => state.cart.size);

  return (
    <>
      <Button className="bg-slate-900  text-white" onClick={() => handleadd({ productName: props.productname, _id: props.id + productSize, price: props.price * productQuantity, productImage: props.img, productSize: productSize, productQuantity: productQuantity, productCategory: { name: props.category || "" } })}>
        <ShoppingCart className="mr-2 h-8 w-8" /> Add to Cart
      </Button>
      <div className="text-3xl font-bold ">$ {props.price * productQuantity}.00</div>
    </>
  );
}

export default Clientforcart;
