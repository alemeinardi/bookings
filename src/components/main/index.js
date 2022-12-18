import HotelCard from "../hotelCard";

function Main({filteredHotels}) {
  return (
    <main>
    {filteredHotels.map((hotel) => 
      <HotelCard 
        key={hotel.slug} 
        hotel={hotel} />)}
  </main>)
}

export default Main;