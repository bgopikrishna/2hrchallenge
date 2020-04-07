import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from './constants';
import List from './components/list/List';
import SearchFilters from './components/SearchFilters/SearchFilters';
import useFilters from './useFilters';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Card from './components/card/Card';
import GameViewer from './components/GameViewer/GameViewer';

export default function App() {
    const [originalGames, setOriginalGames] = useState([]);

    useEffect(() => {
        fetch(API_ENDPOINT)
            .then((res) => res.json())
            .then((data) => setOriginalGames(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <Home games={originalGames}></Home>
                </Route>
                <Route path="/game/:name/:platform">
                    <GameViewer games={originalGames} />
                </Route>
            </Switch>
        </div>
    );
}
