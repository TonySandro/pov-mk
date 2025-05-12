import AdminTabs from "../../components/adminPage/adminTabs/adminTabs";
import InitialAdminSection from "../../components/adminPage/initialAdminSection/initialAdminSection";

function AdminPage() {
  return (
    <div>
      <InitialAdminSection />
      <AdminTabs />
    </div>
  );
}

export default AdminPage;
