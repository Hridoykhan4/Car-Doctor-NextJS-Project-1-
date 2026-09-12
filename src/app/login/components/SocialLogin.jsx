'use client';

import { signIn } from 'next-auth/react';
import React from 'react';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';

export default function SocialLogin() {
    const handleSocialLogin = (provider) => {
        signIn(provider, { callbackUrl: '/' });
        toast.success(`Logged in Successfully using ${provider}`)
    };

    return (
        <div className="flex items-center justify-center gap-4">
            <button
                onClick={() => handleSocialLogin('google')}
                type="button"
                className="w-12 h-12 rounded-full bg-[#F5F5F8] flex items-center justify-center text-[#EA4335] hover:opacity-80 transition-opacity cursor-pointer"
            >
                <FaGoogle className="text-lg" />
            </button>
            <button
                onClick={() => handleSocialLogin('github')}
                type="button"
                className="w-12 h-12 rounded-full bg-[#F5F5F8] flex items-center justify-center text-[#3B5998] hover:opacity-80 transition-opacity cursor-pointer"
            >
                <FaGithub className="text-lg" />
            </button>
        </div>
    );
}