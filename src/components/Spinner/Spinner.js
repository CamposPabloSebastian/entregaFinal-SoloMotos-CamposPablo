import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <p>Cargando...</p>
        </div>
    )
}

export default Spinner;