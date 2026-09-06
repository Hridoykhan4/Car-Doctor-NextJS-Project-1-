import Image from 'next/image';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const ServicesSection = async () => {
    const services =await dbConnect(collectionNamesObj.serviceCollection).find({}).toArray();
    console.log(services);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
            {
                services.map(service => (
                    <div key={service._id} className="card bg-base-100 shadow-xl border border-gray-100">
                        <figure className="px-4 h-48 pt-4 relative overflow-hidden rounded-t-xl">
                            <Image
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                src={service.img}
                                alt={service.title}
                                className="  w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg font-bold">{service.title}</h2>
                            <p className="text-sm text-gray-600">Price: ${service.price}</p>
                            <div className="card-actions justify-end mt-2">
                                <Link href={`/services/${service._id.toString()}`}>
                                    <button className="btn btn-ghost btn-circle text-orange-600">
                                        <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ServicesSection;