import Head from '../../components/Head/Head';
import { useNavigate } from 'react-router-dom';
import './Home.css';



function Home({ changePage }, props) {
    const navigate = useNavigate();

    return (
        <div className='home'>
          <Head />
        </div>
    );
}
  
export default Home;