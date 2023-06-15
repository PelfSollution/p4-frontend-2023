import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListPage from './MovieList';
import DetailPage from './MovieDetail';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/movie/:id" element={<DetailPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;