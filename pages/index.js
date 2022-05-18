import {Button, Hero} from "@components/ui/common"
import { CourseList, CourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@content/courses/fetcher"
import Link from "next/link";

export default function Home({courses}) {
    return (
        <>
            <Hero />
            <CourseList
                courses={courses}
            >
                {course =>
                    <CourseCard
                        key={course.id}
                        course={course}
                        Footer={() => {
                            return (
                                <Link href={"/courses/"+course.slug}>
                                    <Button
                                        size="sm"
                                        variant="lightPurple"
                                    >
                                        View Details
                                    </Button>
                                </Link>
                            )
                        }}
                    />
                }
            </CourseList>
        </>
    )
}

export function getStaticProps() {
    const { data } = getAllCourses()
    return {
        props: {
            courses: data
        }
    }
}

Home.Layout = BaseLayout
