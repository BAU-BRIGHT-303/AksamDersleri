import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function KitapDetay() {
  const [books, setBooks] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container sayfa">
      <h1 className="display-2">{books.title}</h1>
      <div className="row">
        <div className="col-md-4 my-5">
          <img src={books.image_url} alt="" />
        </div>
        <div className="col-md-8 my-5">
          <h2>Yazar Adı: {books.authors}</h2>
          <h3>Özet</h3>
          <p>{books.description}</p>
        </div>
      </div>
    </div>
  );
}

export default KitapDetay;
