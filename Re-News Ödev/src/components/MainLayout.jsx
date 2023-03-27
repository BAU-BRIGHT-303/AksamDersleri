import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Navbar from "./Navbar";

const MainLayout = () => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

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
  //Bu layoutumuzda eğer kullanıcı giriş yapmamışsa yani bir kullanıcı mevcut değilse firekt olarak navigate işlemine alarak sign-in sayfasına yolluyoruz.
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />;
    </div>
  );
};
export default MainLayout;
