/**
 * bcrypt package use korsi jeno database e password hash kora jay, in the registeruser.js
 *
 */

/* const fetchMyBooking = async () => {
    const res = await fetch(`https://car-project-batch-10.vercel.app/api/service`, {
        headers: new Headers(headers()),
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

    ekhane amra fetch, useeffect diye data ani coz coz evabe anle browser e cache hy, but next js e j amra revalidate path call kori sjeta shudhu server e fetch kora data er khette kaj kore
    revalidatePath("/my-bookings");

*/

/* ArekTa main catch ase
    api ta session use hoitese erokom request ashbe hobe 'use client' use kora component theke, kintu server e jodi amader session use korte hy, shekkhetre headers: new Headers(headers())
const res = await fetch(`https://car-project-batch-10.vercel.app/api/service`, {
        headers: new Headers(headers()),
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

/* 
1. NEXT_PUBLIC_MONGODB_URI
2. NEXTAUTH_URL
3. NEXT_AUTH_SECRET 


vercel --prod
vercel env te upload local.env


Google login er issue hobe, so env te NEXTAUTH_URL=https://car-project-batch-10.vercel.app dite hbe, 
https://console.cloud.google.com/apis/credentials?project=learnnextjsbatch10
https://console.cloud.google.com/auth/clients/24842554469-rekqt3ac07t5jec3pa8jnscvqngeo48m.apps.googleusercontent.com?project=learnnextjsbatch10
Authorized JavaScript origins url2 = https://car-project-batch-10.vercel.app/
Authorized redirect URIs https://car-project-batch-10.vercel.app/api/auth/callback/google


Similar also  in Github

export const proxy = async (req) => {
  const token = await getToken({
    req,
    secret: process.env.NEXT_AUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production' ? true : false

  });
 securekey true

*******************
Most important ekTa jinish

headers: new Headers(headers()),
locally kaj kore, but not in production
headers: new Headers(headers()) eta dite hbe coz Headers cannot be modified. 

Does it change anything to do headers: new Headers(headers())

I wonder if internally something has changed on the getter function.
https://github.com/vercel/next.js/discussions/63236
********************

  

*/
