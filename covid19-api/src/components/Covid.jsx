import React, { useState } from 'react';
import axios from 'axios';

function Covid() {
    const URL = "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json";
    const [data, setData] = useState("11/04/2021");
    const [inputDate, setInputDate] = useState('');
    
        const response = async () => {
             const result = await axios.get(URL);
             setData(result.data[inputDate]);
         }
  

    console.log(data);
    
  return (
    <div>
        <h1>TARİHE GÖRE TÜRKİYE COVİD-19 BİLGİLERİ</h1>
      <div className="input-group mb-3 boyutayarla">  
  <input onChange={event => setInputDate(event.target.value)} type="text" className="form-control" placeholder="DD/MM/YYYY formatında tarih değeri giriniz." />
  <button onClick={response} className="btn btn-danger">SORGULA</button>
       </div>
       <table className="table table-striped table-bordered table-dark enestable">
    <tbody>
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
    <tr>
    <td>{data.date}</td>
      <td>{data.tests}</td>
      <td>{data.patients}</td>
      <td>{data.recovered}</td>
      <td>{data.deaths}</td>
      <td>{data.totalPatients}</td>
      <td>{data.totalRecovered}</td>
      <td>{data.totalDeaths}</td>
      <td>{data.totalTests}</td>
    </tr>
    </tbody>
  </table>

    </div>
  )
}

export default Covid
