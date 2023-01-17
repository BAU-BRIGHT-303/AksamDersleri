import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/GlobalContext';
import products from '../products';
import Modal from "react-bootstrap/Modal";

function Urunler() {
    const [urunler, setUrunler] = useState([]);
    const [urun, setUrun] = useState({});

  const { sepeteEkle, sepet } =
    useContext(AppContext);

  const sepetKontrol = (x) => {
    const secim = sepet.some((urunid) => urunid.id === x);
    return secim;
  };

  //modal fonksiyonlarına ait alan

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setUrun(urunler.find(urun => urun.id === id))
    setShow(true);
};

  //bitişi

  useEffect(() => {
    setUrunler(products);
  }, []);

  return (
    <div className="row">
    {urunler.map((product, index) => 
    <div key={index} className="col-md-6">
   <div>
    <div className="wrapper">
  <div className="product-img">
    <img src={product.img} key={index} alt="" height={320} width={327} onClick={() => handleShow(product.id)}/>
  </div>
  <div className="product-info">
    <div className="product-text">
      <h1>{product.name}</h1>
      <h2>by Apple</h2>
      <p>{product.desc_1}</p>

    </div>
    <div className="product-price-btn">
      <p><span>{product.price}</span>₺</p>
      {sepetKontrol(product.id) ? (
                    <button
                      className="btn btn-danger disabled"
                    >
                      SEPETE EKLENDİ
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning "
                      onClick={() => sepeteEkle(product)}
                    >
                      SEPETE EKLE
                    </button>
                  )}
    </div>   
  </div>
</div>
</div>

   </div>
 )}  

   {/* Modal başlangıcı */}
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{urun.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row"> 
            <div className="col-md-6">
          <img
            src={urun.desc_img}
            className="img-fluid"
            style={{ height: "300px" }}
            alt=""
          />
          </div>
          <div className="col-md-6">
            <p>{urun.desc_1}</p>
            <hr />
            <p>{urun.desc_2}</p>
            <hr />
            <p>{urun.desc_3}</p>
            <hr />
            <p>{urun.desc_4}</p>
            <hr />

          </div>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
        {sepetKontrol(urun.id) ? (
                    <button
                      className="btn btn-danger disabled"
                    >
                      SEPETE EKLENDİ
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning "
                      onClick={() => sepeteEkle(urun)}
                    >
                      SEPETE EKLE
                    </button>
                  )}
          <button className="btn btn-warning" onClick={handleClose}>
            Kapat
          </button>
        </Modal.Footer>
      </Modal>

  </div>

  
)
    }
export default Urunler 
