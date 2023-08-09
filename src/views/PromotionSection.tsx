import event2 from "public/event2.webp";
import event3 from "public/event3.webp";
import event1 from "public/event1.webp";

import Image from "next/image";

import React from "react";

function PromotionSection() {
  return (
    <>
      <div className="text-center mt-20 font-semibold text-blue-900">PROMOTIONS</div>
      <h1 className="text-center text-4xl font-bold"> Our Promotions Events</h1>
      <div className="flex flex-col items-center lg:flex-row gap-8 mt-10 justify-center">
        {/* left section */}
        <div className="flex  flex-col gap-4">
          {/* left secion 1 */}
          <div className=" w-[350px] h-[187px] flex bg-slate-400">
            <div className=" mt-8 ml-4">
              <h3 className="font-bold text-3xl">GET UP TO 60% </h3>
              <div className="text-lg">For the summer season</div>
            </div>
            <div className="mt-[32px] ">
              <Image width={340} src={event1} alt="event1 " />
            </div>
          </div>
          {/* left section 2 div */}
          <div className="w-[350px]  h-[187px] text-white bg-gray-800 flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-4xl font-bold">GET 30% Off</h3>
              <div className="mt-4">USE PROMO CODE</div>
              <button className="bg-gray-700  h-10 w-60 rounded-[6px] ">DINEWEEKENDSALE</button>
            </div>
          </div>
        </div>

        {/* rignt section */}
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            {/* vertical promotion card 1 */}
            <div className="w-64 h-96 bg-customColor">
              <div className="mt-5 ml-5">Flex Sweatshirt</div>
              <div className=" ml-5">
                <s>$100.00</s>
                <span className="ml-3 font-bold">$75.00</span>
                <Image className="mt-4" src={event2} alt="event2" />
              </div>
            </div>
            {/* vertical promotion card 1 */}

            <div className="w-64 h-96 bg-slate-300">
              <div className="mt-5 ml-5">Flex Sweatshirt</div>
              <div className=" ml-5">
                <s>$100.00</s>
                <span className="ml-2 font-bold">$75.00</span>
                <Image className="mt-[9px]" src={event3} alt="event2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromotionSection;
