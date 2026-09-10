'use server'
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect"

export const registerUser =async payload => {
    const userCollection = dbConnect(collectionNamesObj.userCollection);

    const {email, password} = payload;
    if(!email || !password) return null;
    const user = await userCollection.findOne({email});

    console.log(payload);

    
}