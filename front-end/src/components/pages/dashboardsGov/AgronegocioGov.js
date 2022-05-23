import React from "react";
import "../../../App.css";
import "../../Cards.css";
import CardItemGov from "../../CardItemGov";
{/* Cards de opções de submenu de mapas de agronegócio*/}
export default function DespesasFork() {
  return (
    <>
      <div className="cards">
        <h1>Agronegócio</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItemGov
                src="https://img.icons8.com/dotty/80/4a90e2/cuts-of-beef.png"
                text=""
                label="Pecuaria"
                path="https://app.powerbi.com/view?r=eyJrIjoiMWIzOTJkMDUtODQ2My00YmVkLTkyMWItYzk5YWMzYTRiNTQ2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionb0e6c73a235be3563e14"
              />
              <CardItemGov
                src="https://img.icons8.com/dotty/80/4a90e2/corn.png"
                text=""
                label="Produção agrícola"
                path="https://app.powerbi.com/view?r=eyJrIjoiZWJjMWY4NjQtOTNjZi00MjZkLWI2MTUtNWM4OTRkMDA2YTMzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionbb7462198a140912ce6d"
              />
              <CardItemGov
                src="https://img.icons8.com/dotty/80/4a90e2/wheat.png"
                text=""
                label="Agricultura Familiar"
                path="https://app.powerbi.com/view?r=eyJrIjoiNzEzNjM5MzYtOGJkNC00NDUyLTk5NTAtYWVhZDUxZjIxNTg0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionf42cb233b051a4a1e819"
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


