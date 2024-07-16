import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Schedule.css';



function Schedule() {
    const navigate = useNavigate();

    return (
        <div className='schedule'>
          <Helmet>
            <title>Расписание</title>
          </Helmet>
          <div className='tabs'>
            <button className='tabs__button'>1</button>
            <button className='tabs__button'>2</button>
            <button className='tabs__button'>3</button>
            <button className='tabs__button'>4</button>
          </div>
        </div>
    );
}
  
export default Schedule;