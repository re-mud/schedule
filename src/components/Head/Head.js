import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
        <div className='head'>
            <img className='head__logo' onClick={() => navigate("/")}/>
            <div className='head__time'>
                {curTime.toLocaleTimeString()}
            </div>
        </div>
    );
}
  
export default Head;