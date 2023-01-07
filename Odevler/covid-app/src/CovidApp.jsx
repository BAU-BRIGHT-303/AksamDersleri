import React, { useEffect, useState } from "react";
import axios from "axios";

function CovidApp() {
  const URL =
    "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json";

  const [covidDataTotal, setCovidDataTotal] = useState([]);
  const [covidData, setCovidData] = useState({});

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setCovidDataTotal(res.data))
      .catch((err) => console.log(err));
  });
  const onChangeHandler = (e) => {
    const inputDate = e.target.value;
    if (inputDate == covidDataTotal[inputDate].date) {
      setCovidData(covidDataTotal[inputDate]);
    }
  };
  return (
    <div className="container col-md-8 m-10 border  mt-5 rounded-2">
      <h1 className="mt-5">Covid Bilgiler</h1>
      <p className="mt-2">
        Tarih girerek Covid'e ait bilgilere ulaşabilirsiniz.
      </p>
      <div className="container col-md-6">
        <input
          type="text"
          className="form-control mt-5 mb-5 customInput"
          onChange={onChangeHandler}
        />
      </div>
      <table className="table mb-5">
        <thead>
          <tr>
            <th scope="col">Tarih</th>
            <th scope="col">Vaka Sayısı</th>
            <th scope="col">Toplam Vaka Sayısı</th>
            <th scope="col">Ölüm Sayısı</th>
            <th scope="col">Toplam Ölüm Sayısı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{covidData.date}</th>
            <td>{covidData.patients}</td>
            <td>{covidData.totalPatients}</td>
            <td>{covidData.deaths}</td>
            <td>{covidData.totalDeaths}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CovidApp;
