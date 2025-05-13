import { useNavigate } from "react-router";
import AdminTabs from "../../components/adminPage/adminTabs/adminTabs";
import InitialAdminSection from "../../components/adminPage/initialAdminSection/initialAdminSection";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useEffect } from "react";

function AdminPage() {
  const isLogged = useAppSelector(state => state.user.isAuthenticated);
  const user = useAppSelector(state => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged || user?.role !== 'admin') {
      navigate('/');
    }
  }, [isLogged, user, navigate]);

  return (
    <div>
      <InitialAdminSection />
      <AdminTabs />
    </div>
  );
}

export default AdminPage;
