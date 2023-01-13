import React, { useEffect, useState } from 'react'
import ItemDetail from './../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const db = getFirestore();
        const itemRef = doc(db, 'soloMotos-Items', id);

        getDoc(itemRef).then(snapshot => {
            setItem({
                id: snapshot.id,
                ...snapshot.data()
            });
        });
    }, [id]);

    return <div>
        <ItemDetail producto={item} />
    </div>;
}

export default ItemDetailContainer;