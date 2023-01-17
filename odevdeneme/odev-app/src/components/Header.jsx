import React from 'react';

function Header() {
  return (
    <div>
    <div className="w3-padding-large" id="main">

<header className="w3-container w3-padding-32 w3-center w3-black" id="home">
<h1 className="w3-jumbo">Welcome to RecordStore</h1>
<br /><br />
<h3>NEWS FROM MUSIC WORLD</h3>
<br />

<div>
    <center>
<div id="demo" className="carousel slide" data-bs-ride="carousel">

<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
  <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
  <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
</div>

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://www.nme.com/wp-content/uploads/2023/01/Brian-May-and-Jeff-Beck-tribute-696x442.jpg" alt="Los Angeles" className="d-block" style={{width: '50rem'}} />
    <br />
    <q>Queen’s Brian May opens up about Jeff Beck track he thinks has the “most beautiful bit of guitar music ever recorded”</q>
  </div>
  <div className="carousel-item">
    <img src="https://www.nme.com/wp-content/uploads/2023/01/Maneskin-Tom-Morello-Credit-Fabio-Germinario-696x442.jpg" alt="Chicago" className="d-block" style={{width: '50rem'}} />
    <br />
    <q>Listen to Måneskin’s frenzied new single ‘Gossip’ with Rage Against The Machine’s Tom Morello</q>
  </div>
  <div className="carousel-item">
    <img src="https://www.nme.com/wp-content/uploads/2023/01/Ringo-Starr-2000-x-1270-696x442.jpg" alt="New York" className="d-block" style={{width: '50rem'}} />
    <br />
    <q>Ringo Starr announces 2023 North American tour dates with All Starr Band</q>
  </div>
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" />
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon" />
</button>
</div>
<div className="container-fluid mt-3">
</div>
</center>
</div>

</header>
</div>
</div>
  )
}

export default Header;