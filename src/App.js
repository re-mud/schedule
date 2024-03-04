import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

import Background from "./components/Background/Background";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";



function App() {
    return (
        <div className='app'>
            <Background />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
