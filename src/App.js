import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

import Background from "./components/Background/Background";
import Head from "./components/Head/Head";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import News from "./pages/News/News"
import Calls from "./pages/Calls/Calls"
import Schedule from "./pages/Schedule/Schedule";



function App() {
    return (
        <div className='app'>
            <Router>
                <Head />
                <Background />
                <Navigation />

                <div className='app__container'>
                    <div className='app__pack'>
                        <Routes>
                            <Route path="schedule/" element={<Home />} />
                            <Route path="schedule/news" element={<News />} />
                            <Route path="schedule/calls" element={<Calls />} />
                            <Route path="schedule/schedule" element={<Schedule />} />

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App;
