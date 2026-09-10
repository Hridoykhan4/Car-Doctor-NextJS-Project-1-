import React from 'react';
import { FaWrench } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
            {/* Spinning Wrench Icon Container */}
            <div className="relative flex items-center justify-center w-20 h-20">
                {/* Background Pulsing Circle */}
                <div className="absolute inset-0 rounded-full bg-[var(--color-primary)]/15 animate-ping" />

                {/* Spinner Ring */}
                <div className="w-16 h-16 border-4 border-[var(--color-dark-07)] border-t-[var(--color-primary)] rounded-full animate-spin" />

                {/* Center Icon */}
                <FaWrench className="absolute text-[var(--color-primary)] text-xl animate-bounce" />
            </div>

            {/* Loading Text */}
            <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-[var(--color-dark-01)] tracking-wide">
                    Car Doctor
                </h3>
                <p className="text-sm font-medium text-[var(--color-dark-03)] animate-pulse">
                    Loading resources, please wait...
                </p>
            </div>
        </div>
    );
};

export default Loading;