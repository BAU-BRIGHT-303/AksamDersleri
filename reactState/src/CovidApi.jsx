import axios from "axios";
import React, { useEffect, useState } from "react";

function CovidApi() {
  const URL =
    "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json";

  const [covid, setCovid] = useState([]);
  const [singleCovid, setSingleCovid] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setCovid(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      var giris = event.target.value;
      if (covid[giris] == undefined || covid[giris] == null) {
        alert("Lütfen geçerli bir tarih giriniz");
      } else {
        // singleCovid = covid[giris]; çalışmıyor
        setSingleCovid(covid[giris]);
      }
    }
  };

  return (
    <div>
      <div className="container ">
        <h2 className="display-5 text-center">COVİD VERİLERİ</h2>
        <input
          id="date"
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Tarih giriniz"
        />
      </div>
      <table className="table table-dark w-100 table-striped table-hover mt-5">
        <thead>
          <tr>
            <td>Date</td>
            <td>Total Patients</td>
            <td>Total Deaths</td>
            <td>Total Recovered</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{singleCovid.date}</td>
            <td>{singleCovid.totalPatients}</td>
            <td>{singleCovid.totalDeaths}</td>
            <td>{singleCovid.totalRecovered}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CovidApi;
