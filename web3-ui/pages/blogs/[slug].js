import {BaseLayout} from "@components/ui/layout";
import {getAllBlogs} from "@content/courses/fetcher";

export default function Blog({blog}) {
    return (
        <>
            <div className="py-4">
                <main className="relative container mx-auto bg-white px-4 dark:bg-gray-700">
                    <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
                        <img className="absolute inset-0 object-cover object-top w-full h-full filter blur"
                             src={blog.coverImage}
                             alt=""/>
                    </div>
                    <div className="mt-[-10%] w-1/2 mx-auto">
                        <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
                            <img className="w-full h-full absolute inset-0 object-cover"
                                 src={blog.coverImage}
                                 alt=""/>
                        </div>
                    </div>
                    <article className="max-w-prose mx-auto py-8">
                        <h1 className="text-2xl font-bold">{blog.title}</h1>
                        <p className="mt-6">{blog.description}</p>
                    </article>
                </main>
            </div>
        </>
    )
}

export function getStaticPaths() {
    const {data} = getAllBlogs()

    return {
        paths: data.map(c => ({
            params: {
                slug: c.slug
            }
        })),
        fallback: false
    }
}


export function getStaticProps({params}) {
    const {data} = getAllBlogs()
    const blog = data.filter(c => c.slug === params.slug)[0]

    return {
        props: {
            blog
        }
    }
}

Blog.Layout = BaseLayout
