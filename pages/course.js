import {CourseHero, Curriculum, Keypoints} from "@components/course";
import {Modal} from "@components/common";

export default function Course() {

    return (
        <div className="relative max-w-7xl mx-auto px-4">
            <CourseHero/>
            <Keypoints/>
            <Curriculum/>
            <Modal/>
        </div>
    );
}
