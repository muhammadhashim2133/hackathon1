import React from "react";
import ProductsCard from "@/components/ui/ProductsCard";
import { client } from "../../sanity/lib/client";

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

interface IProduct {
  productName: string;
  price: number;
  productImage: string;
  _id: string;
  productCategory: { name: string };
}

async function Product() {
  const data = await getProducts();
  const productChecks: [IProduct] = data.slice(0, 3);

  return (
    <section className="flex flex-col items-center mt-20">
      <div className="leading-7 text-blue-900 font-bold">PRODUCTS</div>
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold    ">Check What We Have</h2>
      <div className="products mt-10 flex justify-evenly items-start flex-wrap gap-y-6 gap-x-4">
        {productChecks.map((items: IProduct) => (
          <ProductsCard showButton={true} key={items._id} productname={items.productName} price={items.price} img={items.productImage} id={items._id} category={items.productCategory.name} />
        ))}
      </div>
    </section>
  );
}

export default Product;
