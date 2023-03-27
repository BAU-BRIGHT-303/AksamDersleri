import { useState, useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, Route, Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
  //firebaseden gelen sigin metotuyla beraber statemizide tuttuğumuz değerlier dataya yollayrak eşleşme sağlıyoruz.
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email || !sifre) {
        alert("Lütfen boş alan bırakmayınız");
        return;
      }
      //signup metotunda olduğu gibi bu functionda da statimizdeki parametreleri bu functiona vererek eşleşmeyi sağlıyoruz.
      signInWithEmailAndPassword(auth, email, sifre)
        .then(() => {
          alert("Kullanıcı Girişi Başarılı !");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [email, sifre]
  );

  return (
    <div className="yyy">
      <div className="d-flex justify-content-center align-items-center in ">
        <div className="  sign-up">
          <h1 className="text-center">GİRİŞ YAPIN</h1>
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
              <div className="input-group mb-3 mx-auto">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text text-center"
                    id="basic-addon1"
                  >
                    Şifre
                  </span>
                </div>
                <input
                  type="password"
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
              <div className="sifre-unut">
                <Link to={"forgot-password"}>Şifemi Unuttum</Link>
              </div>
              <input type="submit" className="btn btn-up" value={"Giriş Yap"} />
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

export default SignIn;
