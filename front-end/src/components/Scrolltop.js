import { useEffect } from "react";
import { useLocation } from "react-router-dom";
{/* Função que leva a página para o topo automaticamente*/}
export default function ScrollToTop() { 
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}