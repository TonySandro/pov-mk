import { useNavigate } from "react-router";
import AdminTabs from "../../components/adminPage/adminTabs/adminTabs";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useEffect } from "react";
import LogoutButton from "../../components/logout/logoutButton";
import InitialBar from "../../components/initialBar/initialBar";

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
      <LogoutButton />
      <InitialBar />
      <AdminTabs />
    </div>
  );
}

export default AdminPage;
