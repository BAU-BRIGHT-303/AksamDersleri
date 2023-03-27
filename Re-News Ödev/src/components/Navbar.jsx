import { React } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { signOut } from "firebase/auth";

function Navbar() {
  const [user, isLoading] = useAuthState(auth);
  const handleSignOut = useCallback(() => {
    signOut(auth);
  });
  if (isLoading) {
    return <h1>Yükleniyor...</h1>;
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ height: 100 }}
      >
        <a className="navbar-brand " href="#">
          RE-NEWS <i class="fa-solid fa-newspaper"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link txt" href="/">
                Anasayfa <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link txt" href="/admin">
                Admin Page <i class="fa-solid fa-user"></i>
              </a>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link kullanici txt" href="#">
              {user.email}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link txt active text-danger"
              href="#"
              onClick={handleSignOut}
            >
              <i class=" txt fa-solid fa-right-from-bracket"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
