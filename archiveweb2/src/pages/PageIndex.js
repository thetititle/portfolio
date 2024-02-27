import { useEffect, useState } from 'react';
import Header from '../component/Header';
import Style from '../scss/PageIndex.module.scss';
import { motion } from 'framer-motion';
function PageIndex() {
  const [isScroll, setScroll] = useState(false);
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
                <p>프로덕트 아카이브 웹사이트입니다.</p>
                <em>
                  made with Rreact, SCSS and Framer Motion
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
        <section id="introduce" className={Style.introduce}>
          <div className="container">
            <article
              className={`content ${Style.userWrap}`}
            >
              <div className={Style.userInfo}>
                미모티콘,신상
              </div>
              <div className={Style.timeLine}>타임라인</div>
              <div className={Style.skillLinks}>
                스킬,링크
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
export default PageIndex;
