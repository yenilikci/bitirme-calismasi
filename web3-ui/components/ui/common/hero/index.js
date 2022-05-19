import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Hero() {

    const {t} = useTranslation();
    return(
        <section className="lg:2/6 text-left my-6 p-10 bg-white dark:bg-gray-700">
            <div className="text-6xl font-semibold text-gray-900 dark:text-slate-300 leading-none">
                {t('common:Grow your career as a developer')}
            </div>
            <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                {t('common:Learn programming with safe and sure steps!')}
            </div>
            <div className="mt-5 sm:mt-8 flex lg:justify-start">
                <div className="rounded-md shadow">
                    <Link href="/marketplace">
                        <a
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            {t('common:Lets start!')}
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}
