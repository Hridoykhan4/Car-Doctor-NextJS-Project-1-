'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import SocialLogin from './SocialLogin';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loadingToast = toast.loading('Signing in...');

        try {

            const res = await signIn('credentials', {
                email,
                password,
                callbackUrl: '/',
                redirect: false
            });
            toast.dismiss(loadingToast);
            if (res.ok) {
                toast.success('Logged in successfully!');
                form.reset();
                router.push('/');
                router.refresh();
            }
            else {
                toast.error('Failed to Login')
            }
        }

        catch (err) {
            toast.dismiss(loadingToast);
            toast.error('Network error. Please try again.');
        }

        finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full max-w-[600px] mx-auto p-8 md:p-16 border border-[#E8E8E8] rounded-xl bg-white shadow-xs">
            {/* Header Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-dark-01)] mb-8">
                Login
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Email Field */}
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
                        className="input input-bordered w-full h-12 px-4 rounded-lg focus:outline-[var(--color-primary)] border-[#E8E8E8] text-[var(--color-dark-01)] bg-white"
                        autoComplete="off"
                        suppressHydrationWarning
                        disabled={loading}
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="form-control w-full space-y-2">
                    <label className="label p-0">
                        <span className="label-text font-semibold text-base text-[var(--color-dark-02)]">
                            Password
                        </span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        className="input input-bordered w-full h-12 px-4 rounded-lg focus:outline-[var(--color-primary)] border-[#E8E8E8] text-[var(--color-dark-01)] bg-white"
                        disabled={loading}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-3.5 rounded-lg transition-colors text-base mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <span className="loading loading-spinner loading-sm"></span>
                            Signing In...
                        </>
                    ) : (
                        'Sign In'
                    )}
                </button>
            </form>

            {/* Social Login & Footer Links */}
            <div className="text-center mt-8 space-y-6">
                <p className="text-sm text-[var(--color-dark-03)] font-medium">
                    Or Sign In with
                </p>

                <SocialLogin />

                <p className="text-sm text-[var(--color-dark-03)]">
                    Have an account?{' '}
                    <Link
                        href="/register"
                        className="text-[var(--color-primary)] font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );

}
