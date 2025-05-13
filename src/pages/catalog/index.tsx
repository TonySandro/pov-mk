import { CourseObject, CourseObject1 } from './data';
import AllCourses from '../../components/initialPage/allCourses/allCourses';
import InitialSection from '../../components/initialPage/initialSection/initialSection';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function Catalog() {
    const isLogged = useAppSelector(state => state.user.isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged) {
            navigate('/');
        }
    }, [isLogged, navigate]);

    return (
        <div>
            <InitialSection />
            <AllCourses courses={[CourseObject, CourseObject1]} />
        </div>
    );
}

export default Catalog;