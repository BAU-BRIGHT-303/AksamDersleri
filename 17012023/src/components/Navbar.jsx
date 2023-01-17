import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/GlobalContext';

function Navbar() {
 let totalPrice = 0;

  const { sepettenCikar, sepet } =
    useContext(AppContext);


  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
  <Link className="navbar-brand navbar-logo" to="#"><i class="bi bi-apple"></i> APPLE YETKİLİ SATICISI</Link>
  <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars text-white" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <div className="hori-selector"><div className="left" /><div className="right" /></div>
      <li className="nav-item">
        <Link className="nav-link" to="/"><i class="bi bi-house"></i>ANA SAYFA</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/"><i class="bi bi-bag-check-fill"></i>ÜRÜNLER</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact"><i class="bi bi-earbuds"></i>İLETİŞİM</Link>
      </li>
      </ul>
      <ul className="navbar-nav sepet">
      <li className="nav-item">
        <Link className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Cart <i class="fa fa-shopping-cart"></i>{" "} <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
                    {sepet.length}
                  </span></Link>
      </li>
      </ul>
      
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">SEPET</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">

      {sepet.map((sepeturunler) => { 
         totalPrice += sepeturunler.price;
      return (
      <div>
          <div className="row">
        <div className="col-md-2">
          <img src={sepeturunler.img} height={75} width={75}  alt="" />
        </div>
        <div className="col-md-10">
          <h4>{sepeturunler.name}</h4>
          <p>{sepeturunler.price} ₺</p>
          <button className="btn btn-danger" onClick={() => sepettenCikar(sepeturunler.id)}>SEPETTEN ÇIKAR</button>
          <br />
          <br />
        </div>
        
          <hr />
          </div>
      </div>
      )
      })}
      <p>Toplam fiyat : {totalPrice} ₺</p>
      <button className="btn btn-success">Checkout</button>
    </div>
  </div>
</div>
    
</nav>

  )
}

export default Navbar