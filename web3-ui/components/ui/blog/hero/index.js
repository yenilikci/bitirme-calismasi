import Link from "next/link";

export default function Hero() {
    return(
        <section className="lg:2/6 text-left my-6 p-10 bg-white dark:bg-gray-700">
            <div className="text-6xl font-semibold text-gray-900 dark:text-slate-300 leading-none">
                Blog Page
            </div>
            <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                Up-to-date content and information guides.
            </div>
        </section>
    );
}
