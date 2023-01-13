import React, { useState } from 'react';

const ItemCount = ({ onAdd }) => {

    const [stock, setStock] = useState(1);

    const buttonResta = () => {
        stock > 0 ? setStock(stock - 1) : setStock(0);
    }

    const buttonSuma = () => {
        setStock(stock + 1);
    }

    const addItem = () => {
        onAdd(stock);
    }

    return (
        <div>
            <button className="btn btn-secondary mx-3" onClick={buttonResta}>-</button>
            <span>{stock}</span>
            <button className="btn btn-secondary ms-3" onClick={buttonSuma}>+</button>
            <button className='btn btn-primary w-100 m-auto my-2' onClick={addItem}>Añadir al carrito</button>
        </div>
    );
}

export default ItemCount;