import './NotFound.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';



function NotFound() {
    const navigate = useNavigate();

    return (
        <div className='not-found'>
            <Helmet>
                <title>404 страница не найдена</title>
            </Helmet>
            <h1>404 страница не найдена</h1>
            <span onClick={() => navigate('/schedule')}>главная страница</span>
        </div>
    );
}
  
export default NotFound;