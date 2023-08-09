import Quantity from "@/components/ui/quantity";

import Image from "next/image";
import { getProducts } from "@/views/Product";
import { urlForImage } from "../../../../sanity/lib/image";
import { Image as IImage } from "sanity";
import { add, removeQuantity } from "@/store/slice/cardSlice";
import Sizes from "@/components/ui/sizes";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import Clientforcart from "@/components/ui/Clientforcart";

interface IProduct {
  productName: string;
  price: number;
  productImage: { product: IImage };
  _id: string;
  productCategory: { name: string };
}

const getProductbyId = async (id: string) => {
  const alist: IProduct[] = await getProducts();
  return alist.filter((product: IProduct) => product._id === id);
};

export default async function Page({ params }: { params: { id: string } }) {
  const result: IProduct[] = await getProductbyId(params.id);

  return (
    <>
      {/* <div className="mt-32">Detail of product id: {params.id}</div> */}

      {result.map((item: IProduct) => (
        <div className="flex flex-col md:flex-row  justify-evenly items-center gap-x-4 mt-20">
          {/* left */}
          <Image className="px-6 pt-6" width={450} height={450} src={urlForImage(item.productImage).url()} alt={item.productName} />

          {/* right */}
          <div className="mt-4 md:mt-0 ">
            {/* name */}
            <h1 className="mt-4 text-2xl font-medium">{item.productName}</h1>
            <div className="text-xl font-medium text-gray-400">Dress</div>

            {/* size */}
            <div>
              <div className="mt-8 text-sm font-bold">SELECT SIZE</div>
              <Sizes />
            </div>

            {/* quantity */}
            <Quantity />
            <div className="flex items-center mt-4  gap-x-4">
              <Clientforcart id={item._id} img={item.productImage} price={item.price} productname={item.productName} category={item.productCategory?.name ?? "undefined"} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
