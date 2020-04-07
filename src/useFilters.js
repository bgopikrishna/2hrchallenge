import { useState, useEffect } from 'react';

function useFilters(gamesList = []) {
    const [games, setGames] = useState(gamesList);
    const [filteredGames, setFilteredGames] = useState(gamesList);
    const [sortBy, setSortBy] = useState('Rank');

    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        let newFilteredGames = games.filter((game) => {
            return game['Name']
                .toLowerCase()
                .includes(searchInput.toLowerCase());
        });

        newFilteredGames = newFilteredGames.sort(
            (a, b) => a[sortBy] - b[sortBy]
        );

        setFilteredGames(newFilteredGames);
    }, [searchInput, games, sortBy]);

    return {
        setGames,
        filteredGames,
        searchInput,
        setSearchInput,
        setSortBy,
        sortBy,
    };
}

export default useFilters;
