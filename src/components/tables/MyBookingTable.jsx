import DeleteBookingButton from "@/app/my-bookings/components/DeleteBookingButton";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

const MyBookingTable = ({ data }) => {
    return (
        <div className="app-container my-10 ">

            {/* Header Title */}
            <h1 className="text-center font-extrabold text-3xl sm:text-4xl mb-8 text-[var(--color-dark-01)]">
                My All Bookings
            </h1>

            {/* Table Container */}
            <div className="w-full overflow-x-auto bg-base-100 rounded-2xl shadow-sm border border-base-200">
                <table className="w-full table align-middle">
                    {/* Table Head */}
                    <thead className="bg-base-200/60 text-[var(--color-dark-02)] font-bold text-sm border-b border-base-200">
                        <tr>
                            <th className="py-4 px-6 text-center">Action</th>
                            <th>Service Name</th>
                            <th>Service Date</th>
                            <th>Service Price</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Edit</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-base-200">
                        {data && data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item._id} className="hover:bg-base-200/30 transition-colors">
                                    {/* Action - Delete Button */}
                                    <DeleteBookingButton id={item._id}></DeleteBookingButton>

                                    {/* Service Title */}
                                    <td className="font-bold text-[var(--color-dark-01)] text-base">
                                        {item.serviceTitle || "N/A"}
                                    </td>

                                    {/* Service Date */}
                                    <td className="text-gray-600 font-medium">
                                        {item.date}
                                    </td>

                                    {/* Price */}
                                    <td className="font-bold text-(--color-primary) text-base">
                                        ${item.price}
                                    </td>

                                    {/* Phone */}
                                    <td className="text-gray-600 font-medium">
                                        {item.phone}
                                    </td>

                                    {/* Address */}
                                    <td className="text-gray-600 max-w-xs truncate font-medium">
                                        {item.address}
                                    </td>

                                    {/* Status Badge */}
                                    <td className="text-center">
                                        <span className={`badge font-semibold py-3 px-4 rounded-lg border-none ${item.status === 'Approved'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-amber-100 text-amber-800'
                                            }`}>
                                            {item.status || 'Pending'}
                                        </span>
                                    </td>

                                    {/* Edit Link */}
                                    <td className="text-center">
                                        <Link
                                            href={`/my-bookings/${item._id}`}
                                            className="btn btn-square btn-ghost btn-sm text-gray-500 hover:text-(--color-primary)"
                                        >
                                            <FaRegEdit className="h-5 w-5" />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center py-12 text-gray-500 font-medium text-lg">
                                    No bookings found!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookingTable;