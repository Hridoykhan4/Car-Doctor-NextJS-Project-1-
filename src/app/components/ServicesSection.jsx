import Image from 'next/image';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const ServicesSection = async () => {
    const services = await dbConnect(collectionNamesObj.serviceCollection).find({}).toArray();

    return (
        <section className="app-container section-padding">
            {/* Section Header */}
            <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
                <h3 className="text-primary font-bold text-lg md:text-xl tracking-wide uppercase">
                    Service
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold text-(--color-dark-01)">
                    Our Service Area
                </h2>
                <p className="text-(--color-dark-03) text-sm md:text-base leading-relaxed capitalize">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                    const serviceId = service._id.toString();
                    return (
                        <div
                            key={serviceId}
                            className="group relative bg-white border border-[#E8E8E8] rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div>
                                {/* Image Container */}
                                <div className="relative w-full h-52 md:h-56 overflow-hidden rounded-lg bg-(--color-dark-07)">
                                    <Image
                                        fill
                                        src={service.img}
                                        alt={service.title}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-(--color-dark-02) mt-5 line-clamp-1">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Footer / Price & Action */}
                            <div className="flex items-center justify-between pt-4 mt-2">
                                <p className="text-xl font-bold text-(--color-primary)">
                                    Price: ${service.price}
                                </p>

                                <Link
                                    href={`/services/${serviceId}`}
                                    aria-label={`View details for ${service.title}`}
                                    className="p-3 text-(--color-primary) bg-transparent group-hover:bg-(--color-primary) group-hover:text-white rounded-full transition-all duration-300 transform group-hover:rotate-45"
                                >
                                    <FaArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Full Card Overlay Link for Better UX */}
                            <Link
                                href={`/services/${serviceId}`}
                                className="absolute inset-0 z-10 text-transparent"
                                tabIndex={-1}
                            >
                                {service.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesSection;