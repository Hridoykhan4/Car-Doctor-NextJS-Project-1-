'use client'
import React from 'react'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa6'

export default function SocialLogin() {
    return (
        <div className="flex items-center justify-center gap-4">
            <button
                type="button"
                className="w-12 h-12 rounded-full bg-[#F5F5F8] flex items-center justify-center text-[#3B5998] hover:opacity-80 transition-opacity cursor-pointer"
            >
                <FaFacebookF className="text-lg" />
            </button>
            <button
                type="button"
                className="w-12 h-12 rounded-full bg-[#F5F5F8] flex items-center justify-center text-[#0A66C2] hover:opacity-80 transition-opacity cursor-pointer"
            >
                <FaLinkedinIn className="text-lg" />
            </button>
            <button
                type="button"
                className="w-12 h-12 rounded-full bg-[#F5F5F8] flex items-center justify-center text-[#EA4335] hover:opacity-80 transition-opacity cursor-pointer"
            >
                <FaGoogle className="text-lg" />
            </button>
        </div>
    )
}
