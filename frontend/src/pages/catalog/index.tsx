import bannerImage from '../../image/education-banner.jpg';
import InitialSection from '../../components/InitialPage/InitialSection/InitialSectionComponent';

function Catalog() {
    return (
        <div>
            <InitialSection isAuthenticated={true} bannerImage={bannerImage} />
        </div>
    );
}

export default Catalog;