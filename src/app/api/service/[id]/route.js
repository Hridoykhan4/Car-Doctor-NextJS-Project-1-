import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const servicesCollection = dbConnect(collectionNamesObj.serviceCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(id) });
  const allServices = await servicesCollection
    .find({}, { projection: { title: 1, _id: 1 } })
    .toArray();
  return NextResponse.json({ service: data, allServices });
};

