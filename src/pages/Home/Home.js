import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Home.css';



function Home() {
    const navigate = useNavigate();

    return (
        <div className='home'>
          <Helmet>
            <title>Главная</title>
          </Helmet>
        </div>
    );
}
  
export default Home;