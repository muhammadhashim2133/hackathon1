import React from "react";
import ProductsCard from "@/components/ui/ProductsCard";
//import { MockProduct } from "@/utils/MockProduct";
import { getProducts } from "@/views/Product";

interface IProduct {
  productName: string;
  price: number;
  productImage: string;
  _id: string;
  productCategory: { name: string };
}

async function page() {
  const allData: IProduct[] = await getProducts();
  //console.log(allData);

  return (
    <>
      <div className="mt-32 px-6 text-xl">Category: All product</div>
      <div className="products mt-4 items-center justify-evenly flex  gap-8 flex-wrap gap-y-10">
        {allData.map((item: IProduct) => (
          <ProductsCard showButton={false} showCategory={true} key={item._id} productname={item.productName} price={item.price} category={item.productCategory?.name ?? "not defined"} id={item._id} img={item.productImage} />
        ))}
      </div>
    </>
  );
}

export default page;
