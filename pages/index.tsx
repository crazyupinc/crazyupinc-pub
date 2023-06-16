import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import ProjectPopup from "../components/project-popup";
import PortalPopup from "../components/portal-popup";
import DrawerMenu from "../components/drawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./index.module.css";
const Main: NextPage = () => {
  const [isProjectPopupOpen, setProjectPopupOpen] = useState(false);
  const [isProjectPopup1Open, setProjectPopup1Open] = useState(false);
  const [isProjectPopup2Open, setProjectPopup2Open] = useState(false);
  const [isProjectPopup3Open, setProjectPopup3Open] = useState(false);
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);

  const openProjectPopup = useCallback(() => {
    setProjectPopupOpen(true);
  }, []);

  const closeProjectPopup = useCallback(() => {
    setProjectPopupOpen(false);
  }, []);

  const openProjectPopup1 = useCallback(() => {
    setProjectPopup1Open(true);
  }, []);

  const closeProjectPopup1 = useCallback(() => {
    setProjectPopup1Open(false);
  }, []);

  const openProjectPopup2 = useCallback(() => {
    setProjectPopup2Open(true);
  }, []);

  const closeProjectPopup2 = useCallback(() => {
    setProjectPopup2Open(false);
  }, []);

  const openProjectPopup3 = useCallback(() => {
    setProjectPopup3Open(true);
  }, []);

  const closeProjectPopup3 = useCallback(() => {
    setProjectPopup3Open(false);
  }, []);

  const onOurApproachClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourApproachContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWorksTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='worksContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourProjectsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOurTeamTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourTeamContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServiceTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='serviceContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(true);
  }, []);

  const closeNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onLandingButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourProjectsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkText5Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='serviceContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onInstaClick = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  const onFaceBookClick = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onPinterClick = useCallback(() => {
    window.open("https://www.pinterest.co.kr/");
  }, []);

  return (
    <>
      <div className={styles.main}>
        <img
          className={styles.heroBackgroundTextIcon}
          alt=""
          src="/herobackgroundtext.svg"
        />
        <nav className={styles.naviDiv}>
          <header className={styles.headerNavigation}>
            <div className={styles.logo}>
              <b className={styles.crazyupinc}>CRAZYUP</b>
            </div>
            <div className={styles.navigationMenu}>
              <a className={styles.navigationLink}>
                <h2 className={styles.ourApproach} onClick={onOurApproachClick}>
                  Our Approach
                </h2>
                <b className={styles.works} onClick={onWorksTextClick}>
                  Works
                </b>
                <b className={styles.projects} onClick={onProjectsTextClick}>
                  Projects
                </b>
                <b className={styles.projects} onClick={onOurTeamTextClick}>
                  Our Team
                </b>
                <b className={styles.projects} onClick={onServiceTextClick}>
                  Service
                </b>
              </a>
              <div className={styles.memberSection}>
                <button className={styles.button}>
                  <div className={styles.register}>Sign in</div>
                </button>
                <button className={styles.button1}>
                  <div className={styles.logIn}>Log in</div>
                </button>
              </div>
            </div>
            <img
              className={styles.hambugerMenuIcon}
              alt=""
              src="/hambugermenu.svg"
              onClick={openNavigationMenu}
            />
          </header>
        </nav>
        <div className={styles.heroSection}>
          <div className={styles.projectMockup} data-animate-on-scroll>
            <img
              className={styles.project3Icon}
              alt=""
              src="/project3@2x.png"
            />
            <img
              className={styles.project2Icon}
              alt=""
              src="/project2@2x.png"
            />
            <img
              className={styles.project1Icon}
              alt=""
              src="/project1@2x.png"
            />
          </div>
          <div className={styles.heroText}>
            <b className={styles.whyCrazyUp}>WHY Crazy Up</b>
            <div className={styles.pagenation}>
              <div className={styles.page1}>01</div>
              <div className={styles.spanLine} />
              <div className={styles.project}>02</div>
              <div className={styles.spanLine} />
              <div className={styles.project}>03</div>
            </div>
            <div className={styles.heroTitle}>
              <div className={styles.title}>020 Business</div>
              <div className={styles.title1}>Developer</div>
            </div>
            <b className={styles.subTitle}>
              <p className={styles.ux}>
                전략, 브랜딩, UX 디자인, 웹/앱 개발, 마케팅까지
              </p>
              <p className={styles.ux}>디지털 시대 최적의 사업개발 파트너</p>
            </b>
            <div className={styles.description}>
              <p className={styles.ux}>
                어글리스미스는 단순 개발 에이전시가 아닙니다. 찍어내기식 외주가
                아닌
              </p>
              <p className={styles.ux}>
                고객사와 함께 사업단계별 전략을 도출하고, 단계별 맞춤형 솔루션을
                제공합니다.
              </p>
            </div>
          </div>
          <div className={styles.landingProjectsSection}>
            <div className={styles.project}>웹/ 앱 개발 프로젝트 이름</div>
            <button
              className={styles.landingButton}
              onClick={onLandingButtonClick}
            >
              <div className={styles.projects1}>포트폴리오 보기</div>
            </button>
          </div>
        </div>
        <div
          className={styles.ourApproach1}
          data-scroll-to="ourApproachContainer"
        >
          <div className={styles.title2} data-animate-on-scroll>
            <div className={styles.ourApproach2}>
              <div className={styles.serviceName}>Our Approach</div>
            </div>
            <div className={styles.description1}>
              <p className={styles.ux}>
                전온오프라인에서 일관된 고객경험(UX)를 목표로 경쟁사 대비 차별화
                방향을 고민하고,
              </p>
              <p className={styles.ux}>
                고객 경험을 디자인하고 온오프라인 서비스를 구현해 고객에게
                연결하는 통합 서비스를 지향합니다.
              </p>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.div}>
              <b className={styles.crazyupinc}>Understand</b>
              <div className={styles.div1}>
                <img className={styles.buttonIcon} alt="" src="/button.svg" />
                <div className={styles.hideContents}>
                  <div className={styles.requestDetails}>
                    <p className={styles.ux}>
                      트렌드를 분석하여 변화하는 환경에서
                    </p>
                    <p className={styles.ux}>
                      제품.서비스의 차별화 방향을 제시합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <b className={styles.understand1}>Design</b>
              <div className={styles.div3}>
                <img className={styles.buttonIcon1} alt="" src="/button1.svg" />
                <div className={styles.hideContents}>
                  <div className={styles.requestDetails}>
                    <p className={styles.ux}>
                      트렌드를 분석하여 변화하는 환경에서
                    </p>
                    <p className={styles.ux}>
                      제품.서비스의 차별화 방향을 제시합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <b className={styles.crazyupinc}>UX</b>
              <div className={styles.div5}>
                <img className={styles.buttonIcon1} alt="" src="/button2.svg" />
                <div className={styles.hideContents}>
                  <div className={styles.requestDetails}>
                    <p className={styles.ux}>
                      트렌드를 분석하여 변화하는 환경에서
                    </p>
                    <p className={styles.ux}>
                      제품.서비스의 차별화 방향을 제시합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <b className={styles.understand3}>Analyze</b>
              <div className={styles.div7}>
                <img className={styles.buttonIcon1} alt="" src="/button3.svg" />
                <div className={styles.hideContents}>
                  <div className={styles.requestDetails}>
                    <p className={styles.ux}>
                      트렌드를 분석하여 변화하는 환경에서
                    </p>
                    <p className={styles.ux}>
                      제품.서비스의 차별화 방향을 제시합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <b className={styles.understand4}>Feedback</b>
              <div className={styles.div9}>
                <img className={styles.buttonIcon1} alt="" src="/button2.svg" />
                <div className={styles.hideContents}>
                  <div className={styles.requestDetails}>
                    <p className={styles.ux}>
                      트렌드를 분석하여 변화하는 환경에서
                    </p>
                    <p className={styles.ux}>
                      제품.서비스의 차별화 방향을 제시합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.works1} data-scroll-to="worksContainer">
          <img
            className={styles.backgroundShapesIcon}
            alt=""
            src="/backgroundshapes.svg"
            data-animate-on-scroll
          />
          <div className={styles.title3} data-animate-on-scroll>
            Works
          </div>
          <div className={styles.contents6} data-animate-on-scroll>
            <div className={styles.divLeft}>
              <div className={styles.worksStep1}>
                <div className={styles.div10}>
                  <img className={styles.icon} alt="" src="/01.svg" />
                  <div className={styles.title4}>Strategy Consulting</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                </div>
              </div>
              <div className={styles.worksStep1}>
                <div className={styles.div10}>
                  <img className={styles.icon1} alt="" src="/02.svg" />
                  <div className={styles.title4}>Strategy Consulting</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divRight}>
              <div className={styles.worksStep1}>
                <div className={styles.div10}>
                  <img className={styles.icon2} alt="" src="/03.svg" />
                  <div className={styles.title4}>Strategy Consulting</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                </div>
              </div>
              <div className={styles.worksStep1}>
                <div className={styles.div10}>
                  <img className={styles.icon3} alt="" src="/04.svg" />
                  <div className={styles.title4}>Strategy Consulting</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                  <div className={styles.text}>
                    <span className={styles.span}>・</span>
                    <span>디지털 트랜스 포머 전략</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.ourProjects}
          data-scroll-to="ourProjectsContainer"
        >
          <div className={styles.div14} data-animate-on-scroll>
            <div className={styles.ourApproach2}>
              <div className={styles.serviceName}>Our Projects</div>
            </div>
            <div className={styles.description1}>
              고객들과 함께 치열한 고민으로 만든 소중한 결과물입니다.
            </div>
          </div>
          <div className={styles.projectsList}>
            <div className={styles.div15}>
              <div className={styles.projectCard1} onClick={openProjectPopup}>
                <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
                <div className={styles.projectInfo}>
                  <b className={styles.projectName}>프로출장러</b>
                  <div className={styles.projectServiceLabel}>
                    <div className={styles.divTop}>
                      <div className={styles.serviceLabel}>
                        <div className={styles.service1}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                      <div className={styles.serviceLabel}>
                        <div className={styles.service1}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                      <div className={styles.serviceLabel2}>
                        <div className={styles.service3}>BM 컨설팅</div>
                      </div>
                    </div>
                    <div className={styles.divTop}>
                      <div className={styles.serviceLabel3}>
                        <div className={styles.requestDetails}>UX기획</div>
                      </div>
                      <div className={styles.serviceLabel3}>
                        <div className={styles.crazyupinc}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard1} onClick={openProjectPopup1}>
                <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
                <div className={styles.projectInfo}>
                  <b className={styles.projectName1}>프로출장러</b>
                  <div className={styles.projectServiceLabel}>
                    <div className={styles.divTop}>
                      <div className={styles.serviceLabel}>
                        <div className={styles.service1}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                      <div className={styles.serviceLabel}>
                        <div className={styles.service1}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                      <div className={styles.serviceLabel2}>
                        <div className={styles.service3}>BM 컨설팅</div>
                      </div>
                    </div>
                    <div className={styles.divTop}>
                      <div className={styles.serviceLabel3}>
                        <div className={styles.requestDetails}>UX기획</div>
                      </div>
                      <div className={styles.serviceLabel3}>
                        <div className={styles.crazyupinc}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div16}>
              <div className={styles.projectCard1} onClick={openProjectPopup2}>
                <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
                <div className={styles.projectInfo}>
                  <b className={styles.projectName1}>프로출장러</b>
                  <div className={styles.projectServiceLabel}>
                    <div className={styles.divTop}>
                      <div className={styles.serviceLabel}>
                        <div className={styles.service1}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                      <div className={styles.serviceLabel}>
                        <div className={styles.service1}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                      <div className={styles.serviceLabel2}>
                        <div className={styles.service3}>BM 컨설팅</div>
                      </div>
                    </div>
                    <div className={styles.divTop}>
                      <div className={styles.serviceLabel3}>
                        <div className={styles.requestDetails}>UX기획</div>
                      </div>
                      <div className={styles.serviceLabel3}>
                        <div className={styles.crazyupinc}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard1} onClick={openProjectPopup3}>
                <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
                <div className={styles.projectInfo}>
                  <b className={styles.projectName1}>프로출장러</b>
                  <div className={styles.projectServiceLabel}>
                    <div className={styles.divTop}>
                      <div className={styles.serviceLabel}>
                        <div className={styles.service1}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                      <div className={styles.serviceLabel}>
                        <div className={styles.service1}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                      <div className={styles.serviceLabel2}>
                        <div className={styles.service3}>BM 컨설팅</div>
                      </div>
                    </div>
                    <div className={styles.divTop}>
                      <div className={styles.serviceLabel3}>
                        <div className={styles.requestDetails}>UX기획</div>
                      </div>
                      <div className={styles.serviceLabel3}>
                        <div className={styles.crazyupinc}>
                          <span className={styles.ir}>IR</span>
                          <span>・</span>
                          <span className={styles.ir}>정부지원사업컨설팅</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.seeMoreButton}>
              <div className={styles.seeMore}>더보기</div>
            </button>
          </div>
        </div>
        <div className={styles.ourTeam1} data-scroll-to="ourTeamContainer">
          <img
            className={styles.imgBackgroundIllustIcon}
            alt=""
            src="/drawkit-vector-illustration-project-manager-16-1@2x.png"
            data-animate-on-scroll
          />
          <div className={styles.title9} data-animate-on-scroll>
            <div className={styles.ourApproach2}>
              <div className={styles.serviceName}>Our Team</div>
            </div>
            <div
              className={styles.description1}
            >{`각 팀별 전문 인력을 갖추고 유기적으로 시너지를 내고 있습니다 `}</div>
          </div>
          <div className={styles.teamList}>
            <div className={styles.team1}>
              <img className={styles.imgIcon4} alt="" src="/img2.svg" />
              <div className={styles.teamName}>
                <div className={styles.productTeam}>Product team</div>
                <div className={styles.kay}>Kay</div>
              </div>
            </div>
            <div className={styles.team1}>
              <div className={styles.img} />
              <div className={styles.teamName}>
                <div className={styles.productTeam}>Dev. team</div>
                <div className={styles.kay}>Kay</div>
              </div>
            </div>
            <div className={styles.team1}>
              <div className={styles.img} />
              <div className={styles.teamName}>
                <div className={styles.productTeam}>Design team</div>
                <div className={styles.kay}>Kay</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.service21} data-scroll-to="serviceContainer">
          <div className={styles.contentLeft} data-animate-on-scroll>
            <div className={styles.div17}>
              <div className={styles.ourApproach2}>
                <div className={styles.service22}>Service</div>
              </div>
              <div
                className={styles.description1}
              >{`각 팀별 전문 인력을 갖추고 유기적으로 시너지를 내고 있습니다 `}</div>
            </div>
            <img
              className={styles.imgIllustIcon}
              alt=""
              src="/imgillust@2x.png"
            />
          </div>
          <div className={styles.contentRight} data-animate-on-scroll>
            <div className={styles.contentRightTop}>
              <div className={styles.spanpin} />
              <div className={styles.ourApproach2}>
                <div className={styles.productTeam}>서비스 소개</div>
              </div>
              <div className={styles.description1}>
                <p
                  className={styles.ux}
                >{`각 팀별 전문 인력을 갖추고 유기적으로 시너지를 내고 있습니다 `}</p>
                <p className={styles.ux}>
                  이미 많은 고객들이 만족해 주신 서비스입니다.
                </p>
              </div>
            </div>
            <div className={styles.div18}>
              <div className={styles.contentMiddle}>
                <div className={styles.service110}>
                  <div className={styles.serviceName}>Special Package</div>
                </div>
                <div
                  className={styles.description6}
                >{`각 팀별 전문 인력을 갖추고 유기적으로 시너지를 내고 있습니다 `}</div>
                <div className={styles.downloadDocumentButton}>
                  서비스 제안서 다운로드
                </div>
              </div>
              <div className={styles.contentMiddle}>
                <div className={styles.service110}>
                  <div className={styles.serviceName}>Special Package</div>
                </div>
                <div
                  className={styles.description6}
                >{`각 팀별 전문 인력을 갖추고 유기적으로 시너지를 내고 있습니다 `}</div>
                <div className={styles.downloadDocumentButton}>
                  서비스 제안서 다운로드
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.serviceRequest}>
          <div className={styles.contents7}>
            <img
              className={styles.imgIllustIcon1}
              alt=""
              src="/imgillust1@2x.png"
            />
            <div className={styles.requestForm}>
              <div className={styles.title12}>
                <div className={styles.spanpin} />
                <div className={styles.ourApproach2}>
                  <div className={styles.productTeam}>서비스 의뢰</div>
                </div>
                <div className={styles.description1}>
                  <p
                    className={styles.ux}
                  >{`앱 기획, 구현 가능성 등 필요한 어떤 작업이라도 의뢰할 수 있습니다.아래 내용을 적어 보내주세요. `}</p>
                  <p className={styles.ux}>
                    영업일 기준 2일 이내 담당자가 연락을 드립니다.
                  </p>
                </div>
              </div>
              <div className={styles.inputForm}>
                <div className={styles.name}>
                  <div className={styles.description6}>성함</div>
                  <input
                    className={styles.inputBox}
                    type="text"
                    placeholder="성함을 입력해 주세요."
                    maxLength={4}
                  />
                </div>
                <div className={styles.name}>
                  <div className={styles.description6}>연락처</div>
                  <input
                    className={styles.inputBox}
                    type="text"
                    placeholder="번호만 입력해 주세요."
                  />
                </div>
                <div className={styles.name}>
                  <div className={styles.description6}>파일첨부</div>
                  <input className={styles.uploadFileButton} type="file" />
                </div>
              </div>
              <div className={styles.inputBox2}>
                <div className={styles.div19}>
                  <div className={styles.requestDetails}>내용</div>
                  <textarea
                    className={styles.inputBox3}
                    placeholder="원하시는 서비스를 의뢰해 주세요."
                  />
                </div>
              </div>
              <button className={styles.requestSendButton}>
                <div className={styles.seeMore}>보내기</div>
              </button>
            </div>
          </div>
          <img className={styles.pseudoIcon} alt="" src="/pseudo@2x.png" />
        </div>
        <img
          className={styles.imgIllustIcon2}
          alt=""
          src="/drawkit-vector-illustration-project-manager-15-1@2x.png"
        />
        <footer className={styles.footer}>
          <div className={styles.div20}>
            <div className={styles.div21}>
              <div className={styles.div22}>
                <div className={styles.logo1}>
                  <div className={styles.kCulturePass}>CRAZYUP</div>
                </div>
              </div>
              <div className={styles.div23}>
                <div className={styles.contentMiddle}>
                  <b className={styles.link}>(주) 크레이지업</b>
                  <div className={styles.link1}>대표 이기환</div>
                  <div className={styles.link1}>사업자번호 123-45-67890</div>
                  <div className={styles.link3}>대표문의 070-1234-5678</div>
                  <div className={styles.link4}>
                    이메일 info@kculturepass.co.kr
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div24}>
              <div className={styles.div25}>
                <div className={styles.footerLinks1}>
                  <b className={styles.link5} onClick={onLinkText5Click}>
                    크레이지업 서비스
                  </b>
                  <div className={styles.text}>Startup Package</div>
                  <div className={styles.text}>
                    On-Offline Full Branding Package
                  </div>
                  <div className={styles.text}>B2B Digital Sales Package</div>
                  <div className={styles.link9}>
                    주소 서울특별시 송파구 송파동 송파대로 123, 7층 701-가호
                    비지니스 센터 A실 (송파빌딩)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <div className={styles.div26}>
              <div className={styles.sns}>
                <button className={styles.insta} onClick={onInstaClick} />
                <button className={styles.faceBook} onClick={onFaceBookClick} />
                <button className={styles.pinter} onClick={onPinterClick} />
              </div>
              <div className={styles.licenseMark}>
                <div className={styles.license}>
                  © 2023 by Powered and secured by Crazyupinc.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {isProjectPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <ProjectPopup onClose={closeProjectPopup} />
        </PortalPopup>
      )}
      {isProjectPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <ProjectPopup onClose={closeProjectPopup1} />
        </PortalPopup>
      )}
      {isProjectPopup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <ProjectPopup onClose={closeProjectPopup2} />
        </PortalPopup>
      )}
      {isProjectPopup3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <ProjectPopup onClose={closeProjectPopup3} />
        </PortalPopup>
      )}
      {isNavigationMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.5)"
          placement="Right"
          onOutsideClick={closeNavigationMenu}
        >
          <DrawerMenu onClose={closeNavigationMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Main;
