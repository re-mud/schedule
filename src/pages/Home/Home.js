import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Head from '../../components/Head/Head';
import Navigation from '../../components/Navigation/Navigation';
import './Home.css';



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