import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Filters from "../../components/Filters/Filters";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const { estilo } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'soloMotos-Items');

        if (estilo !== undefined) {
            const q = query(itemsCollection, where('tipo', '==', estilo));
            getDocs(q).then(snapshot => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(data);
            })
        } else {
            getDocs(itemsCollection).then(snapshot => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(data);
            });
        }
    }, [estilo]);


    return (
        <>
            <Filters />
            <div className="container w-75">
                <div className="row d-flex justify-content-around">
                    <ItemList listaObjetos={data} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;