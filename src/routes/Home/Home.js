import React from 'react';
import './home.css';

const Home = () => {
    return (
        <>
            <div className="img-fondo">
                <img src="/images/moto-paisaje.png" alt="" className="img-back" />
                <h1 className="title px-3 text-center fs-1 text-uppercase">
                    La mejor manera de comprar tu siguiente moto
                </h1>
            </div>
            <main className="container">
                <div className="text-center text-uppercase m-4 p-3">
                    <h3>Comprar una moto de segunda mano nunca había sido tan fácil.</h3>
                </div>

                <section className="pagos row d-flex justify-content-around text-center">
                    <div className="col-12 col-md-5 m-3 p-4 opc-pago">
                        <h4>¿Como comprar?</h4>
                        <ul className="p-0">
                            <li>Elige tu moto.</li>
                            <li>Contacta con el vendedor.</li>
                            <li>Realiza el pago.</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-5 m-3 p-4 opc-pago">
                        <h4>Opciones de pago.</h4>
                        <ul className="p-0">
                            <li>Pago directamente al vendedor.</li>
                            <li>Financiala con nosotros.</li>
                        </ul>
                    </div>
                    <p>
                        Si no podes pagar la totalidad de la moto elegida no te preocupes, te
                        ofecemos soluciones de financiación a tu medida.
                    </p>
                    <button type="button" className="btn btn-primary d-grid col-3 mx-auto my-4">
                        Conocer proceso de financiacion
                    </button>
                </section>
            </main>
        </>
    )
}

export default Home;