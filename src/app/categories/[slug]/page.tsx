import ProductsCard from "@/components/ui/ProductsCard";
import { getProducts } from "@/views/Product";
interface IProduct {
  productName: string;
  price: number;
  productImage: string;
  _id: string;
  productCategory: { name: string };
}

const getProductbycategory = async (category: string) => {
  const alist: IProduct[] = await getProducts();

  return alist.filter((product) => (product.productCategory?.name ?? "not define") === category);
};

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await getProductbycategory(params.slug);

  return (
    <>
      <div className="mt-32 px-6 text-xl">My category: {params.slug}</div>

      <div className="  products mt-10 flex flex-wrap justify-evenly gap-x-8  gap-y-10 ">{result.length > 0 ? result.map((items) => <ProductsCard showButton={false} showCategory={true} key={items._id} productname={items.productName} price={items.price} img={items.productImage} category={items.productCategory.name} id={items._id} />) : <div className="font-bold">No product found</div>}</div>
    </>
  );
}
