import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo_lg_l.png';
import Tab from 'react-bootstrap/Tab';
import Style from '../scss/Header.module.scss';
function PageHeader({ propHeader }) {
  const [tabs, setTabs] = useState('personal');
  function handleSelect(e) {
    setTabs(e.target.textContent);
  }
  return (
    <header className={propHeader ? Style.scrollDown : ''}>
      <div className="container">
        <div className="content">
          <div className={Style.header}>
            <Link to={`/`} className={Style.link}>
              <img
                src={Logo}
                alt="logo"
                className={Style.logo}
              />
            </Link>
            <Tab.Content
              className={Style.tabWrap}
              onClick={handleSelect}
            >
              <Tab.Pane
                eventKey="personal"
                className={
                  tabs === 'personal'
                    ? `${Style.tab} ${Style.active}`
                    : Style.tab
                }
              >
                personal
              </Tab.Pane>
              <Tab.Pane
                eventKey="company"
                className={
                  tabs === 'company'
                    ? `${Style.tab} ${Style.active}`
                    : Style.tab
                }
              >
                company
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </div>
    </header>
  );
}
PageHeader.propTypes = {
  propHeader: PropTypes.bool.isRequired,
};
export default PageHeader;
