export default function List({blogs, children}) {
    return (
        <section className="grid md:grid-cols-1 lg:grid-cols-1 gap-4 mb-5">
            {blogs.map(blog => children(blog))}
        </section>
    )
}
1
