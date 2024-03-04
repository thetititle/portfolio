import { useEffect, useState } from 'react';
import PageHeader from '../component/PageHeader';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import Style from '../scss/PageProducts.module.scss';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function PageProducts() {
  const [isScroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [ownerInfo, setOwnerInfo] = useState({});
  const isNavi = useState('personal');
  const [isFixed, setFixed] = useState(false);
  const [isShow, setShow] = useState(false);
  const navigate = useNavigate();

  async function getData() {
    const response = await fetch(
      'https://raw.githubusercontent.com/thetititle/data/main/archiveweb.json'
    );
    const jsonData = await response.json();
    const data1 = jsonData.product;
    const ownerInfo = jsonData.allData[0].ownerInfo;
    const product = data1
      .filter((item) => item.type === 'personal')
      .reverse();
    setLoading(false);
    setProduct(product);
    setOwnerInfo(ownerInfo);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
          setScroll(true);
          if (window.scrollY > 1000) {
            setFixed(true);
          } else {
            setFixed(false);
          }
        } else {
          setScroll(false);
        }
      }),
    [isScroll]
  );

  function showNave() {
    setShow((isShow) => !isShow);
  }

  function OpenWindow(href) {
    const thispage =
      'http://thetititle.com/products/personal';
    if (href === '#') {
      alert('준비중 이에요(🎀ॣ•͈з•͈ ॣ)');
    } else if (href.includes('knotted')) {
      var userAgent = navigator.userAgent;
      var isMobile = userAgent.match(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      );
      if ((userAgent = isMobile)) {
        alert('PC에서 볼 수 있어요⊹꒰⍢⑅ ꒱꙳');
      } else {
        window.open(href, 'blank');
      }
    } else if (href === 'products') {
      navigate('/products', { replace: false });
    } else if (href === thispage) {
      alert('현재 보고있는 사이트에요⊹꒰ ⑅·͈·̮·͈꒱ ♡⊹');
    } else {
      window.open(href, 'blank');
    }
  }

  return (
    <main>
      {loading ? (
        ''
      ) : (
        <div>
          <PageHeader
            propHeader={isScroll}
            propNavi={isNavi}
          />
          <div className="container">
            <div className={Style.content}>
              <div className={Style.productswrap}>
                <div className={Style.titleWrap}>
                  <h1 className="mainTt">
                    Products<em>.</em>
                  </h1>
                  <span>
                    공부하거나 스스로 좋아서 작업한 것들을
                    기록해요😎
                    <br />
                    왼쪽 최상단이 가장 최근 작업물이며,
                    역순으로 배열되었습니다.
                  </span>
                </div>
                <motion.article
                  className="content"
                  initial={{ opacity: 0.2, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: 0.1 },
                    y: 0,
                  }}
                >
                  <div className={Style.products}>
                    {product.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ y: 0 }}
                        whileHover={{
                          scale: 1.1,
                          transition: { delay: 0.1 },
                          y: -50,
                        }}
                      >
                        <div
                          to={item.href}
                          target="_blank"
                          className={Style.product}
                          onClick={() => {
                            OpenWindow(item.href);
                          }}
                        >
                          <img
                            src={item.imgUrl}
                            alt={item.title}
                          />
                          <ul className={Style.name}>
                            <li className="bold">
                              {item.title}
                            </li>
                            <li>{item.year}</li>
                          </ul>
                          <div className={Style.skills}>
                            {item.skills.map((i, index) => (
                              <ul key={index}>
                                <li>{i}</li>
                              </ul>
                            ))}
                          </div>
                          <ul className={Style.name}>
                            <li>{item.desc}</li>
                            <li>{item.responsive}</li>
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.article>
              </div>
            </div>
            <div
              className={
                isFixed ? 'mobileNav fixed' : 'mobileNav'
              }
              onClick={showNave}
            >
              <div
                className={
                  isShow ? 'mobileTab show' : 'mobileTab'
                }
              >
                <ul>
                  <li>
                    <Link to="/products/personal">
                      PERSONAL
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/company">
                      COMPANY
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hamberger">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
          <Footer propFooter={ownerInfo} />
        </div>
      )}
    </main>
  );
}
export default PageProducts;
