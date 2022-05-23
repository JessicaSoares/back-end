import React from "react";
import "../../../App.css";
import "../../Cards.css";
import CardItemGov from "../../CardItemGov";
{/* Cards de opções de submenu do indicador*/}
export default function DespesasFork() {
  return (
    <>
      <div className="cards">
        <h1>Meio Ambiente</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItemGov
              src="https://img.icons8.com/dotty/80/4a90e2/gas.png"
                text=""
                label="Queimadas"
                path="https://app.powerbi.com/view?r=eyJrIjoiZTczNjgxNDItY2NmYi00NzIyLWE2ODMtODJkNzE1ZjcxMzYwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
              />
              <CardItemGov
               src="https://img.icons8.com/dotty/80/4a90e2/high-priority.png"
                text=""
                label="Ára de risco"
                path="/"
              />
              <CardItemGov
               src="https://img.icons8.com/dotty/80/4a90e2/aztec-headdress.png"
                text=""
                label="Áreas indígenas"
                path="/"
              />
              <CardItemGov
               src="https://img.icons8.com/dotty/80/4a90e2/shield.png"
                text=""
                label="Áreas de proteção permanente"
                path="/"
              />
            </ul>
            <ul className="cards__items">
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}


