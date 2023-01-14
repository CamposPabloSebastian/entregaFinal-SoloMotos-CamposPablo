import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Filters from "../../components/Filters/Filters";
import { useNavigate } from "react-router-dom";

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();

    const filtroHandler = (filtroSelect) => {
        setFilter(filtroSelect);
    };

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'soloMotos-Items');
        const q = query(itemsCollection, where('marca', '==', filter))
        filter ?

            getDocs(q).then(snapshot => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(data);
                navigate(`/categoria/${filter.toLowerCase()}`);
            }) :

            getDocs(itemsCollection).then(snapshot => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(data);
            });
    }, [filter, navigate]);


    return (
        <>
            <Filters filtroHandler={filtroHandler} />
            <div className="container w-75">
                <div className="row d-flex justify-content-around">
                    <ItemList listaObjetos={data} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;