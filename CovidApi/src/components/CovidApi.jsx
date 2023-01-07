import axios from "axios";
import React, { useEffect, useState } from "react";

function CovidApi() {
  const [veri, setVeri] = useState("");
  const [date, setDate] = useState("");
  const respon = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => setVeri(res.data[date]));
  };
  return (
    <div>
      <div className="container ">
        <h1 className="text-danger mt-2 mb-3">Covid Takip</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="DD/MM/YYYY"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <button className="btn btn-danger" onClick={respon}>
            SORGULA
          </button>
        </div>
        <table className="table table-dark w-100 table-striped table-hover">
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Test Sayısı</th>
              <th>Günlük Hasta</th>
              <th>İyileşen Hasta</th>
              <th>Ölüm</th>
              <th>Toplam Hasta Sayısı</th>
              <th>Toplam İyileşen Sayısı</th>
              <th>Toplam Ölüm Sayısı</th>
              <th>Toplam Test Sayısı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{veri.date}</td>
              <td>{veri.tests}</td>
              <td>{veri.patients}</td>
              <td>{veri.recovered}</td>
              <td>{veri.deaths}</td>
              <td>{veri.totalPatients}</td>
              <td>{veri.totalRecovered}</td>
              <td>{veri.totalDeaths}</td>
              <td>{veri.totalTests}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CovidApi;
// import axios from "axios";
// import React from "react";
// import { useState } from "react";

// function CovidApi() {
//   const [patients, setPatients] = useState("");
//   const [deaths, setDeaths] = useState("");
//   const [recovered, setRecovered] = useState("");
//   const [tests, setTests] = useState("");
//   const [date, setDate] = useState("");

//   axios

//     .get(
//       "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
//     )
//     .then((res) => {
//       //   console.log(date);

//       setPatients(res.data[date]["patients"]);
//       setDeaths(res.data[date]["deaths"]);
//       setRecovered(res.data[date]["recovered"]);
//       setTests(res.data[date]["tests"]);
//     });
//   return (
//     <div className="bg-dark">
//       <h1 className="text-danger ">Covid Bilgilendirme Platformu</h1>
//       <h3 className="text-danger ">
//         Lütfen Kontrol Etmek İstediğiniz Tarihi DD/MM/YYYY Formatı Şeklinde
//         Yazınız.
//       </h3>

//       <input
//         className="w-75 "
//         placeholder="DD/MM/YYYY"
//         type="text"
//         onChange={(event) => {
//           setDate(event.target.value);
//         }}
//       />

//       <table className="table table-dark w-100 table-striped table-hover">
//         <thead>
//           <tr>
//             <th>Patients</th>
//             <th>Deaths</th>
//             <th>Recovered</th>
//             <th>Tests</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{patients}</td>
//             <td>{deaths}</td>
//             <td>{recovered}</td>
//             <td>{tests}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default CovidApi;
