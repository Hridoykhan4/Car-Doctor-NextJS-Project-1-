import Image from 'next/image';
import React from 'react';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <section className="app-container min-h-[calc(100vh-100px)] flex items-center justify-center py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

        {/* Left Section (Vector Illustration) - Hidden on Mobile, Visible on MD+ */}
        <div className="hidden md:flex md:col-span-6 justify-center items-center">
          <div className="relative w-full max-w-[460px] h-[350px] lg:h-[500px]">
            <Image
              src="/assets/images/login/login.svg"
              alt="Authentication Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Section (Login Form Container) */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <LoginForm />
        </div>

      </div>
    </section>
  );
}