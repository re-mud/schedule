import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import skoipt from './skoipt.png';
import weather from './weather.svg';
import './Head.css';



const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const proxy = "https://proxy.cors.sh/";
const url = "https://pogoda.mail.ru/prognoz/salavat/";
const apiKey = "temp_a591e999826f5d62a01b893c50ebc5f9";



function Head() {
    const [curTime, setCurTime] = useState("00:00");
    const [curDate, setCurDate] = useState("Пн. 0 Январь");
    const [curTemp, setCurTemp] = useState("+0");
    const navigate = useNavigate();

    const updateTime = () => {
        let today = new Date();
        let hours = today.getHours().toString();
        let minutes = today.getMinutes().toString();
        
        setCurTime(`${(hours.length == 1 ? "0" : "") + hours}:${(minutes.length == 1 ? "0" : "") + minutes}`);
    }
    const updateDateAndTemp = () => {
        let today = new Date();
        let parser = new DOMParser();
        let xhr = new XMLHttpRequest();

        xhr.open("GET", proxy + url, true)
        xhr.setRequestHeader('x-cors-api-key', apiKey)
        xhr.onload = function() {
            let htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
            let temp = htmlDoc.querySelector('.information__content__temperature')?.textContent ?? "0";
            setCurTemp(temp)
        };
        xhr.send()
        
        setCurDate(`${daysOfWeek[today.getDay()]}. ${today.getDate()} ${Months[today.getMonth()]}`);
    }

    useEffect(() => {
        setInterval(updateTime, 1000);
      
        return () => {
            clearInterval(updateTime);
        };
    }, []);
    useEffect(() => {
        updateDateAndTemp()
        setInterval(updateDateAndTemp, 1000*60*60);
      
        return () => {
            clearInterval(updateDateAndTemp);
        };
    }, []);

    return (
        <div className='head'>
            <img src={skoipt} className='head__logo' onClick={() => navigate("/schedule")}/>
            <div className='head__weather'>
                <img src={weather} className='head__weather-icon'/>
                <div className='head__temperature'>{curTemp}</div>
            </div>
            <div className='head__date-container'>
                <div className='head__time'>{curTime}</div>
                <div className='head__date'>{curDate}</div>
            </div>
        </div>
    );
}
  
export default Head;