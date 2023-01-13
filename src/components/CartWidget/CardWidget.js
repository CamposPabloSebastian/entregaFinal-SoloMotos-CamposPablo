import React, { useContext } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../cartContext/CartContext';
const CardWidget = () => {

    const { contar } = useContext(CartContext);

    return (
        <>
            <BsFillCartFill />
            <span className='ps-2'>{contar()}</span>
        </>
    )
}

export default CardWidget;