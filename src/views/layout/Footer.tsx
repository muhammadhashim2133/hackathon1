import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

function Footer() {
  return (
    <>
      <div className="desktop   md:hidden lg:block   mt-20  text-slate-800  ">
        <div className=" flex py-10  mx-10 md:mx-20 lg:gap-20 gap-10 flex-col lg:flex-row  content-center lg:items-start items-center  justify-items-center justify-center">
          <div className="flex flex-col   justify-start  items-center  lg:items-start gap-y-6 ">
            <div className="flex justify-center  pb-1 ">
              <Image src="/logo.webp" width={150} height={100} alt="logo" />
            </div>
            <div className="max-w-sm text-sm">
              Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
              <div className="flex items-center lg:justify-start justify-center    gap-4 mt-2 row">
                <div className="hover:text-red-800">
                  <Link href="">
                    <ImFacebook2 />
                  </Link>
                </div>
                <div className="text-xl hover:text-red-800 ">
                  <Link href="">
                    <AiFillLinkedin />
                  </Link>
                </div>
                <div className="text-xl hover:text-red-800">
                  <Link href="">
                    <FaTwitterSquare />
                  </Link>
                </div>
                <div className="text-xl hover:text-red-800">
                  <Link href="">
                    <FaGithubSquare />
                  </Link>
                </div>
                <div className="text-2xl hover:text-red-800">
                  <Link href="">
                    <GrYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start ">
            <div className="  font-bold  pb-1  ">
              <h4>Company</h4>
            </div>
            <div className="lg:mt-4  pb-1">
              <Link href="/">About Terms of Use</Link>
            </div>

            <div className="  pb-1">
              <Link href="/">Privacy Policy</Link>
            </div>
            <div className="">
              <Link href="/">How it Works</Link>
            </div>

            <div className="">
              <Link href="/">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start ">
            <div className="  font-bold   pb-1  ">
              <h4>Support</h4>
            </div>
            <div className="lg:mt-4  pb-1">
              <Link href="/">Support Carrer 24h Service</Link>
            </div>

            <div className="  pb-1">
              <Link href="/">Quick Chat</Link>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start ">
            <div className="  font-bold   pb-1  ">
              <h4>Contact</h4>
            </div>
            <div className="lg:mt-4  pb-1">
              <Link href="/">Whatsapp</Link>
            </div>

            <div className="  pb-1">
              <Link href="/">Support 24h</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="tab hidden  md:block lg:hidden   mt-20  text-slate-800  ">
        <div className=" flex pt-10  mx-10 md:mx-20 gap-20   flex-row  content-center items-start  justify-items-center justify-center">
          <div className="flex flex-col   justify-start   items-start gap-y-6 ">
            <div className="flex justify-center  pb-1 ">
              <Image src="/logo.webp" width={150} height={100} alt="logo" />
            </div>
            <div className="max-w-sm text-sm">
              Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
              <div className="flex items-center justify-start    gap-4 mt-2 row">
                <div className="hover:text-red-800">
                  <Link href="">
                    <ImFacebook2 />
                  </Link>
                </div>
                <div className="text-xl hover:text-red-800 ">
                  <Link href="">
                    <AiFillLinkedin />
                  </Link>
                </div>
                <div className="text-xl hover:text-red-800">
                  <Link href="">
                    <FaTwitterSquare />
                  </Link>
                </div>
                <div className="text-xl hover:text-red-800">
                  <Link href="">
                    <FaGithubSquare />
                  </Link>
                </div>
                <div className="text-2xl hover:text-red-800">
                  <Link href="">
                    <GrYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start ">
            <div className="  font-bold  pb-1  ">
              <h4>Company</h4>
            </div>
            <div className="mt-4  pb-1">
              <Link href="/">About Terms of Use</Link>
            </div>

            <div className="  pb-1">
              <Link href="/">Privacy Policy</Link>
            </div>
            <div className="">
              <Link href="/">How it Works</Link>
            </div>

            <div className="">
              <Link href="/">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="flex   mx-10 p-10 gap-[250px]   flex-row  content-center items-start  justify-items-center justify-center">
          <div className="flex flex-col items-start ">
            <div className=" font-bold   pb-1  ">
              <h4>Support</h4>
            </div>
            <div className="mt-4  pb-1">
              <Link href="/">Support Carrer 24h Service</Link>
            </div>

            <div className="  pb-1">
              <Link href="/">Quick Chat</Link>
            </div>
          </div>
          <div className="flex mr-14  flex-col items-start ">
            <div className="  font-bold   pb-1  ">
              <h4>Contact</h4>
            </div>
            <div className="mt-4  pb-1">
              <Link href="/">Whatsapp</Link>
            </div>

            <div className="  pb-1">
              <Link href="/">Support 24h</Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="aa border-t border-red-900 border-1.5  "></div>
        <div className=" text-sm text-center  font-light    py-5 ">&#169; 2023 M.Hashim All Rights Reserved</div>
      </div>
    </>
  );
}

export default Footer;
