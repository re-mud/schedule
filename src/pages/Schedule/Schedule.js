import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Schedule.css';


const urls_cources = [
  "https://www.skoipt.ru/images/rs/rs/1А.htm",
  "https://www.skoipt.ru/en/112-statichnye-stranitsy/studentu/raspisanie/raspisanie-zanyatij/340-1-kurs",
  "https://www.skoipt.ru/en/112-statichnye-stranitsy/studentu/raspisanie/raspisanie-zanyatij/341-2-kurs",
  "https://www.skoipt.ru/en/112-statichnye-stranitsy/studentu/raspisanie/raspisanie-zanyatij/342-3-kurs",
  "https://www.skoipt.ru/en/112-statichnye-stranitsy/studentu/raspisanie/raspisanie-zanyatij/343-4-kurs"
]
const proxy = "https://proxy.cors.sh/";
const apiKey = "temp_a3a2ce5fa1fc7d635ae554ac6d360f71";



let lastNumber = 1;
function tabButton_onclick(sender)
{
  document.getElementById(`button_${lastNumber}`).classList
    .toggle("tabs-head__button--active");
  sender.target.classList
    .toggle("tabs-head__button--active");
  
  

  lastNumber = sender.target.textContent;
}

function Schedule() {
    const navigate = useNavigate();

    // init buttons
    let cources = JSON.parse(localStorage.getItem('cources'));
    if (cources == null || 
      !cources.hasOwnProperty("before") ||
      cources["before"] < new Date().getTime())
    {
      cources = {}
      
      for (let i = 0; i < 4; i++)
      {
        let parser = new DOMParser();
        let xhr = new XMLHttpRequest();

        xhr.open("GET", proxy + urls_cources[i], true)
        xhr.setRequestHeader('x-cors-api-key', apiKey)
       
        xhr.onload = function() {
            let htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
        };
        xhr.send()
      }
      
      cources["before"] = new Date().getTime()// + 1000*60*60*24*30
      localStorage.setItem('cources', JSON.stringify(cources))
    }

    return (
        <div className='schedule'>
          <Helmet>
            <title>Расписание</title>
          </Helmet>
          <div className='tabs-head'>
            <button id="button_1" className='tabs-head__button tabs-head__button--active' onClick={tabButton_onclick}>1</button>
            <button id="button_2" className='tabs-head__button' onClick={tabButton_onclick}>2</button>
            <button id="button_3" className='tabs-head__button' onClick={tabButton_onclick}>3</button>
            <button id="button_4" className='tabs-head__button' onClick={tabButton_onclick}>4</button>
          </div>
          <div className='tabs-body'>
            
          </div>
        </div>
    );
}
  
export default Schedule;