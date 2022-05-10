import {CourseCard, CourseList} from "@components/ui/course"
import {BaseLayout} from "@components/ui/layout"
import {getAllCourses} from "@content/courses/fetcher"
import {useWalletInfo} from "@components/hooks/web3"
import {Button} from "@components/ui/common"
import {OrderModal} from "@components/ui/order"
import {useState} from "react"
import {MarketHeader} from "@components/ui/marketplace"
import {useWeb3} from "@components/providers"

export default function Marketplace({courses}) {
    const {web3} = useWeb3()
    const {canPurchaseCourse, account} = useWalletInfo()
    const [selectedCourse, setSelectedCourse] = useState(null)

    const purchaseCourse = order => {
        const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id)
        console.log(hexCourseId)

        // hex course ID:
        // 0x31343130343734000000000000000000

        // address
        // 0xD5461F3f05827BF224C09dF3071145711F5eBfA1 - melih

        // 31343130343734000000000000000000D5461F3f05827BF224C09dF3071145711F5eBfA1
        // Order Hash
        // 31343130343734000000000000000000D5461F3f05827BF224C09dF3071145711F5eBfA1 => keccak 256 hex => 57f8318fe83931705dbfa0d62bfaf56856d7c7b48b114214a23adf387b03bdc6
        const orderHash = web3.utils.soliditySha3(
            {type: "bytes16", value: hexCourseId},
            {type: "address", value: account.data}
        )

        console.log(orderHash)
        // test@gmail.com
        // af257bcc3cf653863a77012256c927f26d8ab55c5bea3751063d049d0538b902 => (keccak 256 text)
        const emailHash = web3.utils.sha3(order.email)

        console.log(emailHash)

        // af257bcc3cf653863a77012256c927f26d8ab55c5bea3751063d049d0538b90257f8318fe83931705dbfa0d62bfaf56856d7c7b48b114214a23adf387b03bdc6

        // proof:
        // emailHash+orderHash => keccak 256 hex =>  b7645b75a6a30b84f1650ec95701bed7b81f89de4fc60ddcbdbc4ea0ee92a6ee
        const proof = web3.utils.soliditySha3(
            {type: "bytes32", value: emailHash},
            {type: "bytes32", value: orderHash}
        )

        console.log(proof)
    }

    return (
        <>
            <div className="py-4">
                <MarketHeader/>
            </div>
            <CourseList
                courses={courses}
            >
                {course =>
                    <CourseCard
                        key={course.id}
                        course={course}
                        disabled={!canPurchaseCourse}
                        Footer={() =>
                            <div className="mt-4">
                                <Button
                                    onClick={() => setSelectedCourse(course)}
                                    disabled={!canPurchaseCourse}
                                    variant="lightPurple">
                                    Purchase
                                </Button>
                            </div>
                        }
                    />
                }
            </CourseList>
            { selectedCourse &&
            <OrderModal
                course={selectedCourse}
                onSubmit={purchaseCourse}
                onClose={() => setSelectedCourse(null)}
            />
            }
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

Marketplace.Layout = BaseLayout
