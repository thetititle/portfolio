import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import IndexHeader from '../component/IndexHeader';
import IndexFooter from '../component/IndexFooter';
import Style from '../scss/PageIndex.module.scss';
import Mimoji from '../img/mino.png';

function PageIndex() {
  const [isScroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ownerInfo, setOwnerInfo] = useState({});
  const [skills, setSkills] = useState([]);
  const [timeLine, setTimeLine] = useState([]);
  const [product, setProduct] = useState([]);
  const [issueCheck, setIssueCheck] = useState([]);
  const [isFixed, setFixed] = useState(false);
  const [isShow, setShow] = useState(false);
  const navigate = useNavigate();

  const listRef = useRef(null);

  function SelectNavi(data) {
    const listNode = listRef.current;
    const imgNode =
      listNode.querySelectorAll('section')[data];
    imgNode.scrollIntoView({
      behavior: 'smooth',
    });
  }
  function SelectNavi2(e) {
    let id = e.target.id;
    const listNode = listRef.current;
    const imgNode =
      listNode.querySelectorAll('section')[id];
    imgNode.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function showNave() {
    setShow((isShow) => !isShow);
  }

  async function GetData() {
    const response = await fetch(
      'https://raw.githubusercontent.com/thetititle/data/main/archiveweb.json'
    );
    const jsonData = await response.json();
    const ownerInfo = jsonData.allData[0].ownerInfo;
    const skills = ownerInfo.skills;
    const timeLine = jsonData.allData[0].timeLine.reverse();
    const data2 = jsonData.product.slice(0, 8);
    const product = data2.reverse();
    const issueCheck = product.filter(
      (item) => item.id === '4'
    )[0].issueCheck;
    setLoading(false);
    setOwnerInfo(ownerInfo);
    setSkills(skills);
    setTimeLine(timeLine);
    setProduct(product);
    setIssueCheck(issueCheck);
    console.log('ownerInfo', ownerInfo);
    console.log('skills', skills);
    console.log('timeLine', timeLine);
    console.log('issueCheck', issueCheck);
  }

  useEffect(() => {
    GetData();
  }, []);

  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
          setScroll(true);
          if (window.scrollY > 5800) {
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

  function OpenWindow(href) {
    const thispage = window.location.href;
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
          <IndexHeader
            propHeader={isScroll}
            propsNavId={SelectNavi}
          />
          <div className={Style.content} ref={listRef}>
            <section className={Style.hello}>
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
                      made with React, JavaScript, SCSS
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
            <section className={Style.introduce}>
              <h1 className="hidden">introduce</h1>
              <div className="container">
                <motion.article
                  className={`content ${Style.userWrap}`}
                  initial={{ opacity: 0.2, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: 0.1 },
                    y: 0,
                  }}
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
                  <div className={Style.timeSkills}>
                    <div
                      className={`timeLineWrapper ${Style.timeLineWrapper}`}
                    >
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
                              className={Style.skillImg}
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
                  </div>
                </motion.article>
              </div>
            </section>
            <section className={Style.productsWrapper}>
              <div className="container">
                <motion.article
                  className={`content ${Style.productsWrap}`}
                  initial={{ opacity: 0.2, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: 0.1 },
                    y: 0,
                  }}
                >
                  <Link
                    to="/products/personal"
                    className={Style.titleWrap}
                  >
                    <h1 className="mainTt">
                      products<em>.</em>
                    </h1>
                    <p>
                      💻PC적응형, 📱Mobile적응형, 💫반응형
                    </p>
                    <p>
                      💡더 많은 product를 보고싶다면
                      Click!✨
                    </p>
                  </Link>
                  <div className={Style.products}>
                    {product.map((item) => (
                      <motion.div
                        className={Style.productsList}
                        key={item.id}
                        initial={{ y: 0 }}
                        whileHover={{
                          scale: 1.1,
                          transition: { delay: 0.1 },
                          y: -50,
                        }}
                      >
                        <div
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
                            <li>
                              {item.responsive === 'PC'
                                ? '💻'
                                : item.responsive ===
                                  'MOBILE'
                                ? '📱'
                                : '💫'}
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.article>
              </div>
            </section>
            <section className={Style.thispage}>
              <div className="container">
                <motion.article
                  className={`content ${Style.thisPwarp}`}
                >
                  <div className={Style.poster}>poster</div>
                  <div className={Style.thisDesc}>
                    <h1 className="mainTt">
                      This Page<em>.</em>
                    </h1>
                    <div className={Style.desc}>
                      <ul>
                        <li className="bold">제작기간</li>
                        <li>2024.02.27~2024.02.29</li>
                        <li>
                          지속적으로 보완하며 보다 더 나은
                          페이지가 되도록 노력합니다.
                        </li>
                      </ul>
                      <ul>
                        <li className="bold">사용스킬</li>
                        <li>
                          HTML5, SCSS, REACT, JavaScript
                        </li>
                      </ul>
                      <ul>
                        <li className="bold">Data</li>
                        <li>Json (console 확인가능)</li>
                      </ul>
                      <ul>
                        <li className="bold">
                          RESPONSIVE (완료)
                        </li>
                        <li>@media</li>
                        <li>(max-width: 320px)</li>
                        <li>
                          (min-width: 321px) and (max-width:
                          500px)
                        </li>
                        <li>
                          (min-width: 501px) and (max-width:
                          768px)
                        </li>
                        <li>
                          (min-width: 769px) and (max-width:
                          1024px)
                        </li>
                      </ul>
                    </div>
                    <div className="timeLineWrapper">
                      <p className="subTt">📌ISSUE CHECK</p>
                      <div
                        className={`timeLineWrap ${Style.height}`}
                      >
                        <div className="timeLine">
                          {issueCheck.map((item) => (
                            <ul
                              key={item.id}
                              className="time"
                            >
                              <li
                                className={
                                  item.complate === 'NOW'
                                    ? 'timeDate now'
                                    : 'timeDate'
                                }
                              >
                                {item.complate}
                              </li>
                              <li className="timeDesc">
                                {item.desc}
                              </li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            </section>
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
                <ul onClick={SelectNavi2}>
                  <li id="0">HELLO</li>
                  <li id="1">INTRODUSE</li>
                  <li id="2">PRODUCTS</li>
                  <li id="3">THIS PAGE</li>
                </ul>
              </div>
              <div className="hamberger">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
          <IndexFooter propFooter={ownerInfo} />
        </div>
      )}
    </main>
  );
}
export default PageIndex;
