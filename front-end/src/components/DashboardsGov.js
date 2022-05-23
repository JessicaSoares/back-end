import React from "react";
import "./Cards.css";
import CardItem from "./CardItem"
import CardItemgov from "./CardItemGov";
import Search from '../components/Search';
import initialDetails from '../components/data/initialDetails';
{/* Cards que redirecionam para dashboard governamentais PowerBI*/ }
function DashboardsGov() {
  return (
    <>
      <Search details={initialDetails} />
      <div className="cards">
        <h1>Dashboards governamentais</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/plumbing.png"
                text=""
                label="Abastecimento de água"
                path="https://app.powerbi.com/view?r=eyJrIjoiY2M5ODMwY2QtNmYxMC00NTVkLThjYWUtNmE5ZjRlZTU0MDg5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
              />

              {/* Card de item de dashboard governamental que recebe link do ícone, label e link do powerBI*/}
              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/factory.png"
                text=""
                label="Empresas"
                path="https://app.powerbi.com/view?r=eyJrIjoiNTI1MGNhZDEtMWRhNC00YTMxLTgwYWUtOTYwZGY2ZjA0NzM2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
              />

              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/permanent-job.png"
                text=""
                label="Empregos"
                path="https://app.powerbi.com/view?r=eyJrIjoiOGFkYWZiZTgtMjg3Ny00YmU4LTlmMDQtZmU4OWQxOTExNGNhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
              />
            </ul>
            <ul className="cards__items">

              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/student-female.png"
                text=""
                label="Educação"
                path="https://app.powerbi.com/view?r=eyJrIjoiMWQyZGI3ZjktY2JiMC00NDIxLWEwN2UtM2ZmNjc3Yjk2ZWUyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8c64ac8101c870e23b35"
              />
              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/banknotes.png"
                text=""
                label="PIB"
                path="https://app.powerbi.com/view?r=eyJrIjoiMzA5YzZhOGQtYTRjNi00OWFjLWE1NTYtZTQ0N2RlMDllNGU3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
              />
              <CardItem
                src="https://img.icons8.com/dotty/80/26e07f/tractor.png"
                text=""
                label="Agronegócio"
                path="/agronegociogov"
              />
            </ul>

            <ul className="cards__items">
              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/guest-female.png"
                text=""
                label="Mulher"
                path="https://app.powerbi.com/view?r=eyJrIjoiOTc5NGQ0M2QtMjJmYi00ZWMxLWE4MGYtODg2YWZjZjhhNTc5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
              />
              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/groups.png"
                text=""
                label="Populacao"
                path="https://app.powerbi.com/view?r=eyJrIjoiNDA3MmZkNzAtYWE3My00NTU5LThlZGEtOGYzMzQyMTJjYzIzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
              />
              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/water-pipe.png"
                text=""
                label="Esgoto"
                path="https://app.powerbi.com/view?r=eyJrIjoiOWU0YjNhYzgtNzVkYi00NmEyLWI0MzMtMDE1YjExNGZiMDBjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
              />
            </ul>

            <ul className="cards__items">

              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/bank-building.png"
                text=""
                label="Comércio exterior"
                path="https://app.powerbi.com/view?r=eyJrIjoiNGU1NGExNDktM2E2MS00NmQ1LTg4NmItMzVjYzZiNGM3ZGVmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335"
              />

              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/fund-accounting.png"
                text=""
                label="Orçamento"
                path="https://app.powerbi.com/view?r=eyJrIjoiNGE5YjM5YTItZTQyOS00YjgzLWExNmItZWI3ZDA5NDc3MzUwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
              />

              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/spiral-bulb.png"
                text=""
                label="Iluminação Pública"
                path="https://app.powerbi.com/view?r=eyJrIjoiOTBmYWVlZTItNTZjOC00NDA4LTliMTYtOWNjYTNjN2RkYzU3https://app.powerbi.com/view?r=eyJrIjoiOTBmYWVlZTItNTZjOC00NDA4LTliMTYtOWNjYTNjN2RkYzU3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
              />


            </ul>

            <ul className="cards__items">

              <CardItem
                src="https://img.icons8.com/dotty/80/26e07f/environment.png"
                text=""
                label="Meio Ambiente"
                path="/meioambientegov"
              />

              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/tour-bus.png"
                text=""
                label="Turismo"
                path="https://app.powerbi.com/view?r=eyJrIjoiMmU2NDUzNjgtNzJmMy00YzU3LWFkMTgtNjc3ZjA5ZjE4MzMxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection41f1822705c652e6cac3"
              />

              <CardItemgov
                src="https://img.icons8.com/dotty/80/26e07f/traffic-light.png"
                text=""
                label="Trânsito"
                path="https://app.powerbi.com/view?r=eyJrIjoiYWY5ZTNhN2MtNzNkNy00NjEyLTg5NDUtYzQ4YjU4YjJiN2Q5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectione95bc6f91a3b1b830bca"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardsGov;
