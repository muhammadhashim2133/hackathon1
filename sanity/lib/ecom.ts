import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    defineField({
      name: "productName",
      type: "string",
      title: "Product Name",
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "productImage",
      title: "Product Image",
      type: "image",
    }),
    defineField({
      title: "Select Product Category",
      name: "productCategory",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
});

export const category = defineType({
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    defineField({
      title: "category",
      name: "name",
      type: "string",
    }),
  ],
});
