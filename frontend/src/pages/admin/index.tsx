import AddCourse from "../../components/adminPage/addCourse/addCourse";
import CourseList from "../../components/adminPage/courseList/courseList";
import InitialAdminSection from "../../components/adminPage/initialAdminSection/initialAdminSection";

function AdminPage() {
  return (
    <div>
      <InitialAdminSection />
      <AddCourse />
      <CourseList />
    </div>
  );
}

export default AdminPage;
