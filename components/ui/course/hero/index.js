import Image from "next/image"

export default function Hero({
                                 title,
                                 description,
                                 image,
                                 hasOwner
                             }) {


    return (
        <section>
            <div className="relative bg-white overflow-hidden dark:bg-gray-700">
                <div className="max-w-7xl mx-auto dark:bg-gray-700">
                    <div
                        className="dark:bg-gray-700 relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        </div>
                        <main
                            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                {hasOwner &&
                                <div
                                    className="text-xl my-3 inline-block p-4 py-2 rounded-full font-bold bg-green-200 text-green-700">
                                    You are owner of:
                                </div>
                                }
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="dark:bg-gray-700 block xl:inline">
                    {title.substring(0, title.length / 2)}
                  </span>
                                    <span className="block text-indigo-600 dark:text-indigo-300 xl:inline">
                    {title.substring(title.length / 2)}
                  </span>
                                </h1>
                                <p className="dark:text-slate-200 mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    {description}
                                </p>
                                <div
                                    className="dark:bg-gray-700 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a href="#"
                                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                            Get started
                                        </a>
                                    </div>
                                    <div className="dark:bg-gray-700 mt-3 sm:mt-0 sm:ml-3">
                                        <a href="#"
                                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                            Watch
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <Image
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src={image}
                        alt={title}
                        layout="fill"
                    />
                </div>
            </div>
        </section>
    )
}
