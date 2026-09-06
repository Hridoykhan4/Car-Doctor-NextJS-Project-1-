import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function ServiceDetailPage({ params }) {
    const { id } = await params;
    const service = await dbConnect(collectionNamesObj.serviceCollection).findOne({ _id: new ObjectId(id) })
    console.log(service);

    return (
        <div>{service.title}</div>
    )
}
