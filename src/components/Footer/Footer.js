import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          <h3 className="col-9">SoloMotos</h3>
          <i className="bi bi-facebook icono col-1"><BsFacebook /></i>
          <i className="bi bi-twitter icono col-1"><BsTwitter /></i>
          <i className="bi bi-instagram icono col-1"><BsInstagram /></i>
        </div>
        <hr />
        <div className="row d-flex justify-content-around">
          <div className="col-6 col-md-3 col-lg-2">
            <ul className="list-footer">
              <li><b>SoloMotos</b></li>
              <Link to="#" className="list-footer-item">Quienes Somos</Link>
              <Link to="#" className="list-footer-item">Como funciona</Link>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <ul className="list-footer">
              <li><b>Soporte</b></li>
              <Link to="#" className="list-footer-item">Preguntas Frecuentes</Link>
              <Link to="#" className="list-footer-item">Reglas de publicacion</Link>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <ul className="list-footer">
              <li><b>Soporte</b></li>
              <Link to="#" className="list-footer-item">Preguntas Frecuentes</Link>
              <Link to="#" className="list-footer-item">Reglas de publicacion</Link>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <ul className="list-footer">
              <li><b>Soporte</b></li>
              <Link to="#" className="list-footer-item">Preguntas Frecuentes</Link>
              <Link to="#" className="list-footer-item">Reglas de publicacion</Link>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <ul className="list-footer">
              <li><b>Soporte</b></li>
              <Link to="#" className="list-footer-item">Preguntas Frecuentes</Link>
              <Link to="#" className="list-footer-item">Reglas de publicacion</Link>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center m-0">© - Pablo Sebastian Campos 2022</p>
    </footer>
  )
}

export default Footer;