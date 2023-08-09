import { pgTable, serial, text, varchar, timestamp, boolean, decimal, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const hakatonecomTable = pgTable("hackatonbd", {
  Id: serial("id").primaryKey(),
  UserId: varchar("userid").notNull(),
  ProductId: varchar("productid").notNull(),
  TotalPrice: varchar("totalprice").notNull(),
  Size: varchar("size"),
  Category: varchar("category"),
  Quantity: integer("quantity").notNull(),
});

export type hakatonecom = InferModel<typeof hakatonecomTable>;
export type Newhakatonecom = InferModel<typeof hakatonecomTable, "insert">; // insert type

export const db = drizzle(sql);
