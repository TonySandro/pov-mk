import bannerImage from '../../image/education-banner.jpg';
import InitialSection from '../../components/InitialPage/initialSection/InitialSection';
import { CourseObject, CourseObject1 } from './data';
import AllCourses from '../../components/InitialPage/allCourses/allCourses';

function Catalog() {
    return (
        <div>
            <InitialSection isAuthenticated={true} bannerImage={bannerImage} />
            <AllCourses courses={[CourseObject, CourseObject1]} />
        </div>
    );
}

export default Catalog;