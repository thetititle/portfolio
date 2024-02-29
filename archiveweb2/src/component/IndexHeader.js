import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo_lg_l.png';
import Tab from 'react-bootstrap/Tab';
import Style from '../scss/Header.module.scss';
function IndexHeader({ propHeader, propsNavi }) {
  const [tabs, setTabs] = useState('hello');
  function handleSelect(e) {
    setTabs(e.target.textContent);
    propsNavi([e.target.textContent, e.target.id]);
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
                id="0"
                eventKey="hello"
                className={
                  tabs === 'hello'
                    ? `${Style.tab} ${Style.active}`
                    : Style.tab
                }
              >
                hello
              </Tab.Pane>
              <Tab.Pane
                id="1"
                eventKey="introduce"
                className={
                  tabs === 'introduce'
                    ? `${Style.tab} ${Style.active}`
                    : Style.tab
                }
              >
                introduce
              </Tab.Pane>
              <Tab.Pane
                id="2"
                eventKey="product"
                className={
                  tabs === 'product'
                    ? `${Style.tab} ${Style.active}`
                    : Style.tab
                }
              >
                product
              </Tab.Pane>
              <Tab.Pane
                id="3"
                eventKey="this page"
                className={
                  tabs === 'this page'
                    ? `${Style.tab} ${Style.active}`
                    : Style.tab
                }
              >
                this page
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </div>
    </header>
  );
}
IndexHeader.propTypes = {
  propHeader: PropTypes.bool.isRequired,
};
export default IndexHeader;
