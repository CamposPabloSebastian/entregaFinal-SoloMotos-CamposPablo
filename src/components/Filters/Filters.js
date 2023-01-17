import React from 'react';
import { Link } from 'react-router-dom';
import './filters.css';

const Filters = () => {
    return (
        <form defaultValue={"nada"} className="row" id="form-filtro">
            <h3 className="mb-1 w-100 text-center mb-4">Filtros</h3>
            <div className="col-12 col-md-4 text-left">
                <div className="dropdown">
                    <button className="btn btn-dark dropdown-toggle w-100" type="button" id="dropdownMenuButtonEstilo" data-bs-toggle="dropdown" aria-expanded="false">
                        Estilo
                    </button>
                    <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButtonEstilo">
                        <li><Link className="dropdown-item" to={'/categoria/Naked'}>Naked</Link></li>
                        <li><Link className="dropdown-item" to={'/categoria/Trail'}>Trail</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to={'/ListMotos'}>Borrar</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-8">
                <section id="selectFiltroAnio" className="row">
                    <div className="col-6">
                        <button className="btn btn-dark dropdown-toggle w-100" aria-expanded="false" disabled>
                            Año desde
                        </button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-dark dropdown-toggle w-100" aria-expanded="false" disabled>
                            Año hasta
                        </button>
                    </div>
                </section>
            </div>
            <div className="col-12 col-md-6 mt-4">
                <p>
                    Desde:<span htmlFor="inputPrecioDesde" id="labelPrecioDesde">
                        0</span>€
                </p>
                <input type="range" className="form-range" id="inputPrecioDesde" min="0" max="30000"
                    step="1000" />
            </div>
            <div className="col-12 col-md-6 mt-4">
                <p>
                    Hasta: <span htmlFor="inputPrecioHasta" id="labelPrecioHasta">
                        50000</span>€
                </p>
                <input type="range" className="form-range" id="inputPrecioHasta" min="0" max="30000"
                    step="1000" />
            </div>
            <div className='w-100 text-end'><Link to={'/ListMotos'}><button className='btn btn-danger mt-4'>Borrar filtros</button></Link></div>
        </form>
    )
}

export default Filters;