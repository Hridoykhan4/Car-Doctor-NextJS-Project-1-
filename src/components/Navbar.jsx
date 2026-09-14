'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const pathname = usePathname();
    const { status, data: session } = useSession();

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Blogs", path: "/blogs" },
        { title: "My Bookings", path: "/my-bookings" },
    ];

    // User Avatar UI Component
    const renderUserAvatar = () => {
        if (!session?.user) return null;

        return session.user.image ? (
            <Image
                src={session.user.image}
                width={40}
                height={40}
                alt={session.user.name || "User Avatar"}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#FF3811]/30 p-0.5 shadow-sm"
            />
        ) : (
            <div className="w-10 h-10 rounded-full bg-[#FF3811]/10 border-2 border-[#FF3811]/30 flex items-center justify-center text-[#FF3811] font-bold text-sm">
                {session.user.name ? session.user.name.charAt(0).toUpperCase() : "U"}
            </div>
        );
    };

    const renderNavMenu = () => (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                    <li key={link.path}>
                        <Link
                            href={link.path}
                            className={`font-semibold text-base transition-colors ${isActive
                                ? "text-[#FF3811] font-bold"
                                : "text-[#444444] hover:text-[#FF3811]"
                                }`}
                        >
                            {link.title}
                        </Link>
                    </li>
                );
            })}
        </>
    );

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
            <div className="app-container px-4 sm:px-6 lg:px-8">
                <div className="navbar p-0 min-h-[80px] flex items-center justify-between">

                    {/* Navbar Start: Logo & Mobile Menu */}
                    <div className="navbar-start flex items-center">
                        <div className="dropdown lg:hidden">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost p-1 mr-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                aria-label="Toggle Navigation Menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white rounded-xl z-50 mt-3 w-60 p-3 shadow-xl border border-gray-100 space-y-2"
                            >
                                {renderNavMenu()}

                                <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                                    {status === 'authenticated' ? (
                                        <>
                                            <div className="flex items-center gap-3 px-2 py-1">
                                                {renderUserAvatar()}
                                                <span className="font-semibold text-sm text-gray-800 truncate">
                                                    {session?.user?.name || session?.user?.email}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => signOut()}
                                                className="w-full text-left px-3 py-2 text-sm font-semibold text-[#FF3811] hover:bg-[#FF3811]/10 rounded-lg transition-colors cursor-pointer"
                                            >
                                                Log Out
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href="/login"
                                                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#FF3811] transition-colors"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                href="/register"
                                                className="px-3 py-2 text-sm font-semibold text-[#FF3811] hover:bg-[#FF3811]/10 rounded-lg transition-colors"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </ul>
                        </div>

                        {/* Brand Logo */}
                        <Link href="/" className="relative w-24 h-12 md:w-28 md:h-14 flex items-center">
                            <Image
                                src="/assets/logo.svg"
                                alt="Car Doctor Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navbar Center: Desktop Links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            {renderNavMenu()}
                        </ul>
                    </div>

                    {/* Navbar End: Auth Actions & Appointment CTA */}
                    <div className="navbar-end flex items-center gap-3 md:gap-4">
                        <div className="hidden sm:flex items-center gap-3">
                            {status === 'authenticated' ? (
                                <div className="flex items-center gap-3">
                                    {renderUserAvatar()}
                                    <button
                                        onClick={() => signOut()}
                                        className="btn btn-ghost text-[#FF3811] hover:bg-[#FF3811] hover:text-white font-semibold text-sm md:text-base border border-[#FF3811] rounded-lg transition-all cursor-pointer"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Link
                                        href="/login"
                                        className="px-3 py-2 text-sm md:text-base font-semibold text-gray-700 hover:text-[#FF3811] transition-colors"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="px-3 py-2 text-sm md:text-base font-semibold text-[#FF3811] hover:bg-[#FF3811]/10 rounded-lg transition-colors"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Appointment CTA Button */}
                        <Link
                            href="/appointment"
                            className="btn bg-transparent border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white font-semibold text-sm md:text-base px-4 md:px-6 rounded-lg transition-all"
                        >
                            Appointment
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;