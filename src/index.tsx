import * as React from "react";
import { render } from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./styles.scss";

function App() {
  const linksArray: {title:string, active: boolean}[] = [
    {title:'Описание', active: true},
    {title:'Планируемый эффект от реализации программы', active: false},
    {title:'Реализация  отраслевых программ позволит достичь', active: false},
    {title:'Документы', active: false},
    {title:'Новости', active: false},
    {title:'Полезные материалы', active: false},
    {title:'Проекты', active: false},
    {title:'Открытые данные', active: false},
    {title:'Услуги', active: false},
  ];
  return (
    <div className="App">
      <div className='side-anchor'>
        <ul>
          {linksArray.map(link => {
            const active = (link.active) ? 'active' : null ;
            return(
              <li className={'side-anchor__element '+active}><a className='pb-3' href={'1231'} >{link.title}</a></li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
