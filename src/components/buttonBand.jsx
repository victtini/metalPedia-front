import React from 'react';
import Style from './button.module.css';

function Button({ label, bandName }) {
    const wikipediaUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(bandName.replace(/ /g, '_'))}`;

    return (
        <div className={Style.Button}>
            <a href={wikipediaUrl} target="_blank" rel="noopener noreferrer">
                <button>{label}</button>
            </a>
        </div>
    );
}

export default Button;
