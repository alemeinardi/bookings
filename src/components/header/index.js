import sytles from "./index.module.css";

function Header ({ overview }) {

  return (
  
  <header>
    <h1>Hoteles</h1>

    <p>{!overview.fromString && !overview.toString ? `En cualquier fecha.` : overview.fromString ? `Desde el ${overview.fromString}` : ``}</p>

    <p>{overview.toString ? `Hasta el ${overview.toString}` : ``}</p>

    <p>{!overview.countryName ? `En cualquier país.` : `En ${overview.countryName}`}</p>

    <p>{!overview.priceName ? `De cualquier precio.` : `${overview.priceName}`}</p>

    <p>{!overview.sizeName ? `De cualquier tamaño.` : `${overview.sizeName}`}</p>

    <p>Existen {overview.quantity} hoteles que cumplen los filtros seleccionados.</p>
  </header>);
}

export default Header;