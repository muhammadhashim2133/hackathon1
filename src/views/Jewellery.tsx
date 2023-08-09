import React from "react";
import feature from "public/feature.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Jewellery() {
  return (
    <>
      <div className="mt-10 p-6 flex justify-start lg:justify-end  ">
        <h2 className="text-4xl max-w-[350px] font-bold">Unique and Authentic Vintage Designer Jewellery</h2>
      </div>

      <div className="mt-10 relative flex flex-col  lg:flex-row ">
        {/* left */}
        <div className="flex  flex-1 flex-wrap   relative">
          <div className="flex flex-col md:flex-row ">
            <div className="px-8 py-4">
              <h4 className="font-semibold text-lg">Using Good Quality Materials</h4>
              <div className="mt-2 text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
            </div>
            <div className="px-8 py-4">
              <h4 className="font-semibold text-lg">100% Handmade Products</h4>
              <div className="mt-2 text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="px-8 py-4">
              <h4 className="font-semibold text-lg">Modern Fashion Design</h4>
              <div className="mt-2 text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
            </div>
            <div className="px-8 py-4">
              <h4 className="font-semibold text-lg">Discount for Bulk Orders</h4>
              <div className="mt-2 text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
            </div>
            <div className="lg:text-9xl text-5xl sm:text-8xl font-bold -z-10 absolute -top-14 left-0 text-gray-100">Different from others</div>
          </div>
        </div>

        {/* right */}

        <div className="flex flex-col md:flex-row   gap-x-6 flex-1 justify-center items-center mt-10 lg:mt-0">
          <div className="flex-1 p-6">
            <Image src={feature} alt="feature" />
          </div>
          <div className="px-8 flex-1 text-lg mt-4">
            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
            <div>
              <Button className="bg-gray-950 text-white mt-10">See All Product</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jewellery;
