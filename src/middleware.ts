import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/categories/Male", "/categories/Female", "/products", "/categories/sport", "/categories/kids"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  rules: [
    {
      pattern: "/cart", // Specify the path of your cart page
      requiresAuth: true, // Set this to true to require authentication
    },
  ],
};
