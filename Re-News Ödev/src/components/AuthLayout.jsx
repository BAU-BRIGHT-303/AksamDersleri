import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { isLoggedIn } from "./MainLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const AuthLayout = () => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="spin-load text-center d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  //eğer kullanıcı mevcutsa navigate işlemiyle beraber anasayfaya yollama işlemini gerçekleştiriyoruz.
  if (user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
export default AuthLayout;
