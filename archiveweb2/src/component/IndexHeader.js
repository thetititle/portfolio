import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Logo from '../img/Logo_lg_l.png';
import Tab from 'react-bootstrap/Tab';
import Style from '../scss/Header.module.scss';

function IndexHeader({ propHeader, propsNavId }) {
  const [tabs, setTabs] = useState('hello');
  const [isScroll, setScroll] = useState(false);
  function handleSelect(e) {
    // setTabs(e.target.textContent);
    propsNavId(e.target.id);
  }

  function goTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
          setScroll(true);
          if (window.scrollY < 920) {
            setTabs('introduce');
          } else if (
            window.scrollY >= 920 &&
            window.scrollY < 1760
          ) {
            setTabs('product');
          } else if (window.scrollY >= 1760) {
            setTabs('this page');
          }
        } else {
          setScroll(false);
          setTabs('hello');
        }
      }),
    [isScroll]
  );

  return (
    <header className={propHeader ? Style.scrollDown : ''}>
      <div className="container">
        <div className="content">
          <div className={Style.header}>
            <div className={Style.link} onClick={goTop}>
              <img
                src={Logo}
                alt="logo"
                className={Style.logo}
              />
            </div>
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
  propsNavId: PropTypes.func.isRequired,
};
export default IndexHeader;
