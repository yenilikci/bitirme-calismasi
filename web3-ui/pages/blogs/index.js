import {BaseLayout} from "@components/ui/layout"
import {getAllBlogs, getAllCourses} from "@content/courses/fetcher"
import {Button} from "@components/ui/common";
import {CourseCard, CourseList} from "@components/ui/course";
import {BlogCard, BlogHero, BlogList} from "@components/ui/blog";
import Link from "next/link";

export default function Blogs({blogs}) {
    return (
        <>
            <BlogHero/>
            <BlogList
                blogs={blogs}
            >
                {course =>
                    <BlogCard
                        key={course.id}
                        course={course}
                        Footer={() => {
                            return (
                                <Link href={"/courses/" + course.slug}>
                                    <Button
                                        size="sm"
                                        variant="lightPurple"
                                    >
                                        Read More
                                    </Button>
                                </Link>
                            )
                        }}
                    />
                }
            </BlogList>

        </>
    )
}

export function getStaticProps() {
    const {data} = getAllBlogs()
    return {
        props: {
            blogs: data
        }
    }
}

Blogs.Layout = BaseLayout
