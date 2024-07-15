import "./Calls.css"
import { Helmet } from 'react-helmet';
import calls from "./calls.png";

function Calls() {
    return (
        <div className="calls-container">
            <Helmet>
                <title>Расписание звонков</title>
            </Helmet>
            <img className='calls__image' src={calls} />
        </div>
    )
}

export default Calls;