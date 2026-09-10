import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaFileAlt } from 'react-icons/fa';

export default async function ServiceDetailPage({ params }) {
    const { id } = await params;

    // Database connection
    const serviceCollection = dbConnect(collectionNamesObj.serviceCollection);
    const service = await serviceCollection.findOne({ _id: new ObjectId(id) });
    const allServices = await serviceCollection.find({}, { projection: { title: 1, _id: 1 } }).toArray();

    if (!service) {
        return (
            <div className="app-container section-padding text-center font-bold text-2xl text-red-500">
                Service Not Found!
            </div>
        );
    }

    return (
        <section className="app-container py-8">
            {/* Top Banner Section */}
            <div className="relative w-full h-60 sm:h-72 md:h-80 rounded-xl overflow-hidden mb-12">
                <Image
                    src="/assets/images/checkout/checkout.png"
                    alt="Checkout Banner"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[var(--color-dark-01)] to-transparent flex items-center pl-8 md:pl-20">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        Service Details
                    </h1>
                </div>
                {/* Breadcrumb Box */}
                <div
                    style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-(--color-primary) text-white px-8 py-2 font-medium text-sm md:text-base"
                >
                    Home/Service Details
                </div>
            </div>

            {/* Main Grid Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Side: Main Content (2 Columns) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Banner Image */}
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                        <Image
                            src={service.img}
                            alt={service.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-[var(--color-dark-01)]">{service.title}</h2>
                        <p className="text-(--color-dark-03) leading-relaxed text-justify">
                            {service.description}
                        </p>
                    </div>

                    {/* Facility 2x2 Grid */}
                    {service.facility && service.facility.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.facility.map((item, idx) => (
                                <div key={idx} className="bg-[var(--color-dark-07)] p-8 rounded-xl border-t-2 border-[var(--color-primary)]">
                                    <h4 className="text-xl font-bold text-[var(--color-dark-02)] mb-2">{item.name}</h4>
                                    <p className="text-(--color-dark-03) text-sm leading-relaxed">{item.details}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Process Info Block */}
                    <div className="space-y-4 pt-2">
                        <h3 className="text-2xl font-bold text-[var(--color-dark-01)]">3 Simple Steps to Process</h3>
                        <p className="text-(--color-dark-03) leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                        </p>
                    </div>
                </div>

                {/* Right Side: Sidebar */}
                <div className="space-y-8">

                    {/* Services Navigation Box */}
                    <div className="bg-[var(--color-dark-07)] p-8 rounded-xl space-y-4">
                        <h3 className="text-2xl font-bold text-[var(--color-dark-01)]">Services</h3>
                        <div className="space-y-3">
                            {allServices.map((item) => {
                                const isActive = item._id.toString() === service._id.toString();
                                return (
                                    <Link
                                        key={item._id.toString()}
                                        href={`/services/${item._id}`}
                                        className={`flex items-center justify-between p-4 rounded-lg font-semibold transition-all ${isActive
                                            ? 'bg-(--color-primary) text-white'
                                            : 'bg-white text-[var(--color-dark-01)] hover:bg-(--color-primary) hover:text-white'
                                            }`}
                                    >
                                        <span>{item.title}</span>
                                        <FaArrowRight className="text-sm" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Downloads Section */}
                    <div className="bg-(--color-dark-01) text-white p-8 rounded-xl space-y-5">
                        <h3 className="text-2xl font-bold">Download</h3>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FaFileAlt className="text-2xl text-white" />
                                <div>
                                    <h5 className="font-semibold text-base">Our Brochure</h5>
                                    <p className="text-xs text-gray-400">Download</p>
                                </div>
                            </div>
                            <button className="bg-(--color-primary) p-3 rounded-md hover:bg-(--color-primary-hover) transition-colors">
                                <FaArrowRight className="text-white text-sm" />
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FaFileAlt className="text-2xl text-white" />
                                <div>
                                    <h5 className="font-semibold text-base">Company Details</h5>
                                    <p className="text-xs text-gray-400">Download</p>
                                </div>
                            </div>
                            <button className="bg-(--color-primary) p-3 rounded-md hover:bg-[var(--color-primary-hover)] transition-colors">
                                <FaArrowRight className="text-white text-sm" />
                            </button>
                        </div>
                    </div>

                    {/* Promo Box */}
                    <div className="bg-(--color-dark-01) text-white p-8 rounded-xl text-center space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-2xl font-bold">Car Doctor</h4>
                            <p className="text-sm font-semibold">Need Help? We Are Here To Help You</p>
                        </div>
                        <div className="bg-white text-[var(--color-dark-01)] p-6 rounded-xl space-y-2">
                            <h5 className="text-xl font-bold text-(--color-primary)">
                                Car Doctor <span className="text-[var(--color-dark-01)]">Special</span>
                            </h5>
                            <p className="text-xs font-bold text-(--color-dark-03)">
                                Save up to <span className="text-(--color-primary)">60% off</span>
                            </p>
                            <div className="pt-2">
                                <button className="bg-(--color-primary) hover:bg-[var(--color-primary-hover)] text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors">
                                    Get A Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Price & Checkout */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-[var(--color-dark-01)]">
                            Price ${service.price}
                        </h3>
                        <Link href={`/checkout/${service._id}`} className="block">
                            <button className="w-full bg-(--color-primary) hover:bg-[var(--color-primary-hover)] text-white font-semibold py-4 rounded-xl transition-colors">
                                Proceed Checkout
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}