import { ref } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const NewsCards = () => {
  const [data] = useCollectionData(ref);

  console.log(data);
  //datamızı sayfaya işmport ederek mapledikten sonra istedğiğiimiz alanlara bu dataları yerleştiriyoruz.
  return (
    <div>
      <div class="container">
        <div className="row">
          {data?.map((haber) => (
            <div className="col-md-4">
              <div class="card">
                <div class="box">
                  <div class="content">
                    <img
                      src={haber.resim}
                      style={{ height: 200 }}
                      alt=""
                      className="image-card"
                    />
                    <h5>{haber.baslik}</h5>

                    <p>{haber.aciklama}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
