import bannerImage from '../../image/education-banner.jpg';
import { CourseObject, CourseObject1 } from './data';
import AllCourses from '../../components/initialPage/allCourses/allCourses';
import InitialSection from '../../components/initialPage/initialSection/initialSection';

function Catalog() {
    return (
        <div>
            <InitialSection isAuthenticated={true} bannerImage={bannerImage} />
            <AllCourses courses={[CourseObject, CourseObject1]} />
        </div>
    );
}

export default Catalog;