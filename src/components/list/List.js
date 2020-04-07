import React from 'react';
import Card from '../card/Card';
import './List.scss';

function List({ games }) {
    return (
        <section className="gameslist">
            {games.map((game) => (
                <Card game={game} key={game['Name'] + game['Platform']} />
            ))}

            {games.length === 0 && (
                <div className="empty">
                    <p>Phew! No results</p>
                </div>
            )}
        </section>
    );
}

export default List;
