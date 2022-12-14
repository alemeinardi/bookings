import "./App.css";
import { useState } from "react";
/* Components */
import Header from "./components/header";
import Filter from "./components/filter";
import Button from "./components/button";
import Results from "./components/results";
/* Data */
import hotels from './data/data.js';
import { countries, sizes, prices } from "./data/filterOptions";
/* Functions */
import { DateToString, StringToDate } from "./functions/dateConverter";

function App() {
  /* Filters */
  const [ from, setFrom ] = useState("");
  const [ to, setTo ] = useState("");
  const [ country, setCountry ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ size, setSize ] = useState("");

  // Initialize
  function Initialize() {
    setFrom("");
    setTo("");
    setCountry("");
    setPrice("");
    setSize("");
  }

  // Filters: every possible selection
  const filters = [
    { id: "f1", type: "date",  icon: "from",   value: from,    handleClick: setFrom },
    { id: "f2", type: "date",  icon: "to",     value: to,      handleClick: setTo },
    { id: "f3", type: "combo", icon: "globe",  value: country, handleClick: setCountry, options: countries },
    { id: "f4", type: "combo", icon: "dollar", value: price,   handleClick: setPrice,   options: prices },
    { id: "f5", type: "combo", icon: "bed",    value: size,    handleClick: setSize,    options: sizes }
  ]

  // Filters: each user selection
  const dateFrom = StringToDate(from);
  const dateTo = StringToDate(to);
  const countryName = countries.find(c => c.id === country).name;
  const priceName = prices.find(p => p.id === price).name;
  const sizeName = sizes.find(p => p.id === size).name;

  var hasError = false;

  const filter = () => { 

    hasError = to && from && to < from;

    if (hasError) {
      return [];
    }
    else {
    return hotels
    .filter((hotel) => 
      dateFrom ? hotel.availabilityFrom <= dateFrom : hotel)
    .filter((hotel) => 
      dateTo ? new Date(hotel.availabilityTo) >= dateTo : hotel)
    .filter((hotel) => 
      country ? hotel.country === countryName : hotel)
    .filter((hotel) =>
      price ? hotel.price === Number(price) : hotel)
    .filter((hotel) => {
      if (size === "P") {
        return hotel.rooms <= 10;
      } else if (size === "M") {
        return hotel.rooms > 10 && hotel.rooms <= 20;
      } else if (size === "G") {
        return hotel.rooms > 20;
      } else {
        return hotel;
      }
   })}};

  const filteredHotels = filter();

  // Filter overview
  const overview = {
    fromString: DateToString(dateFrom),
    toString: DateToString(dateTo),
    countryName: country && countryName,
    priceName: price && priceName,
    sizeName: size && sizeName,
    quantity: filteredHotels.length
  }  

  return (
    <div className="App">
      <Header overview={overview}/>
      <nav>
        <div className="filters">
          { filters.map((filter) => 
            { return <Filter
                key={filter.id}
                type={filter.type}
                icon={filter.icon} 
                value={filter.value}
                handleClick={filter.handleClick}
                options={filter.options}/>}
            )}
          <Button
            icon="trash"
            value="LIMPIAR" 
            handleClick={Initialize} />
        </div>
        <div className="error"> { hasError ? <p>La fecha de inicio debe ser menor a la de egreso</p> : ""}</div>
      </nav>
      <Results filteredHotels={filteredHotels} />
    </div>
  );
}

export default App;