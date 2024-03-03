import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App;
