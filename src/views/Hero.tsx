import React from "react";
import { Badge } from "@/components/ui/badge";
import heroImage from "public/header.webp";
import featured1 from "public/featured1.webp";
import featured2 from "public/featured2.webp";
import featured3 from "public/featured3.webp";
import featured4 from "public/featured4.webp";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="flex mt-28 items-center justify-center gap-x-28 ">
      {/* left hero */}
      <div className="max-w-md p-6">
        <Badge className="bg-blue-300 font-bold " variant="destructive">
          Sale 70%
        </Badge>
        <h1 className="mt-4 scroll-m-20 text-4xl text-gray-950 font-extrabold tracking-tight lg:text-6xl">An Industrial Take on Streetwear</h1>
        <div className="text-lm font-medium leading-none text-gray-600 mt-6 max-w-xs">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</div>
        <Button variant="secondary" className="bg-slate-900 text-lg text-white  rounded-xl mt-6 lg:mt-10">
          <ShoppingCart className="mr-2 h-8 w-8" /> Start Shopping
        </Button>
        <div className="mt-10 flex items-center flex-col sm:flex-row gap-6">
          <Image src={featured1} width={120} alt="featured1" />
          <Image src={featured2} width={120} alt="featured2" />
          <Image src={featured3} width={120} alt="featured3" />
          <Image src={featured4} width={120} alt="featured4" />
        </div>
      </div>

      {/* right hero */}
      <div className="relative hidden md:block ">
        <Image width={1000} src={heroImage} alt="heroImage" />
        <div className="h-[370px] w-[370px] lg:h-[450px] lg:w-[450px] lgb:w-[600px] lgb:h-[600px] absolute top-0 -z-10 bg-customColor rounded-full"></div>
      </div>
    </section>
  );
}

export default Hero;
