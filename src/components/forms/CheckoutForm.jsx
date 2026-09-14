'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaUser, FaEnvelope, FaDollarSign, FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const CheckoutForm = ({ service }) => {
    const { data: session } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleBookService = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const name = session?.user?.name || form.name.value;
        const email = session?.user?.email || form.email.value;
        const price = service?.price;
        const serviceTitle = service?.title;
        const serviceId = service?._id;
        const date = form.date.value;
        const phone = form.phone.value;
        const address = form.address.value;

        // Basic Front-end Validation
        if (!date || !phone || !address) {
            toast.error("Please fill in all required fields!");
            setLoading(false);
            return;
        }

        const newBooking = {
            customerName: name,
            email,
            price,
            serviceTitle,
            serviceId,
            date,
            phone,
            address,
            status: "Pending",
            createdAt: new Date(),
        };

        try {
            const res = await fetch('http://localhost:3000/api/service', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newBooking),
            });

            const data = await res.json();


            if (data?.insertedId) {
                toast.success('Service booked successfully!');
                form.reset();
                router.push('/my-bookings');
            } else {
                toast.error('Failed to book the service. Please try again.');
            }
        } catch (error) {
            toast.error('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="my-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-xl border border-base-300 overflow-hidden">

                {/* Header Banner */}
                <div className="bg-gradient-to-r from-[var(--color-dark-01)] to-[var(--color-primary)] p-6 sm:p-8 text-white">
                    <span className="text-xs uppercase tracking-widest font-bold opacity-80 block mb-1">
                        Checkout Overview
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold">
                        Book Service: <span className="text-(--color-primary) font-black">{service?.title}</span>
                    </h2>
                </div>

                {/* Form Container */}
                <form onSubmit={handleBookService} className="p-6 sm:p-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Customer Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaUser className="text-(--color-primary)" /> Customer Name
                            </label>
                            <input
                                defaultValue={session?.user?.name || ''}
                                readOnly
                                type="text"
                                name="name"
                                className="input input-bordered w-full bg-base-200 cursor-not-allowed font-medium text-gray-600 focus:outline-none"
                            />
                        </div>

                        {/* Customer Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaEnvelope className="text-(--color-primary)" /> Email Address
                            </label>
                            <input
                                defaultValue={session?.user?.email || ''}
                                readOnly
                                type="email"
                                name="email"
                                className="input input-bordered w-full bg-base-200 cursor-not-allowed font-medium text-gray-600 focus:outline-none"
                            />
                        </div>

                        {/* Due Amount */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaDollarSign className="text-(--color-primary)" /> Due Amount
                            </label>
                            <input
                                type="text"
                                defaultValue={`$${service?.price || '0.00'}`}
                                readOnly
                                name="price"
                                className="input input-bordered w-full bg-base-200 cursor-not-allowed font-bold text-(--color-primary) focus:outline-none"
                            />
                        </div>

                        {/* Date Picker */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaCalendarAlt className="text-(--color-primary)" /> Select Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                type="date"
                                name="date"
                                className="input input-bordered w-full focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) transition-all"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaPhoneAlt className="text-(--color-primary)" /> Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                placeholder="+880 1700 000000"
                                className="input input-bordered w-full focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) transition-all"
                            />
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-(--color-primary)" /> Present Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="address"
                                placeholder="House / Street / City"
                                className="input input-bordered w-full focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) transition-all"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            disabled={loading}
                            type="submit"
                            className="btn bg-(--color-primary) hover:bg-[var(--color-primary-hover)] text-white w-full border-none font-bold text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer disabled:bg-gray-400"
                        >
                            {loading ? (
                                <>
                                    <FaSpinner className="animate-spin text-xl" /> Confirming Order...
                                </>
                            ) : (
                                <>
                                    <FaCheckCircle className="text-xl" /> Confirm Order
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CheckoutForm;