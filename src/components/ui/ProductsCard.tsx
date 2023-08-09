"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/store/slice/cardSlice";
import { client } from "../../../sanity/lib/client";
import { RootState } from "@/store/store";
import { Image as IImage } from "sanity";
import toast, { Toaster } from "react-hot-toast";

export default function ProductsCard(props: { showButton?: boolean; showCategory?: boolean; productSize?: string; productQuantity?: number; productname: string; price: number; id: string; category?: string; img: StaticImageData | string | any }) {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();

  const getproducts = async () => {
    const res = await client.fetch(`*[_type == "products"]{
      productName,
      price,
      productImage,
      _id,
      productCategory->{
        name
      }
    }`);
    const data = await res;
    setproducts(data);
  };

  interface IProduct {
    productName: string;
    price: number;
    productImage: string;
    _id: string;
    productQuantity?: number;
    productSize?: string;

    productCategory: { name: string | any };
  }
  const cartitems = useSelector((state: RootState) => state.cart.items);
  const productQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  const handleadd = (product: IProduct) => {
    const isProductInCart = cartitems.some((item) => item._id === props.id);
    if (isProductInCart) {
      toast.error("this product is already added into the cart");
    } else {
      dispatch(add(product));
      toast.success("Your product is Successfully added!");
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div>
      <Link href={`/products/${props.id}`}>
        <Image src={urlForImage(props.img).url()} alt="product1" width={300} height={300} />
        <div className="text-lg font-semibold mt-2">{props.productname}</div>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Price: ${props.price.toFixed(2)}</h4>
        {props.showCategory && (
          <h3 className="scroll-m-20 text-lg  tracking-tight">
            <span className="font-semibold">Category:</span> {props.category}
          </h3>
        )}
      </Link>
      {props.showButton && (
        <div>
          <Button
            onClick={() => handleadd({ productName: props.productname, _id: props.id, price: props.price, productImage: props.img, productSize: props.productSize === undefined ? "M" : props.productSize, productQuantity: props.productQuantity === undefined ? 1 : props.productQuantity, productCategory: { name: props.category == undefined || null ? "not define" : props.category } })}
            size="sm"
            className="bg-slate-900 text-white rounded-[5px]"
          >
            add to cart
          </Button>
        </div>
      )}
    </div>
  );
}
