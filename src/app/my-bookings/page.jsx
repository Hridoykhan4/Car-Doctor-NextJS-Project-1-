import MyBookingTable from '@/components/tables/MyBookingTable';
import { headers } from 'next/headers';
import React from 'react'

/* 
eTa client component chilo, but server theke jokhon amra bookinng data er jnne hit korsi cookie er access server pay na, headers er kaj hocche client/browser e je cookie gula ase sheTa amra j api call kortasi shekhane jacche,
keno server component, dekho amra jokhon kono booking delete kortasi server theke revalidatePath("/my-bookings"); kore dile abar api call kortase, revalidateapath tokhon e kaj kore jokhon api call server component theke ashe
router,refresh() call kore disi jeno UI o update hye jay


*/

const fetchMyBooking = async () => {
    const res = await fetch(`https://car-project-batch-10.vercel.app/api/service`, {
        headers: new Headers(headers()),
        cache: 'no-store'
    });
    const d = await res.json();
    return d
}

export default async function MyBookings() {
    const data = await fetchMyBooking();
    return (
        <div>
            <MyBookingTable data={data}></MyBookingTable>
        </div>
    )
}
