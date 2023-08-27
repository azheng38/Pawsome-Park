import React from 'react';
import './ImageWordCard.css';

export default function ImageWordCard ({ image, title, description }) {
    return (
        <div className="card">
            <img className="card-image" src={image} alt={title} />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}
