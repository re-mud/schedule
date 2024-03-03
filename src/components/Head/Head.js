import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import './Head.css';

function Head({ changePage }, props) {
    const [curTime, setCurTime] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurTime(new Date());
        }, 1000);
      
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <><Helmet>
            <script src="https://kit.fontawesome.com/c2eaa30653.js" crossorigin="anonymous"></script>
        </Helmet><div className='head'>
                <div className="title-text">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <h1>
                            СКОиПТ
                        </h1>
                    </div>
                <div className='head__time'>
                    <i class="fa-solid fa-clock"></i>
                    {curTime.toLocaleTimeString()}
                </div>
            </div></>
    );
}
  
export default Head;