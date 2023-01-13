import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";

const ItemList = ({ listaObjetos }) => {
    return (
        <>
            {listaObjetos.length === 0 ? <Spinner /> :
                (
                    listaObjetos.map(obj => (
                        <div key={obj.id} className="col-12 col-md-6 p-4">
                            <Link to={`/ListMotos/${obj.id}`}><Item objeto={obj} /></Link>
                        </div>
                    ))
                )}


        </>
    );
}

export default ItemList;