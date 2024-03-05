import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

import Background from "./components/Background/Background";
import Head from "./components/Head/Head";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import News from "./pages/News/News"



function App() {
    return (
        <div className='app'>
            <Router>
                <Head />
                <Background />
                <Navigation />

                <div className='app__container'>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/news" element={<News />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;
