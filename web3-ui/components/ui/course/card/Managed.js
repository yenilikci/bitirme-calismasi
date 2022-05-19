const Item = ({title, value, className}) => {

    return (
        <div className={`${className} px-4 py-2 sm:px-6`}>
            <div className="text-sm font-medium text-gray-500 dark:text-slate-200">
                {title}
            </div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-slate-300">
                {value}
            </div>
        </div>
    )
}


export default function ManagedCourseCard({children, course, isSearched = false}) {

    return (
        <div
            className={`${isSearched ? "border-indigo-600" : "bg-gray-200 dark:bg-gray-700"} dark:border-gray-600 bg-white border shadow overflow-hidden sm:rounded-lg mb-3`}>
            {Object.keys(course).map((key, i) =>
                <Item
                    key={key}
                    className={`${i % 2 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-600"}`}
                    title={key[0].toUpperCase() + key.slice(1)}
                    value={course[key]}
                />
            )}
            <div className="bg-white px-4 py-5 sm:px-6 dark:bg-gray-800 dark:border-gray-600">
                {children}
            </div>
        </div>
    )
}
