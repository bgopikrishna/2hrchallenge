import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

function Card({ game }) {
    const {
        Name: name,
        Rank: rank,
        Platform: platform,
        Year: year,
        Genre: genre,
        Publisher: publisher,
        Global_Sales: globalSales,
    } = game;

    return (
        <Link
            className="card flex flex-column justify-content-center"
            to={`/game/${name}/${platform}`}
        >
            <header className="card--header">
                <h3>
                    #{rank} {name}
                </h3>
            </header>

            <div className="card--content">
                <p>Genre: {genre}</p>
                <p>Publisher: {publisher}</p>
                <p> Global_Sales : {globalSales}</p>
            </div>

            <div className="card--footer flex flex-row justify-content-between">
                <span>{year}</span>
                <span>{platform}</span>
            </div>
        </Link>
    );
}

export default Card;
