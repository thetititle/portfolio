import { Link } from 'react-router-dom';
import Logo from '../img/Logo_lg_l.png';
import Styles from '../scss/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
function IndexFooter() {
  function goTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className={Styles.footer}>
            <div className={Styles.link} onClick={goTop}>
              <img src={Logo} alt="logo" />
            </div>
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
export default IndexFooter;
