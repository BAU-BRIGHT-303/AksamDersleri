import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">Apple yetkili satıcısına hoşgeldiniz. Bu site üzerinden Apple'ın resmi ürünlerine ulaşabilirsiniz. Sitemizde satılan tüm ürünler 2 yıl Apple Türkiye garantisi altındadır. Satış sonrası desteğimizle bu konuda pek çok saygın kaynak tarafından en iyi resmi satıcı seçildik.</p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><Link to="/contact">İLETİŞİME GEÇ</Link></li>
          <li><Link to="/">ÜRÜNLER</Link></li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2023 All Rights Reserved by 
          <Link to="#"> Enes KARAMANOĞLU</Link>.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><Link className="facebook" to="#"><i className="bi bi-facebook" /></Link></li>
          <li><Link className="twitter" to="#"><i className="bi bi-twitter" /></Link></li>
          <li><Link className="dribbble" to="#"><i className="bi bi-github" /></Link></li>
          <li><Link className="linkedin" to="#"><i className="bi bi-linkedin" /></Link></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
