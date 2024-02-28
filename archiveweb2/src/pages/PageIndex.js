import { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Style from '../scss/PageIndex.module.scss';
import Mimoji from '../img/mino.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function PageIndex() {
  const [isScroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ownerInfo, setOwnerInfo] = useState({});
  const [skills, setSkills] = useState([]);
  const [timeLine, setTimeLine] = useState([]);
  const [product, setProduct] = useState([]);
  async function getData() {
    const response = await fetch(
      'https://raw.githubusercontent.com/thetititle/data/main/archiveweb.json'
    );
    const jsonData = await response.json();
    const ownerInfo = jsonData.allData[0].ownerInfo;
    const skills = ownerInfo.skills;
    const timeLine = jsonData.allData[0].timeLine.reverse();
    const product = jsonData.product.reverse();
    setLoading(false);
    setOwnerInfo(ownerInfo);
    setSkills(skills);
    setTimeLine(timeLine);
    setProduct(product);
    console.log(timeLine);
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
    []
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
                        <li>{ownerInfo.enName}</li>
                        <li>{ownerInfo.koName}</li>
                        <li>{ownerInfo.birthDay}</li>
                      </ul>
                      <ul>
                        <li>Phone.</li>
                        <li>{ownerInfo.phoneNum}</li>
                        <li>Email.</li>
                        <li>{ownerInfo.emailAdd}</li>
                        <li>Based in.</li>
                        <li>{ownerInfo.baseAdd}</li>
                      </ul>
                    </div>
                  </div>
                  <div className={Style.timeLineWrap}>
                    <div className={Style.timeLine}>
                      {timeLine.map((time) => (
                        <ul
                          key={time.id}
                          className={Style.time}
                        >
                          <li className={Style.timeDate}>
                            {time.date}
                          </li>
                          <li className={Style.timeDesc}>
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
                  <div className={Style.skillLinks}>
                    <div>
                      {skills.map((skill) => (
                        <img
                          key={skill.name}
                          src={skill.imgUrl}
                          alt={skill.name}
                        />
                      ))}
                    </div>
                    <div>
                      <button>
                        <Link to={ownerInfo.gitHub}>
                          github
                        </Link>
                      </button>
                      <button>
                        <Link to={ownerInfo.veLog}>
                          velog
                        </Link>
                      </button>
                    </div>
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
