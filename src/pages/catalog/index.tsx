import { CourseObject, CourseObject1 } from './data';
import AllCourses from '../../components/initialPage/allCourses/allCourses';
import InitialSection from '../../components/initialPage/initialSection/initialSection';

function Catalog() {
    return (
        <div>
            <InitialSection />
            <AllCourses courses={[CourseObject, CourseObject1]} />
        </div>
    );
}

export default Catalog;