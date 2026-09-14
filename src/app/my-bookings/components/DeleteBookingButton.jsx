"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";


export default function DeleteBookingButton({ id }) {
    const router = useRouter();
    const handleDelete = async (id) => {
        const res = await fetch(
            `http://localhost:3000/api/service/${id}`,
            {
                method: "DELETE",
            }
        );
        const data = await res.json();
        if (data.deletedCount) {
            toast.success('Deleted Successfully')
            router.refresh();
        }
    };
    return (

        <td className="text-center py-4 px-6">
            <button onClick={() => handleDelete(id)} className="btn btn-circle btn-xs btn-outline border-gray-300 hover:bg-red-500 hover:border-red-500 text-gray-400 hover:text-white transition-all">
                <FaTimes className="text-xs" />
            </button>
        </td>

    );
}
