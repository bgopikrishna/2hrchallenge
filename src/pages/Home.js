import React, { Fragment, useEffect } from 'react';
import useFilters from '../useFilters';
import SearchFilters from '../components/SearchFilters/SearchFilters';
import List from '../components/list/List';

const Home = ({ games }) => {
    const {
        setGames,
        filteredGames,
        searchInput,
        setSearchInput,
        setSortBy,
        sortBy,
    } = useFilters(games);

    useEffect(() => {
        setGames(games);
    }, [games, setGames]);

    return (
        <Fragment>
            <SearchFilters
                searchValue={searchInput}
                handleSearch={setSearchInput}
                sortBy={sortBy}
                setSortBy={setSortBy}
            ></SearchFilters>
            <List games={filteredGames}></List>
        </Fragment>
    );
};

export default Home;
