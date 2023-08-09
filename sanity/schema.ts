import { type SchemaTypeDefinition } from "sanity";
import { product, category } from "./lib/ecom";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],
};
