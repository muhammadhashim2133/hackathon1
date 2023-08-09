import React, { useState } from "react";
import getStripePromise from "@/app/lib/stripe";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

function StripeCheckoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const cartitems = useSelector((state: RootState) => state.cart.items);
  const cartitem = useSelector((state: RootState) => state.cart.items);

  const handleAddDB = async () => {
    const res = await fetch("/api/hakatone-db", {
      method: "POST",
      body: JSON.stringify(cartitem),
    });
    console.log("api call");
    const result = await res.json();
  };

  const handleCheckOut = async () => {
    handleAddDB();

    setIsLoading(true); // Set loading state to true when the checkout process starts

    const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(cartitems),
    });
    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
    setIsLoading(false); // Set loading state to false when the checkout process completes
  };

  const isButtonDisabled = cartitems.length === 0;

  return (
    <div className="flex items-center justify-center">
      <Button
        disabled={isLoading || isButtonDisabled} // Disable the button if it's loading or no data
        size="lg"
        variant="secondary"
        onClick={handleCheckOut}
        className="bg-slate-900 text-lg text-white rounded-xl mt-10"
      >
        {isLoading ? "Loading..." : "Check Out"} {/* Show "Loading..." when isLoading is true */}
      </Button>
    </div>
  );
}

export default StripeCheckoutButton;
