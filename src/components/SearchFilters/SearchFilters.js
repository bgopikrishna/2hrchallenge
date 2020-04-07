import React from 'react';
import './SearchFilters.scss';

function SearchFilters({ searchValue, handleSearch, sortBy, setSortBy }) {
    return (
        <section className="filters w-100 flex flex-row justify-content-center">
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                aria-label="Search Input"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
            />

            <label htmlFor="sortBy" className="flex flex-row">
                <span> Sort By:</span>
                <select
                    name="sortBy"
                    id="sortBy"
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                >
                    <option value="Rank">Rank</option>
                    <option value="Year">Year</option>
                </select>
            </label>
        </section>
    );
}

export default SearchFilters;
