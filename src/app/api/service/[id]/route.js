import dbConnect, { collectionNamesObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export const DELETE = async (req, {params}) => {
    const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
    const {p} = await params;
    const query = { _id: new ObjectId(p.id)};

    const session = await getServerSession()
}