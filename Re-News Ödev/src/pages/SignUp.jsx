import App from "../App";
import { useState, useCallback } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, NavLink, Route, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

//Firebaseden gelen Sign-Up metodu. useStateleri kullanarak inputlara yazılan değerlieri tutarak metodumuza gönderiyoruz.
const SignUp = () => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email || !sifre) {
        return;
      }
      //İstediğimiz parametletremizi mesela burada username de olabilir (bize bağlı) useState ile tutulan değerlerimizi, onları firebaseden gelen functionumuza parametre olarak veriyoruz.
      createUserWithEmailAndPassword(auth, email, sifre)
        .then(() => {
          alert("Kullanıcı Kaydı Başarılı !");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [email, sifre]
  );
  //Sign-up sayfamızda görünecek alan
  return (
    <div className="yyy">
      <div className="d-flex justify-content-center align-items-center up ">
        <div className="sign-up">
          <h1 className="text-center">YENİ KULLANICI OLUŞTURUN</h1>
          <form className="text-center sign-up mt-5" onSubmit={handleSubmit}>
            <div>
              <div className="input-group mb-3 mx-auto pb-5">
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
              <div className="input-group mb-3 mx-auto pt-5">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text text-center"
                    id="basic-addon1"
                  >
                    Şifre
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="**********"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  value={sifre}
                  onChange={(e) => {
                    setSifre(e.currentTarget.value);
                  }}
                />
              </div>
              <input type="submit" className="btn btn-up" value={"Kayıt Ol"} />
              <div className="text-center">
                <Link to={"/sign-in"}>Kaydınız varsa hemen giriş yapın.</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
