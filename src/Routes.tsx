import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListPage from './components/MovieList';
import DetailPage from './components/MovieDetail';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/movie/:id" element={<DetailPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;