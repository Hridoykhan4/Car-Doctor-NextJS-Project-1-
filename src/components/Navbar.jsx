import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const navMenu = (
        <>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={"/about"}>About</Link>
            </li>
            <li>
                <Link href={"/services"}>Services</Link>
            </li>
            <li>
                <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
                <Link href={"/my-bookings"}>My Bookings</Link>
            </li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 bg-base-100 py-2 border-b border-gray-100 shadow-xs">
            <div className="app-container">
                <div className="navbar p-0 min-h-16">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                {navMenu}
                            </ul>
                        </div>
                        <Link href={'/'} className="relative w-20 h-12 md:w-28 md:h-16">
                            <Image
                                src={"/assets/logo.svg"}
                                alt="Car Doctor"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold text-[#444444]">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link href={"/register"}>Register</Link>
                            </li>
                            <li>
                                <Link href={"/login"}>Login</Link>
                            </li>
                        </ul>
                        <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white">
                            Appointment
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;