"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
    FaUser,
    FaEnvelope,
    FaDollarSign,
    FaCalendarAlt,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaSave,
    FaSpinner,
} from "react-icons/fa";

const BookingUpdateForm = ({ data }) => {
    const { data: session } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleUpdateBooking = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const date = form.date.value;
        const phone = form.phone.value;
        const address = form.address.value;

        if (!date || !phone || !address) {
            toast.error("Please fill in all required fields!");
            setLoading(false);
            return;
        }

        const bookingPayload = {
            date,
            phone,
            address,
        };

        try {
            const res = await fetch(`/api/my-bookings/${data?._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingPayload),
            });

            const responseData = await res.json();

            if (res.ok && responseData?.modifiedCount > 0) {
                toast.success("Booking updated successfully!");
                router.push("/my-bookings");
                router.refresh();
            } else {
                toast.error(responseData?.message || "No changes were made or update failed.");
            }
        } catch (error) {
            console.error("Update error:", error);
            toast.error("Something went wrong while updating!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="app-container my-10">
            <div className=" bg-base-100 rounded-2xl shadow-xl border border-base-200 overflow-hidden">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-[var(--color-dark-01)] to-[var(--color-primary)] p-6 sm:p-8 text-white">
                    <span className="text-xs uppercase tracking-widest font-bold opacity-80 block mb-1">
                        Update Booking
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold">
                        Update Service: <span className="text-(--color-primary) font-black">{data?.serviceTitle || "N/A"}</span>
                    </h2>
                </div>

                {/* Form Container */}
                <form onSubmit={handleUpdateBooking} className="p-6 sm:p-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaUser className="text-(--color-primary)" /> Customer Name
                            </label>
                            <input
                                defaultValue={session?.user?.name || data?.customerName || ""}
                                readOnly
                                type="text"
                                name="name"
                                className="input input-bordered w-full bg-base-200 cursor-not-allowed font-medium text-gray-600 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaEnvelope className="text-(--color-primary)" /> Email Address
                            </label>
                            <input
                                defaultValue={session?.user?.email || data?.email || ""}
                                readOnly
                                type="email"
                                name="email"
                                className="input input-bordered w-full bg-base-200 cursor-not-allowed font-medium text-gray-600 focus:outline-none"
                            />
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaDollarSign className="text-(--color-primary)" /> Due Amount
                            </label>
                            <input
                                type="text"
                                defaultValue={`$${data?.price || "0.00"}`}
                                readOnly
                                name="price"
                                className="input input-bordered w-full bg-base-200 cursor-not-allowed font-bold text-(--color-primary) focus:outline-none"
                            />
                        </div>

                        {/* Date */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaCalendarAlt className="text-(--color-primary)" /> Service Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                defaultValue={data?.date}
                                required
                                type="date"
                                name="date"
                                className="input input-bordered w-full focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaPhoneAlt className="text-(--color-primary)" /> Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                defaultValue={data?.phone}
                                required
                                type="tel"
                                name="phone"
                                placeholder="Enter Phone Number"
                                className="input input-bordered w-full focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) transition-all"
                            />
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-(--color-primary)" /> Present Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                defaultValue={data?.address}
                                required
                                type="text"
                                name="address"
                                placeholder="Enter Present Address"
                                className="input input-bordered w-full focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) transition-all"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex items-center justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="btn btn-ghost font-semibold text-gray-600 hover:bg-base-200"
                        >
                            Cancel
                        </button>
                        <button
                            disabled={loading}
                            type="submit"
                            className="btn bg-(--color-primary) hover:bg-[var(--color-primary-hover)] text-white font-bold px-8 h-12 rounded-xl shadow-md transition-all flex items-center gap-2 disabled:bg-gray-400"
                        >
                            {loading ? (
                                <>
                                    <FaSpinner className="animate-spin text-lg" /> Updating...
                                </>
                            ) : (
                                <>
                                    <FaSave className="text-lg" /> Save Changes
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BookingUpdateForm;