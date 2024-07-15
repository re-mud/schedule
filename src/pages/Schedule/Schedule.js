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
        </div>
    );
}
  
export default Schedule;