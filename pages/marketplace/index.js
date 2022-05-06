import {CourseList} from "@components/ui/course";
import {BaseLayout} from "@components/ui/layout";
import {getAllCourses} from "@content/courses/fetcher";
import {Walletbar} from "@components/ui/web3";
import {useAccount} from "@components/providers/hooks/web3/useAccount";

export default function Marketplace({courses}) {
    const {account} = useAccount();
    return (
        <>
            <div className="py-4">
                <Walletbar address={account.data}/>
            </div>
            <CourseList courses={courses}/>
        </>
    );
}

export function getStaticProps() {
    const {data} = getAllCourses();
    return {
        props: {
            courses: data
        },
    };
}

Marketplace.Layout = BaseLayout;
