import React from 'react';
import "./InputTagWithBorderName.css";

export default function InputTagWithBorderName(props) {
    return (
        <div className="inputWithLabel">
            <label for="first">Crypto Name</label>
            <input type="text" placeholder="Crypto Name" />
        </div>
    )
}
