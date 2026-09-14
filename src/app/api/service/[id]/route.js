import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const servicesCollection = dbConnect(collectionNamesObj.serviceCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(id) });
  const allServices = await servicesCollection
    .find({}, { projection: { title: 1, _id: 1 } })
    .toArray();
  return NextResponse.json({ service: data, allServices });
};

export const DELETE = async (req, { params }) => {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
  const query = { _id: new ObjectId(id) };

  const singleBooking = await bookingCollection.findOne(query);
  const isOwnerOK = email === singleBooking?.email;

  if (isOwnerOK) {
    const deleteRes = await bookingCollection.deleteOne(query);
    revalidatePath("/my-bookings");
    return NextResponse.json(deleteRes);
  } else {
    return NextResponse.json(
      { success: false, message: "Forbidden Action" },
      { status: 401 },
    );
  }
};
