import { useReducer } from 'react';
import styles from '../../styles/sidebar.module.css';

function toggleMenu(isMenuOpen: boolean) {
  return !isMenuOpen;
}

export const Sidebar = () => {
  const [isMenuOpen, dispatch] = useReducer(toggleMenu, false);

  return (
    <div>
      <button type="button" className={styles.openButton} onClick={() => dispatch()}>
        <span>OOO</span>
      </button>
      <div className={isMenuOpen ? styles.open : styles.close}>
        <button type="button" className={styles.closeButton} onClick={() => dispatch()}>
          <span>XXX</span>
        </button>
        <div className={styles.content}>
          <ul>
            <li>New Item</li>
            <li>New Item</li>
            <li>New Item</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
