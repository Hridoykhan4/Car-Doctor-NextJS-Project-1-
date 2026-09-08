import Image from 'next/image';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const ServicesSection = async () => {
    const services = await dbConnect(collectionNamesObj.serviceCollection).find({}).toArray();

    return (
        <div>
            <div className="section-padding">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map(service => (
                            <div
                                key={service._id}
                                className="card bg-base-100 border border-[#E8E8E8] rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image Container */}
                                <div className="relative w-full h-52 overflow-hidden rounded-lg bg-gray-100">
                                    <Image
                                        fill
                                        src={service.img}
                                        alt={service.title}
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="mt-5 space-y-3">
                                    <h2 className="text-xl font-bold text-[#444444]">{service.title}</h2>

                                    <div className="flex items-center justify-between pt-2">
                                        <p className="text-lg font-semibold text-[#FF3811]">
                                            Price: ${service.price}
                                        </p>
                                        <Link href={`/services/${service._id.toString()}`}>
                                            <button className="p-2 text-[#FF3811] hover:bg-[#FF3811] hover:text-white rounded-full transition-colors duration-200">
                                                <FaArrowRight className="w-4 h-4" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;