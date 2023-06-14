import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListPage from './ListPage';
import DetailPage from './DetailPage';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;