"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SiTelegram } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { AiFillCloseCircle, AiFillYoutube } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { AlignLeft, Search, ShoppingCart } from "lucide-react";

import React, { useState } from "react";
import logo from "public/logo.webp";

import { UserButton } from "@clerk/nextjs";
import ClerkButton from "@/components/ui/Clientheader";

function Clientheader(props: any) {
  const cardValue = useSelector((state: RootState) => state.cart.totalQuantity);
  const items = useSelector((state: RootState) => state.cart.items);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="max-w-xl mx-auto ">
        <div className="desktop hidden customScreen:block    ">
          <div className="fixed top-28 right-[10%] z-50 ">
            <Link href="/cart">
              <div className="flex justify-center  items-center relative w-16 h-16 rounded-full bg-slate-400">
                <div className="h-8 w-8 text-white absolute text-sm bottom-12 left-12 rounded-full bg-red-500 p-1">{items.length}</div>
                <ShoppingCart size={40} />
              </div>
            </Link>
          </div>
          <div className=" flex justify-center items-center ">
            <div className="flex bg-slate-50 border-b-1  border-blue-900 z-50 bg-opacity-90 justify-between w-full fixed top-0 items-center flex-shrink-0 p-6">
              <Link href="/">
                <Image width={150} height={150} src={logo} alt="Logo" />
              </Link>
              <ul className="flex gap-x-4">
                <Link href="/categories/Female">
                  <li className="hover:font-semibold ">Female</li>
                </Link>
                <Link href="/categories/Male">
                  <li className="hover:font-semibold ">Male</li>
                </Link>
                <Link href="/categories/kids">
                  <li className="hover:font-semibold ">Kids</li>
                </Link>
                <Link href="/categories/sport">
                  <li className="hover:font-semibold ">Sports</li>
                </Link>
                <Link href="/products">
                  <li className="hover:font-semibold ">All Products</li>
                </Link>
              </ul>
              <div className="flex gap-x-4 items-center">
                <div className="relative">
                  <Input placeholder="What you are looking for" className="text-gray-500 border-grey-500 rounded py-[14px] pl-8" />
                  <Search className="absolute top-1 ml-2 w-4 text-gray-500" />
                </div>
                {!props.userId && (
                  <div className="flex gap-2">
                    <Link href="/sign-in">
                      <button className="border border-slate-300 p-2 hover:bg-slate-500 hover:text-white transition duration-600">Sign in</button>
                    </Link>
                    <Link href="/sign-up">
                      <button className="border border-slate-300 p-2 hover:bg-slate-500 hover:text-white transition duration-600">Sign up</button>
                    </Link>
                  </div>
                )}
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>

        <div className="mob relative customScreen:hidden ">
          <div className="fixed top-28 right-[10%] z-50 ">
            <Link href="/cart">
              <div className="flex justify-center  items-center relative w-16 h-16 rounded-full bg-slate-400">
                <div className="h-8 w-8 text-white absolute text-sm bottom-12 left-12 rounded-full bg-red-500 p-1">{items.length}</div>
                <ShoppingCart size={40} />
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center bg-slate-50 border-b-1 border-blue-900 z-50 bg-opacity-90 justify-between w-full fixed top-0  pt-6 px-6">
              <div className="">
                <Link href="/">
                  <Image width={150} height={150} alt="Logo" src={logo} />
                </Link>

                <button onClick={toggleVisibility}>
                  <AlignLeft className="mt-2" strokeWidth={1.5} />
                </button>
              </div>

              <div>
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>

        {isVisible && (
          <div className="fixed top-[92px] z-50 right-[0px] text-2xl text-slate-200">
            <nav className="bg-slate-950 p-10 rounded-sm opacity-60">
              <button onClick={toggleVisibility}>
                <AiFillCloseCircle className="mt-2 text-4xl" strokeWidth={1.5} />
              </button>
              <ul className="mt-4">
                <li className="flex gap-2">
                  <ShoppingCart className="text-5xl" />
                  <Link href="/categories/Male">
                    <div>Male</div>
                  </Link>
                </li>

                <li className="mt-4 flex gap-2">
                  <ShoppingCart className="text-5xl" />

                  <Link href="/categories/kids">
                    <div>Kids</div>
                  </Link>
                </li>
                <li className="mt-4 flex gap-2">
                  <ShoppingCart className="text-5xl" />

                  <Link href="/categories/Female">
                    <div>Female</div>
                  </Link>
                </li>
                <li className="mt-4 flex gap-2">
                  <ShoppingCart className="text-5xl" />
                  <Link href="/products">
                    <div>All Products</div>
                  </Link>
                </li>
              </ul>
              <div className="flex gap-2 justify-center mt-10">
                <FaFacebookSquare className="text-4xl" />
                <AiFillYoutube className="text-4xl" />
                <SiTelegram className="text-4xl" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

export default Clientheader;

/* import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function ClerkButton() {
  const { userId } = auth();
  console.log(userId);
  return (
    <div className="flex gap-2">
      {!userId && (
        <>
          <Link href="/sign-in">
            <button className="border border-slate-300 p-2">Sign in</button>
          </Link>
          <Link href="/sign-up">
            <button className="border border-slate-300 p-2">Sign up</button>
          </Link>
        </>
      )}

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default ClerkButton;
 */
