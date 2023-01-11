import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function MenuList({ menu }) {
  const [ozellik, setOzellik] = useState("small");
  const [miktar, setMiktar] = useState(0);

  const [adet, setAdet] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (adet < 0) {
      window.alert("0dan küçük adet seçilemez");
      setAdet(0);
    }
  }, [adet]);

  return (
    <div
      className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
      style={{ width: "25rem" }}
    >
      <img
        src={menu.img}
        className="card-img-top"
        style={{ maxHeight: "300px", cursor: "pointer" }}
        alt="..."
      />

      <h5 className="card-title my-3 ">{menu.ad}</h5>

      <div className="row">
        <div className="col-md-6 m-auto">
          <h5 className="my-1">Özellikler</h5>
          <select
            id=""
            className="form-select"
            value={ozellik}
            onChange={(e) => setOzellik(e.target.value)}
          >
            {menu.ozellik.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
          <div className="col-md-6 m-auto">
            <div className="col-md-12">
              <h5 className="my-3">Adet</h5>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-outline-danger btn-sm"
                  value={miktar}
                  onChange={(e) => setMiktar(e.target.value)}
                  onClick={() => {
                    setAdet(adet + 1);
                  }}
                >
                  +
                </button>
                <h3 className="mx-3 pt-2">{adet}</h3>
                <button
                  className="btn btn-outline-danger btn-sm"
                  value={miktar}
                  onClick={() => {
                    setAdet(adet - 1);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 my-3">
            <h4 className="text-danger">
              Fiyat:{menu.fiyat[0][ozellik] * [adet]} ₺
            </h4>
          </div>
          <div className="col-md-12 my-3">
            <button className="btn btn-danger w-150">SEPETE EKLE</button>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{menu.ad}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={menu.img}
            style={{ height: "300px" }}
            className="img-fluid"
            alt=""
          />
          <h1>Kategori: {menu.kategori}</h1>
          <p>{menu.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MenuList;
