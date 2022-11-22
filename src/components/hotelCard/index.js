import styles from "./index.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,
         faBed,
         faDollarSign,
         faCalendar } from '@fortawesome/free-solid-svg-icons';

const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

function HotelCard({ hotel }) {
  return (<div className={styles.hotel__card}>
      <img alt={hotel.name} src={hotel.photo}></img>
      <h2>{hotel.name}</h2>
      <p className={styles.description}>{hotel.description}</p>
      <div className={styles.hotel__data}>
        <div className={styles.card}>
          <div className={styles.icon__card}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <span>{hotel.city},&nbsp;{hotel.country}</span></div>
        <div className={styles.card}>
          <div className={styles.icon__card}>
            <FontAwesomeIcon icon={faBed} />
          </div>
          <span>{`${hotel.rooms} habitaciones`}&nbsp;&nbsp;</span>
          <div className={styles.icon__card}>
            { Array.from({ length: hotel.price }).map((e, i) => {
              return <FontAwesomeIcon icon={faDollarSign} key={i} /> })}
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon__card}>
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <span>Desde&nbsp;{new Date(hotel.availabilityFrom).toLocaleDateString('es-AR', dateOptions )}
          &nbsp;hasta el&nbsp;{new Date(hotel.availabilityTo).toLocaleDateString('es-AR', dateOptions )}
          </span>
        </div>
      </div>
      <button className={styles.reserve__button}>RESERVAR</button>
    </div>);
}

export default HotelCard;