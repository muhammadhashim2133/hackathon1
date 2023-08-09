import { NextRequest, NextResponse } from "next/server";
import { db, hakatonecomTable } from "../../lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";

export const GET = async (req: NextRequest) => {
  try {
    const res = await db.select().from(hakatonecomTable);

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const uid = uuid();
  const setCookies = cookies();

  const user_id = cookies().get("user_id");

  if (!user_id) {
    setCookies.set("user_id", uid);
  }
  try {
    for (const item of req) {
      const res = await db
        .insert(hakatonecomTable)
        .values({
          UserId: cookies().get("user_id")?.value as string,
          ProductId: item._id,
          Quantity: item.productQuantity,
          TotalPrice: item.price, // Assuming this should be an integer
          Category: item.productCategory.name, // Access the name property within productCategory
          Size: item.productSize,
        })
        .returning();
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    //console.log(error);
    return NextResponse.json({ success: false });
  }
};

/* _id: "sdsd", quantity: 4, TotalPrice: 213, Category: "male", Size: "large" */
