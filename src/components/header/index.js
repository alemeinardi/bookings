import sytles from "./index.module.css";

function Header ({ overview }) {

  return (
  
  <header>
    <h1>Hoteles</h1>

    <p>{!overview.from && !overview.to ? `En cualquier fecha.` : overview.from ? `Desde el ${overview.from}` : ``}</p>

    <p>{overview.to ? `Hasta el ${overview.to}` : ``}</p>

    <p>{!overview.country ? `En cualquier país.` : `En ${overview.country}`}</p>

    <p>{!overview.price ? `De cualquier precio.` : `${overview.price}`}</p>

    <p>{!overview.size ? `De cualquier tamaño.` : `${overview.size}`}</p>

    <p>Existen {overview.quantity} hoteles que cumplen los filtros seleccionados.</p>
  </header>);
}

export default Header;