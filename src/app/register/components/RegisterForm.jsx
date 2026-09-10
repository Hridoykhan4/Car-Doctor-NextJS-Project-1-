'use client';
import React from 'react';
import Link from 'next/link';
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/login/components/SocialLogin';

export default function RegisterForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value; // Fixed bug here
        const password = form.password.value;

        await registerUser({ name, email, password });
    };

    return (
        <div className="w-full max-w-[600px] mx-auto p-8 md:p-16 border border-[#E8E8E8] rounded-xl bg-white shadow-xs">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-dark-01)] mb-8">
                Sign Up
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name Input */}
                <div className="form-control w-full space-y-2">
                    <label className="label p-0">
                        <span className="label-text font-semibold text-base text-[var(--color-dark-02)]">
                            Name
                        </span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="input input-bordered w-full h-12 px-4 rounded-lg focus:outline-[var(--color-primary)] border-[#E8E8E8]"
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="form-control w-full space-y-2">
                    <label className="label p-0">
                        <span className="label-text font-semibold text-base text-[var(--color-dark-02)]">
                            Email
                        </span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="input input-bordered w-full h-12 px-4 rounded-lg focus:outline-[var(--color-primary)] border-[#E8E8E8]"
                        autoComplete="off"
                        suppressHydrationWarning
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="form-control w-full space-y-2">
                    <label className="label p-0">
                        <span className="label-text font-semibold text-base text-[var(--color-dark-02)]">
                            Confirm Password
                        </span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        className="input input-bordered w-full h-12 px-4 rounded-lg focus:outline-[var(--color-primary)] border-[#E8E8E8]"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-3.5 rounded-lg transition-colors text-base mt-2 cursor-pointer"
                >
                    Sign Up
                </button>
            </form>

            {/* Divider & Social Login */}
            <div className="text-center mt-8 space-y-6">
                <p className="text-sm text-[var(--color-dark-03)] font-medium">
                    Or Sign Up with
                </p>

                <SocialLogin />

                <p className="text-sm text-[var(--color-dark-03)]">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[var(--color-primary)] font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}