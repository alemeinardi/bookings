import styles from "./index.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Button({ value, handleClick, icon }) {

  const icons = {
    trash: faTrash
  }

  return (<div className={styles.button_container}>
    <button 
      onClick={handleClick}>
        {value}
    </button>
    <FontAwesomeIcon icon={icons[icon]} className={styles.icon} />
  </div>);
}

export default Button;