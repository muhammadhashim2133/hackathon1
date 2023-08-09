// SlickProductsAPI.tsx
import React from "react";
import { client } from "../../sanity/lib/client";
import SlickProductSlider from "./Slickproductclient";

export const getProducts = async () => {
  const res = await client.fetch(`*[_type == "products"]{
      productName,
      price,
      productImage,
      _id,
      productCategory->{
        name
      }
    }`);
  return res;
};

const SlickProductsAPI = () => {
  return <SlickProductSlider />;
};

export default SlickProductsAPI;
