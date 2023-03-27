import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import NewsCards from "../components/NewsCards";

const Home = () => {
  const [user, isLoading] = useAuthState(auth);
  //Çıkış yapmak için fşişrebaseden gelen bu duntionu çağırıyoruz ve datadan auth adında bulunan parametreyi içerisinde veriyoruz.
  const handleSignOut = useCallback(() => {
    signOut(auth);
  });
  //isLoading metotu birçok alanda kullanıldı kendisi sayfada yğüklerijken bize vermesini istedğiğimiz görüntüyü kodladığımız alan
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

  return (
    <div>
      <div className="container-fluid p-5 slide-place ">
        <div className="row">
          <div className="col-md-5">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 "
                    src="https://www.game-consultant.com/wp-content/uploads/2020/01/Game-Consultant.com-Game-News.jpg"
                    alt="First slide"
                    style={{
                      height: 350,
                      border: "0px solid",
                      borderRadius: 100,
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 "
                    src="https://i.ytimg.com/vi/ra1rRjR2U3c/maxresdefault.jpg"
                    alt="Second slide"
                    style={{
                      height: 350,
                      border: "0px solid",
                      borderRadius: 100,
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src=" https://www.webtekno.com/images/editor/default/0002/62/045825c6a6179762e839a16365c6027e8fccd75a.jpeg"
                    alt="Third slide"
                    style={{
                      height: 350,
                      border: "0px solid",
                      borderRadius: 100,
                    }}
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="col-md-7 p-5 slide-text">
            <h2 className="text-center">RE-NEWS</h2>
            <h5 className="text-center">
              Oyunlar ile ilgili ulaşabileceğin her şey burada.Çıkacak oyunalar,
              güncellemeler, oyun fiyatları, oyun yorumları ve daha fazlası
              <br />
              RE-NEWS'te
            </h5>
          </div>
        </div>

        <NewsCards></NewsCards>
      </div>
    </div>
  );
};

export default Home;
