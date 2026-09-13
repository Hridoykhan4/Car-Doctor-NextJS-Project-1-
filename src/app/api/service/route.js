import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    const {id} = await params;
    console.log(id);
    const servicesCollection = await dbConnect(collectionNamesObj.serviceCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(id)});
    return Response.json(data)
};

// export const POST = async (req) => {
//   const body = await req.json();
//   const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
//   const result = await bookingCollection.insertOne(body);
//   return NextResponse.json(result);
// };
