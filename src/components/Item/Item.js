import React from "react";
import './item.css';

const Item = ({ objeto }) => {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={objeto.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title m-0">{objeto.marca} - {objeto.modelo}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;