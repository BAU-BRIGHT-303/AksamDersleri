import axios from "axios";
import React from "react";
import { useState } from "react";

function Header() {
  const [patients, setPatients] = useState("");
  const [deaths, setDeaths] = useState("");
  const [recovered, setRecovered] = useState("");
  const [tests, setTests] = useState("");
  const [date, setDate] = useState("");

  axios

    .get(
      "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
    )
    .then((res) => {
      //   console.log(date);

      setPatients(res.data[date]["patients"]);
      setDeaths(res.data[date]["deaths"]);
      setRecovered(res.data[date]["recovered"]);
      setTests(res.data[date]["tests"]);
    });
  return (
    // -----HEADER-----
    <div className="bg-dark">
      <h1 className="text-danger ">Covid Bilgilendirme Platformu</h1>
      <h3 className="text-danger ">
        Lütfen Kontrol Etmek İstediğiniz Tarihi DD/MM/YYYY Formatı Şeklinde
        Yazınız.
      </h3>
      /* -----GİRİŞ ALMA------ */
      <input
        className="w-75 "
        placeholder="DD/MM/YYYY"
        type="text"
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
      {/* -----SONUÇ TABLOSU----- */}
      <table className="table table-dark w-100 table-striped table-hover">
        <thead>
          <tr>
            <th>Patients</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Tests</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{patients}</td>
            <td>{deaths}</td>
            <td>{recovered}</td>
            <td>{tests}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Header;
