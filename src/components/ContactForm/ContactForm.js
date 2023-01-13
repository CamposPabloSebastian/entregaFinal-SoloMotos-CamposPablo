import React, { useContext, useState } from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import './contactForm.css'
import { CartContext } from '../cartContext/CartContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';


const ContactForm = () => {

    const { cart, totalCart, clearCart } = useContext(CartContext);
    const [id, setId] = useState();
    const [form, setForm] = useState({
        name: '',
        email: '',
        mensaje: '',
    });

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        clearCart();
    }
    const handleShow = () => setShow(true);

    const submitHandler = (ev) => {
        ev.preventDefault();

        const db = getFirestore();
        const formCollection = collection(db, 'orders');

        const order = {
            form,
            items: cart.map(item => (
                {
                    id: item.id,
                    titulo: `${item.marca} - ${item.modelo}`,
                    precio: item.precio,
                    cantidad: item.amount
                }
            )),
            total: totalCart(),
        }

        addDoc(formCollection, order).then((snapshot) => {
            setForm({
                name: '',
                email: '',
                mensaje: '',
            });
            setId(snapshot.id);
        });
        toast.success("Compra exitosa!", {
            position: 'top-right',
            style: {
                borderRadius: '10px',
                background: '#053641',
                color: '#fff',
                padding: '16px',
                minWidth: '250px',
            }
        });
    }

    const changeHandler = (ev) => {
        const { value, name } = ev.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <>
            <form className='backGround p-5 mb-5' onSubmit={submitHandler}>
                <div className='text-center mb-4'>
                    <h1>Completar formulario</h1>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Nombre</label>
                    <input className="form-control" id="name" name="name" value={form.name} rows="3" onChange={changeHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={changeHandler} />
                </div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="mensaje">Mensaje</label>
                    <input className="form-control" id="mensaje" name='mensaje' rows="3" value={form.mensaje} onChange={changeHandler} />
                </div>
                <button className="btn btn-success w-25" onClick={handleShow}>Enviar</button>
            </form> :
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Se pedido se ah realizado con exito</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <p className="card-text">Su numero de pedido es:</p>
                    <p>{id}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Aceptar y cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </>
    )
}

export default ContactForm;