import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './GameViewer.scss';

const GameViewer = ({ games = [] }) => {
    const { name, platform } = useParams();
    const history = useHistory();

    const game = games.find(
        (game) => game['Name'] === name && game['Platform'] === platform
    );

    console.log(name, platform, game);

    if (!game) {
        return <p>Loading</p>;
    }

    const {
        Rank: rank,
        Year: year,
        Genre: genre,
        Publisher: publisher,
        Global_Sales: globalSales,
    } = game;

    return (
        <section
            className="gameviewer flex flex-column"
            style={{ alignItems: 'center', margin: '2rem' }}
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

            <button onClick={() => history.goBack()}> Go Back</button>
        </section>
    );
};

export default GameViewer;
