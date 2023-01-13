import React, { useContext } from 'react';
import ItemCount from './../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../cartContext/CartContext';
import toast, { Toaster } from 'react-hot-toast';


const ItemDetail = ({ producto }) => {

    const { addItemCart, contar } = useContext(CartContext);

    const onAdd = (cant) => {
        addItemCart(producto, cant);
        toast.success("Producto añadido con exito!", {
            position: 'top-right',
            style: {
                borderRadius: '10px',
                background: '#053641',
                color: '#fff',
                padding: '16px',
                minWidth: '250px',
            }
        })
    }

    return (
        <>
            <div className='d-flex justify-content-between mx-3 mt-3'>
                <Link to='/listMotos'><button className='btn btn-prismary text-start'>Volver</button></Link>
                {contar() > 0 && (<><Link to='/cart'><button className='btn btn-success text-end'>Finalizar Compra</button></Link></>)}
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-4">
                <div className="card">
                    <img src={producto.img} alt="" className="img-fluid" />
                    <div className="card-header text-center px-0 w-100">
                        <h5 className="card-title m-0">{producto.marca} - {producto.modelo}</h5>
                    </div>
                    <div className="card-body py-0">
                        <ul className="list-group list-group-flush list-group-horizontal row">
                            <li className="list-group-item col-6">{producto.tipo}</li>
                            <li className="list-group-item col-6 text-end">{producto.anio}</li>
                        </ul>
                        <ul className="list-group list-group-flush list-group-horizontal row">
                            <li className="list-group-item col-6">{producto.kilometros} km</li>
                            <li className="list-group-item col-6 text-end">{producto.carnet}</li>
                        </ul>
                    </div>
                    <div className="card-footer text-end">{producto.precio}</div>
                    <div className="text-center"><ItemCount onAdd={onAdd} /></div>
                    <Toaster></Toaster>
                    {/* <p>Unidades disponibles: {producto.stock - countItemCart}</p> */}
                </div>
            </div>
        </>
    )
}

export default ItemDetail;