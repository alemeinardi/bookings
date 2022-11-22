import styles from "./index.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt,
  faSignOutAlt,
  faGlobe,
  faBed,
  faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Filter({ type, handleClick, value, icon, options }) {

  const icons = {
    from: faSignInAlt,
    to: faSignOutAlt,
    globe: faGlobe,
    bed: faBed,
    dollar: faDollarSign
  }

  if (type!=="combo"){
    return (
    <div className={styles.filter}>
      <input 
        type={type}
        value={value}
        onChange={(e) => handleClick(e.target.value)} />
      <FontAwesomeIcon icon={icons[icon]} className={styles.icon} />
    </div>);}
    else { return (
    <div className={styles.filter}>
      <select 
        value={value}
        onChange={(e) => handleClick(e.target.value)} >
        {options.map((o) => <option key={o.id} value={o.id}>{o.name}</option> )}
      </select>
      <FontAwesomeIcon icon={icons[icon]} className={styles.icon}/>
    </div>)}
}

export default Filter;