import { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Style from '../scss/PageIndex.module.scss';
import Mimoji from '../img/mino.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
function PageIndex() {
  const [isScroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ownerInfo, setOwnerInfo] = useState({});
  const [skills, setSkills] = useState([]);
  const [timeLine, setTimeLine] = useState([]);
  const [product, setProduct] = useState([]);
  const [url, setUrl] = useState('');
  async function getData() {
    const response = await fetch(
      'https://raw.githubusercontent.com/thetititle/data/main/archiveweb.json'
    );
    const jsonData = await response.json();
    const ownerInfo = jsonData.allData[0].ownerInfo;
    const skills = ownerInfo.skills;
    const timeLine = jsonData.allData[0].timeLine.reverse();
    const data2 = jsonData.product.slice(0, 5);
    const product = data2.reverse();
    setLoading(false);
    setOwnerInfo(ownerInfo);
    setSkills(skills);
    setTimeLine(timeLine);
    setProduct(product);
    console.log('ownerInfo', ownerInfo);
    console.log('skills', skills);
    console.log('timeLine', timeLine);
    console.log('product', product);
  }

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

  return (
    <main>
      {loading ? (
        ''
      ) : (
        <div>
          <Header propHeader={isScroll} />
          <div className={Style.content}>
            <section id="hello" className={Style.hello}>
              <h1 className="hidden">hello</h1>
              <div className="container">
                <article className={Style.article}>
                  <motion.h1
                    className="mainTt"
                    whileInView={{
                      opacity: 1,
                      rotate: [0, 360],
                      transition: { delay: 0.05 },
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  >
                    Hello! this is thetititle's portfolio
                    <em>.</em>
                  </motion.h1>
                  <div>
                    <p>
                      프로덕트 아카이브 웹사이트입니다.
                      <br />
                      chrome에 최적화 되어있습니다.
                    </p>
                    <em>
                      made with Rreact, JavaScript, SCSS
                      <br />
                      and Framer Motion
                    </em>
                  </div>
                  <motion.span
                    className={`${Style.scrollDown} bold`}
                    initial={{ opacity: 0.2, y: 15 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      },
                    }}
                  >
                    🚀scroll down🌠
                  </motion.span>
                </article>
              </div>
            </section>
            <section
              id="introduce"
              className={Style.introduce}
            >
              <h1 className="hidden">introduce</h1>
              <div className="container">
                <article
                  className={`content ${Style.userWrap}`}
                >
                  <div className={Style.userInfo}>
                    <div className={Style.imgWrap}>
                      <img
                        src={Mimoji}
                        alt="thtitle미모티콘"
                      />
                    </div>
                    <div className={Style.descWrap}>
                      <ul>
                        <li className="bold">
                          {ownerInfo.enName}
                        </li>
                        <li className="subTt">
                          {ownerInfo.koName}
                        </li>
                        <li>{ownerInfo.birthDay}</li>
                      </ul>
                      <ul>
                        <li className="bold">Phone.</li>
                        <li>{ownerInfo.phoneNum}</li>
                        <li className="bold">Email.</li>
                        <li>{ownerInfo.emailAdd}</li>
                        <li className="bold">Based in.</li>
                        <li>{ownerInfo.baseAdd}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="timeLineWrapper">
                    <p className="subTt">⏰TIME LINE</p>
                    <div className="timeLineWrap">
                      <div className="timeLine">
                        {timeLine.map((time) => (
                          <ul
                            key={time.id}
                            className="time"
                          >
                            <li
                              className={
                                time.date === 'NOW'
                                  ? 'timeDate now'
                                  : 'timeDate'
                              }
                            >
                              {time.date}
                            </li>
                            <li className="timeDesc">
                              {time.desc.map(
                                (desc, index) => (
                                  <ul key={index}>
                                    <li>{desc}</li>
                                  </ul>
                                )
                              )}
                            </li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={Style.skillLinks}>
                    <div className={Style.skills}>
                      <p className="subTt">🎮SKILLS</p>
                      <div>
                        {skills.map((skill) => (
                          <img
                            key={skill.name}
                            src={skill.imgUrl}
                            alt={skill.name}
                          />
                        ))}
                      </div>
                    </div>
                    <div className={Style.linksWrap}>
                      <p className="subTt">🔗LINKS</p>
                      <div className={Style.links}>
                        <span>
                          아래 링크를 통해 깃헙과 벨로그를
                          보실 수 있어요!{' '}
                        </span>
                        <div className="btnWrap">
                          <button>
                            <Link to={ownerInfo.gitHub}>
                              <FontAwesomeIcon
                                icon={faGithub}
                              />
                              GITHUB
                            </Link>
                          </button>
                          <button>
                            <Link to={ownerInfo.veLog}>
                              <FontAwesomeIcon
                                icon={faCode}
                              />
                              VELOG
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            <section
              id="products"
              className={Style.productsWrapper}
            >
              <div className="container">
                <article
                  className={`content ${Style.productsWrap}`}
                >
                  <Link to="/" className={Style.titleWrap}>
                    <h1 className="mainTt">products</h1>
                    <p>
                      💡더 많은 product를 보고싶다면
                      Click!✨
                    </p>
                  </Link>
                  <div className={Style.products}>
                    {product.map((item) => (
                      <div
                        key={item.id}
                        className={Style.product}
                      >
                        <img
                          src={item.imgUrl}
                          alt={item.title}
                        />
                        <ul className={Style.name}>
                          <li>{item.title}</li>
                          <li>{item.year}</li>
                        </ul>
                        <div className={Style.skills}>
                          {item.skills.map((i, index) => (
                            <ul key={index}>
                              <li>{i}</li>
                            </ul>
                          ))}
                        </div>
                        <span>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </section>
          </div>
          <Footer propFooter={ownerInfo} />
        </div>
      )}
    </main>
  );
}
export default PageIndex;
