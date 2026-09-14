/**
 * bcrypt package use korsi jeno database e password hash kora jay, in the registeruser.js
 * 
*/

/* const fetchMyBooking = async () => {
    const res = await fetch(`http://localhost:3000/api/service`, {
        headers: await headers(),
        cache: 'no-store'
    });
    const d = await res.json();
    return d
}

    jokhon amra mybooking er data anbo tokhon oikhane getServerSession ase jeTar jnne amader api k session cookie header e paThate hbe, naile amader server user k pabe na.



 */



/* 
import MyBookingTable from '@/components/tables/MyBookingTable';
import { headers } from 'next/headers';
import React from 'react'

const fetchMyBooking = async () => {
    const res = await fetch(`http://localhost:3000/api/service`, {
        headers: await headers(),
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

    ekhane amra fetch, useeffect diye data ani coz coz evabe anle browser e cache hy, but next js e j amra revalidate path call kori sjeta shudhu server e fetch kora data er khette kaj kore
    revalidatePath("/my-bookings");

*/


/* ArekTa main catch ase
    api ta session use hoitese erokom request ashbe hobe 'use client' use kora component theke, kintu server e jodi amader session use korte hy, shekkhetre headers: await headers()
const res = await fetch(`http://localhost:3000/api/service`, {
        headers: await headers(),
        cache: 'no-store'
    });
    https://nextjs.org/learn/dashboard-app/mutating-data
    GO TO my-bookings page   
*/


/* 
  ************
  Server component er kase cookies er access thake na, eijnne header() use korte hy
*/

/* 
https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}
*/

/* 
https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-gettoken
*/

/* 
মাল্টিপল গুগল অ্যাকাউন্ট দিয়ে লগইন করার সুবিধা দিতে চাইলে NextAuth.js-এ ২টি সহজ উপায় আছে।

স্বাভাবিকভাবে গুগল ব্রাউজারের সেশন ও কুকি মনে রাখে, তাই একবার সিলেক্ট করলে পরের বার আর অ্যাকাউন্ট সিলেক্ট করার অপশন দেখায় না (সরাসরি আগের অ্যাকাউন্টেই ঢুকে যায়)।

সমাধান ১: Account Select Screen বাধ্য করা (সবচেয়ে সহজ ও জনপ্রিয় উপায়)
NextAuth-এর Google Provider কনফিগারেশনে authorization প্যারামিটার যোগ করে দিলে, প্রতিবার লগইন বাটনে ক্লিক করলে গুগল আপনাকে "Choose an account" স্ক্রিনটি দেখাবে। এতে আপনি সুবিধামতো যেকোনো গুগল অ্যাকাউন্ট বেছে নিতে পারবেন।

আপনার authOptions (বা route.js) ফাইলে Google Provider-টি এভাবে আপডেট করুন:

JavaScript
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account", // 👈 এই লাইনটি প্রতিবার অ্যাকাউন্ট সিলেক্ট অপশন আনবে
        },
      },
    }),
  ],
*/