// Aqui vamos a coger el array de tours para despues renderizarlo

import data from "./data";

export default function Tours({ tour }) {
  // Si no hay informacion del viaje, no renderiza el tour
  if(!tour.info){
    return null;
  }
  const destacado = tour.destacado;
  const imagen = tour.image;
  const precio = tour.price;

  return (
  //si destacado = true, usa una clase y si no otra
    <article className={destacado ? "single-tour destacado" : "single-tour"}>
      <img
        src={
          // Si exite imagen del tour lo usa, si no usa el enlace
          imagen
            ? tour.image
            : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
        alt = {tour.name} // nombre del tour
      />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">
            {/* si exite precio lo pinta, si no pinta "A consultar" */}
            {precio ? tour.price + "€" : "A consultar"}
          </h4>
        </div>
        <p>{tour.info}</p>{/*informacion del tour*/}
      </footer>
    </article>
    
  )
}
