import {CourseCard, CourseList} from "@components/ui/course"
import {BaseLayout} from "@components/ui/layout"
import {getAllCourses} from "@content/courses/fetcher"
import {useOwnedCourses, useWalletInfo} from "@components/hooks/web3"
import {Button, Loader, Message} from "@components/ui/common"
import {OrderModal} from "@components/ui/order"
import {useState} from "react"
import {MarketHeader} from "@components/ui/marketplace"
import {useWeb3} from "@components/providers"

export default function Marketplace({courses}) {
    const {web3, contract, requireInstall} = useWeb3()
    const {hasConnectedWallet, isConnecting, account} = useWalletInfo()
    const {ownedCourses} = useOwnedCourses(courses, account.data)
    const [selectedCourse, setSelectedCourse] = useState(null)

    const purchaseCourse = async order => {
        const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id)
        const orderHash = web3.utils.soliditySha3(
            {type: "bytes16", value: hexCourseId},
            {type: "address", value: account.data}
        )
        const emailHash = web3.utils.sha3(order.email)
        const proof = web3.utils.soliditySha3(
            { type: "bytes32", value: emailHash },
            { type: "bytes32", value: orderHash }
        )

        const value = web3.utils.toWei(String(order.price))

        try {
            const result = await contract.methods.purchaseCourse(
                hexCourseId,
                proof
            ).send({from: account.data, value})
            console.log(result)
        } catch {
            console.error("Purchase course: Operation has failed.")
        }
    }

    return (
        <>
            <MarketHeader />
            <CourseList
                courses={courses}
            >
                {course =>
                    <CourseCard
                        key={course.id}
                        course={course}
                        disabled={!hasConnectedWallet}
                        Footer={() => {
                            if (requireInstall) {
                                return (
                                    <Button
                                        disabled={true}
                                        variant="lightPurple">
                                        Install
                                    </Button>
                                )
                            }

                            if (isConnecting) {
                                return (
                                    <Button
                                        disabled={true}
                                        variant="lightPurple">
                                        <Loader size="sm" />
                                    </Button>
                                )
                            }

                            if (!ownedCourses.hasInitialResponse) {
                                return (
                                    <div style={{height: "50px"}}></div>
                                )
                            }

                            const owned = ownedCourses.lookup[course.id]

                            if (owned) {
                                return (
                                    <>
                                        <div>
                                            <Button
                                                disabled={true}
                                                variant="green">
                                                Owned
                                            </Button>
                                            {owned.state === "deactivated" &&
                                            <Button
                                                disabled={false}
                                                onClick={() => alert("Re-activating")}
                                                variant="purple">
                                                Fund to Activate
                                            </Button>
                                            }
                                        </div>
                                        <div className="mt-1">
                                            {owned.state === "activated" &&
                                            <Message size="sm">
                                                Activated
                                            </Message>
                                            }
                                            {owned.state === "deactivated" &&
                                            <Message type="danger" size="sm">
                                                Deactivated
                                            </Message>
                                            }
                                            {owned.state === "purchased" &&
                                            <Message type="warning" size="sm">
                                                Waiting for Activation
                                            </Message>
                                            }
                                        </div>
                                    </>
                                )
                            }


                            return (
                                <Button
                                    onClick={() => setSelectedCourse(course)}
                                    disabled={!hasConnectedWallet}
                                    variant="lightPurple">
                                    Purchase
                                </Button>
                            )}
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
