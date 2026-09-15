import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const blogPosts = [
    {
        id: "1",
        title: "How to Keep Your Car Engine Running Smoothly",
        excerpt: "Learn essential maintenance tips to prolong your car engine life and improve fuel efficiency.",
        author: "Admin",
        date: "Sep 15, 2026",
        img: "/assets/images/banner/1.jpg",
    },
    {
        id: "2",
        title: "Top 5 Signs Your Car Needs Brake Service Immediately",
        excerpt: "Don't ignore squeaking brakes! Discover the critical warning signs that need urgent repair.",
        author: "Mechanic Expert",
        date: "Sep 10, 2026",
        img: "/assets/images/banner/2.jpg",
    },
    {
        id: "3",
        title: "The Ultimate Guide to Car Battery Maintenance in Summer",
        excerpt: "Extreme heat can ruin your battery. Follow these simple steps to keep your battery fully charged.",
        author: "Car Doctor Team",
        date: "Sep 05, 2026",
        img: "/assets/images/banner/3.jpg",
    },
];

const BlogsPage = () => {
    return (
        <section className="app-container section-padding">
            {/* Section Header */}
            <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
                <h3 className="text-(--color-primary) font-bold text-lg md:text-xl tracking-wide uppercase">
                    Our Blog
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-dark-01)]">
                    Latest News & Articles
                </h2>
                <p className="text-[var(--color-dark-03)] text-sm md:text-base leading-relaxed">
                    Stay updated with the latest auto maintenance tips, repair guides, and industry updates from our experts.
                </p>
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((blog) => (
                    <div
                        key={blog.id}
                        className="group bg-white border border-[#E8E8E8] rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div>
                            {/* Image Banner */}
                            <div className="relative w-full h-52 overflow-hidden rounded-lg bg-[var(--color-dark-07)]">
                                <Image
                                    fill
                                    src={blog.img}
                                    alt={blog.title}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Meta Info (Author & Date) */}
                            <div className="flex items-center gap-4 text-xs font-medium text-[var(--color-dark-03)] mt-5">
                                <span className="flex items-center gap-1.5">
                                    <FaUser className="text-(--color-primary)" /> {blog.author}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <FaCalendarAlt className="text-(--color-primary)" /> {blog.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[var(--color-dark-02)] mt-3 line-clamp-2 leading-snug group-hover:text-(--color-primary) transition-colors">
                                {blog.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-sm text-[var(--color-dark-03)] mt-2 line-clamp-3 leading-relaxed">
                                {blog.excerpt}
                            </p>
                        </div>

                        {/* Read More Link */}
                        <div className="pt-5 mt-4 border-t border-base-200 flex items-center justify-between">
                            <button
                                className="font-bold text-sm text-(--color-primary) flex items-center gap-2 group/btn"
                            >
                                Read More
                                <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogsPage;