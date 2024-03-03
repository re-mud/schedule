import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

const Home = React.lazy(() => import("./pages/Home/Home.js"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound.js"));



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
