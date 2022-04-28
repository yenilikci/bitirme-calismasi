import {CourseHero, Curriculum, Keypoints} from "@components/course";
import {Modal} from "@components/common";
import {BaseLayout} from "@components/layout";

export default function Course() {

    return (
        <>
            <div className="py-4">
                <CourseHero/>
            </div>
            <Keypoints/>
            <div className="py-4">
                <Curriculum/>
            </div>
            <Modal/>
        </>
    );
}

Course.Layout = BaseLayout;
