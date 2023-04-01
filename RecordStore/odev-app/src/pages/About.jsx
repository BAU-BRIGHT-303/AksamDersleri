import React from 'react'

function About() {
  return (
    <div>
      <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth: '800px'}} id="band">
  <h2 className="w3-wide">About RecordStore</h2>
  <p className="w3-opacity"><i>We love music</i></p>
  <p className="w3-justify">&emsp;It all started with a spark.
 Over 100 years ago, the Victor Talking Machine Company introduced the American public to the magic of modern sound with its innovative turntable. Today, its ancestor,RecordStore, continues to innovate in the sphere of music, community, and artistry with sleek and stylish machines that meet our modern standards of quality and compatibility.
With RecordStore, you never have to settle for less.
<br />
&emsp;RecordStore has been bringing innovation and style together since 1906, and they're not stopping now. Whether you want the vintage look of a classic record player with Bluetooth compatibility or a robust speaker system for your outdoor patio, look no further than the open doors of the online shop.
<br />
&emsp;Since RecordStore's humble beginnings over a century ago, their goal has been to marry the sophistication of yesterday with the technology of tomorrow.</p>
<br />
<br />
<h3>Our Locations</h3>
  <div className="w3-row w3-padding-32 inline-block align-middle ">
    <div className="w3-third">
      <p>New York</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg"
      className="w3-round w3-margin-bottom"  alt="Random Name" style={{width: '10rem'}} />
    </div>
    <div className="w3-third">
      <p>Denver</p>
      <img src="https://media.istockphoto.com/id/537215344/tr/foto%C4%9Fraf/denver-colorado-skyscrapers-snowy-longs-peak-rocky-mountains-summer.jpg?s=612x612&w=0&k=20&c=E5Vtd1DQRk6MjDMbj68QP5V1dmhSQraak6imKB8Ohqg=" className="w3-round w3-margin-bottom" alt="Random Name" style={{width: '10rem'}} />
    </div>
    <div className="w3-third">
      <p>Shenzhen</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Commercial_area_of_futian_to_east2020.jpg" 
      className="w3-round w3-margin-bottom"  alt="Random Name" style={{width: '10rem'}} />
    </div>
  </div>
</div>

    </div>
  )
}

export default About;