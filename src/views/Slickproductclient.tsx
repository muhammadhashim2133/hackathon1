"use client";
// SlickProductSlider.tsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "./Slickproducts";
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProduct {
  productName: string;
  price: number;
  productImage: string | IImage | any;
  _id: string;
  productCategory: { name: string };
}

const SlickProductSlider = async () => {
  const products = await getProducts();
  const productChecks: [IProduct] = products.slice(0, 4);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20 flex justify-center items-center ">
      <div className="max-w-[80%]">
        <div className="leading-7 text-center text-blue-900 font-bold">PRODUCTS</div>
        <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold">Check What We Have</h2>
        <Slider {...settings} className="mt-10">
          {productChecks.map((item: IProduct) => (
            <Link href={`/products/${item._id}`} key={item._id}>
              <div className="hover:scale-110 transition-transform duration-300 py-3">
                <div className="flex flex-col justify-center items-center content-center mb-2 ">
                  <Image src={urlForImage(item.productImage).url()} alt="product1" width={300} height={300} />
                  <div className="text-lg font-semibold mt-2">{item.productName}</div>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Price: {item.price}$</h4>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlickProductSlider;
