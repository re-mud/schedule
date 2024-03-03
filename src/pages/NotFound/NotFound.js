import './NotFound.css';
import { useNavigate } from 'react-router-dom';



function NotFound({ changePage }, props) {
    const navigate = useNavigate();

    return (
        <div className='not-found'>
            <h1>404 страница не найдена</h1>
            <span onClick={() => navigate('/')}>главная страница</span>
        </div>
    );
}
  
export default NotFound;