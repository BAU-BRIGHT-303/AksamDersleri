import { useState, useCallback } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../firebase";
import { Link, NavLink, Route } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email) {
        return;
      }
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert(
            "Şifre değişimi için mail tarafınıza iletildi. Bu işlem biraz vakit alabilir..."
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [email]
  );
  return (
    <div className="yyy">
      <div className="d-flex justify-content-center align-items-center in ">
        <div className="  sign-up">
          <h1 className="text-center">ŞİFRENİZİ YENİLEYİN</h1>
          <form className="text-center sign-in mt-5" onSubmit={handleSubmit}>
            <div>
              <div className="input-group mb-3 mx-auto">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text text-center"
                    id="basic-addon1"
                  >
                    E-Mail
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="you@example.com"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                />
              </div>

              <input
                type="submit"
                className="btn btn-up"
                value={"Şifre Yenile"}
              />
            </div>
            <div>
              {" "}
              <Link to={"/sign-up"}>
                Eğer Kaydınız yoksa lütfen kayıt olun.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
