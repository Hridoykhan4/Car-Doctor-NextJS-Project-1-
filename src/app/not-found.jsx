import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="app-container min-h-[calc(100vh-100px)] flex flex-col items-center justify-center py-12 text-center">
            {/* 404 Illustration Container */}
            <div className="relative w-full max-w-[600px] h-[350px] sm:h-[400px] mb-8">
                <Image
                    src="/assets/images/404.jpg"
                    alt="404 Page Not Found"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Action Button */}   
            <div>
                <Link
                    href="/"
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 inline-block shadow-md"
                >
                    Back to Home
                </Link>
            </div>
        </section>
    );
}