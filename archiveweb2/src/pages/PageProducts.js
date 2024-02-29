import { useEffect, useState } from 'react';
import PageHeader from '../component/PageHeader';
import Footer from '../component/Footer';
import Style from '../scss/PageProducts.module.scss';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function PageProducts() {
  const [isScroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [ownerInfo, setOwnerInfo] = useState({});
  const isNavi = useState('personal');
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
  console.log('product', product);
  useEffect(() => {
    getData();
  }, []);
  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }),
    [isScroll]
  );

  function OpenWindow(href) {
    const thispage = window.location.href;
    if (href === '#') {
      alert('준비중 이에요!');
    } else if (href.includes('knotted')) {
      var userAgent = navigator.userAgent;
      var isMobile = userAgent.match(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      );
      if ((userAgent = isMobile)) {
        alert('PC에서 볼 수 있어요!');
      } else {
        window.open(href, 'blank');
      }
    } else if (href === 'products') {
      navigate('/products', { replace: false });
    } else if (href === thispage) {
      alert('현재 페이지에요!');
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
          </div>
          <Footer propFooter={ownerInfo} />
        </div>
      )}
    </main>
  );
}
export default PageProducts;
