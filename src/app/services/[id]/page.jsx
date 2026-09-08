import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetailPage({ params }) {
    const { id } = await params;
    const service = await dbConnect(collectionNamesObj.serviceCollection).findOne({ _id: new ObjectId(id) })
    if(!service) return <div className="app-container">
        Service Not Found!
    </div>
    /*  {
   _id: '635a0c0b64a6d231228942ae',
   service_id: '04',
   title: 'Engine Oil Change',
   img: 'https://i.ibb.co/T2cpBd5/888.jpg',
   price: '20.00',
   description: 
     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!',
   facility: [
     {
       name: 'Instant Car Services',
       details: 
         'Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.'
     },
     {
       name: '24/7 Quality Service',
       details: 
         'Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.'
     },
     {
       name: 'Easy Customer Service',
       details: 
         'Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.'
     },
     {
       name: 'Quality Cost Service',
       details: 
         'Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.'
     }
   ]
 }, */

    return (
        <section>
            <div className="relative app-container w-full h-62.5 sm:h-75 md:h-100 rounded-xl overflow-hidden my-6">
                <Image
                    src="/assets/images/checkout/checkout.png"
                    alt="Checkout Banner"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)] flex items-center pl-8 md:pl-20">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        Service Details
                    </h1>
                </div>
                <div style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }} className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-primary text-white px-10 py-3 font-medium text-sm md:text-base">
                    <h2 className='px-8 py-4 text-white font-semibold'>Home/Services Detail</h2>
                </div>
            </div>

            {/* Content + Sidebar */}
        </section>
    )
}
