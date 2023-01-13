import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    //establece la cantidad de productos en el carrito. (icono de carro)
    const contar = () => {
        return cart.reduce((initialAmount, item) => (initialAmount += item.amount), 0);
    }

    function isInCart(id) {
        return cart.some(item => item.id === id);
    }

    const addItemCart = (prod, amount) => {

        if (isInCart(prod.id)) {
            setCart(
                cart.map((item) => {
                    return (item.id === prod.id
                        ? { ...item, amount: item.amount + amount }
                        : prod);
                })
            )
        } else {
            setCart([...cart, { ...prod, amount }]);
        }
    }

    const removeItem = (itemId) => {
        return isInCart(itemId) ? setCart(cart.filter((prod) => prod.id !== itemId)) : "No añadido al carrito";
    }

    const clearCart = () => {
        if (cart.length > 0) {
            setCart([...[]])
        } else {
            console.log("carro vacio")
        }
    };

    const addAmount = (itemId) => {
        setCart(
            cart.map((prod) => {
                return prod.id === itemId ? { ...prod, amount: prod.amount + 1 } : prod;
            })
        );
    }


    const subtractAmount = (itemId) => {
        setCart(
            cart.map((prod) => {
                if (prod.amount > 0) {
                    return prod.id === itemId ? { ...prod, amount: prod.amount - 1 } : prod;
                } else {
                    return prod.id === itemId ? { ...prod, amount: 0 } : prod;
                }

            })
        );
    }

    const totalCart = () => {
        return cart.reduce((total, item) => (total + (item.amount * item.precio)), 0);
    }

    const cartIsEmpty = () => cart.length === 0 ? true : false;

    return (
        <CartContext.Provider
            value={{ cart, setCart, addItemCart, contar, clearCart, removeItem, subtractAmount, addAmount, totalCart, cartIsEmpty }}>
            {children}
        </CartContext.Provider>
    )

}
export { CartProvider, CartContext };