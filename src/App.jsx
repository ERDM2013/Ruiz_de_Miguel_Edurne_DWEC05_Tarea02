// Este es el primer componente, el que contine el titulo y el numero de tours destacados.

import data from "./data";
import Tour from "./Tour";

export default function App() {
  // creo la variable destacado y le digo que filtre los tours destacado = true
  const destacado = data.filter((t) => t.destacado === true);
  return (
    <main>
      <section>
          <div class="title">
          <h2>nuestros tours</h2>
          <div class="underline"></div>
          {/* cuento cuantos tours destacados existen */}
          <h3>tenemos {destacado.length} tour desatcado</h3>
        </div>
        {/* recorro todos los tour con map */}
        {data.map((tour) => (
          // identifico cada tour con su clave unica "id" por que asi React sabe que elemento es el que esta cambiado, y no tiene que dibujar toda la pagina.
          <Tour key={tour.id} tour={tour} />
        ))}
      </section>
    </main>
  );
}
