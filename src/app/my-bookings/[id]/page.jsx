import BookingUpdateForm from '@/components/forms/BookingUpdateForm'
import { headers } from 'next/headers';
import React from 'react'

export default async function UpdateBookingPage({ params }) {
    const { id } = await params;
    const res = await fetch(`https://car-project-batch-10.vercel.app/api/my-bookings/${id}`, {
        headers: new Headers(await headers())
    });
    const data = await res.json()
    return (
        <div>
            <BookingUpdateForm data={data}></BookingUpdateForm>
        </div>
    )
}
