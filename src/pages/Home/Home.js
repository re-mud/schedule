import Head from '../../components/Head/Head';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Home.css';
import Navigation from '../../components/Navigation/Navigation';



function Home() {
    const navigate = useNavigate();

    return (
        <div className='home'>
          <Helmet>
            <title>Главная</title>
          </Helmet>
          <Head />
          <Navigation />
        </div>
    );
}
  
export default Home;