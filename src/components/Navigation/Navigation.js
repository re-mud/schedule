import { useNavigate } from 'react-router-dom';
import './Navigation.css';
import news from './news.svg';
import lessons from './lessons.png';
import schedule from './schedule.png';



function Navigation() {
    const navigate = useNavigate();

    return (
        <div className='navigation'>
            <div className='navigation__container'>
                <div className='navigation__section' onClick={() => navigate("/news")}>
                    <img src={news} className='navigation__section-icon'/><br/>
                    <div className='navigation__section-text'>Новости</div> 
                    <div className='navigation__section-line'></div>
                </div>
                <div className='navigation__section' onClick={() => navigate("/schedule")}>
                    <img src={lessons} className='navigation__section-icon'/><br/>
                    <div className='navigation__section-text'>Расписание</div> 
                    <div className='navigation__section-line'></div>
                </div>
                <div className='navigation__section' onClick={() => navigate("/calls")}>
                    <img src={schedule} className='navigation__section-icon'/><br/>
                    <div className='navigation__section-text'>Звонки</div> 
                </div>
            </div>
        </div>
    );
}
  
export default Navigation;