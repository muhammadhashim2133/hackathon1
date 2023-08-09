"use client";
import { Toaster } from "react-hot-toast";
import { store } from "@/store/store";

import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  );
};

export default Providers;
