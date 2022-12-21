import HotelCard from "../hotelCard";

function Results({filteredHotels}) {
  return (
    <main>
    {filteredHotels.map((hotel) => 
      <HotelCard 
        key={hotel.slug} 
        hotel={hotel} />)}
  </main>)
}

export default Results;