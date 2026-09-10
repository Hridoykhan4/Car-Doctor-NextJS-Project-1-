import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="app-container section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Side: Overlapping Images Container */}
        <div className="relative w-full h-[380px] sm:h-[480px]">
          {/* Main Large Image */}
          <div className="relative w-[80%] h-[80%] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/about_us/person.jpg"
              alt="Person working on car doctor service"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Secondary Overlapping Small Image */}
          <div className="absolute right-0 bottom-0 w-[55%] h-[60%] rounded-xl overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="/assets/images/about_us/parts.jpg"
              alt="Car spare parts doctor"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content Box */}
        <div className="space-y-5">
          <h3 className="text-[var(--color-primary)] font-bold text-lg md:text-xl tracking-wide">
            About Us
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-dark-01)] leading-tight">
            We are qualified <br className="hidden sm:block" /> & of experience in this field
          </h2>

          <p className="text-[var(--color-dark-03)] text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>

          <p className="text-[var(--color-dark-03)] text-base leading-relaxed">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
          </p>

          <div className="pt-2">
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer shadow-md">
              Get More Info
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}