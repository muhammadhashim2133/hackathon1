import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { urlForImage } from "../../../../sanity/lib/image";
import toast from "react-hot-toast";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  ////console.log(body);
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [{ shipping_rate: "shr_1NY3v5DhfSDztFVzmfDFBQe0" }, { shipping_rate: "shr_1NY363DhfSDztFVzSBA7dhs5" }],
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: item.productName,
                images: [urlForImage(item.productImage).url()],
              },
              unit_amount: item.price * 100,
            },

            quantity: item.productQuantity,
            /*  adjustable_quantity: {
              enabled: false,
              minimum: 1,
              maximum: 10,
            }, */
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        mode: "payment",
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/canceled`,
      });
      return NextResponse.json({ session });
    } else {
      //console.log("no data found");
      return NextResponse.json({ message: "no data found" });
    }
  } catch (err: any) {
    //console.log(err);
    return NextResponse.json(err.message);
  }
}
