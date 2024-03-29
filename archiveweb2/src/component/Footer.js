import { Link } from 'react-router-dom';
import Logo from '../img/Logo_lg_l.png';
import Styles from '../scss/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className={Styles.footer}>
            <Link to={`/`} className={Styles.link}>
              <img src={Logo} alt="logo" />
            </Link>
            <button className="noBorder">
              <Link
                to={`#`}
                onClick={() =>
                  (window.location =
                    'mailto:business.thetititle@gmail.com')
                }
                className={Styles.link}
              >
                <div className={Styles.mailTo}>
                  <FontAwesomeIcon icon={faAt} />
                  <p>CONTACT ME</p>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
