import axios from "axios";
{/* Axios liga o front end para a api , ao fazer deploy alterar para baseURL: "https://observatorioapp.parauapebas.pa.gov.br/api", */}
export default axios.create({
  baseURL: "https://observatorioapp.parauapebas.pa.gov.br/api/",
  headers: {
    "Content-type": "application/json"
  }
});