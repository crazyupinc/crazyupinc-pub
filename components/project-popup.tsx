import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./project-popup.module.css";

type ProjectPopupType = {
  onClose?: () => void;
};

const ProjectPopup: NextPage<ProjectPopupType> = ({ onClose }) => {
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

  return (
    <div className={styles.projectPopup}>
      <div className={styles.div} data-animate-on-scroll>
        <div className={styles.title}>
          <div className={styles.ourProjects}>Projects name</div>
          <button className={styles.x} onClick={onClose}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </button>
        </div>
        <div className={styles.description}>
          고객들과 함께 치열한 고민으로 만든 소중한 결과물입니다.
        </div>
      </div>
      <img className={styles.imgIcon} alt="" src="/img@2x.png" />
      <div className={styles.projectInfo}>
        <b className={styles.projectName}>범위</b>
        <div className={styles.projectServiceLabel}>
          <div className={styles.divTop}>
            <div className={styles.serviceLabel}>
              <div className={styles.service}>
                <span className={styles.ir}>IR</span>
                <span>・</span>
                <span className={styles.ir}>정부지원사업컨설팅</span>
              </div>
            </div>
            <div className={styles.serviceLabel}>
              <div className={styles.service}>
                <span className={styles.ir}>IR</span>
                <span>・</span>
                <span className={styles.ir}>정부지원사업컨설팅</span>
              </div>
            </div>
            <div className={styles.serviceLabel2}>
              <div className={styles.service2}>BM 컨설팅</div>
            </div>
          </div>
          <div className={styles.divTop}>
            <div className={styles.serviceLabel3}>
              <div className={styles.service3}>UX기획</div>
            </div>
            <div className={styles.serviceLabel3}>
              <div className={styles.service4}>
                <span className={styles.ir}>IR</span>
                <span>・</span>
                <span className={styles.ir}>정부지원사업컨설팅</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <b className={styles.projectName}>클라이언트</b>
        <div className={styles.description}>자사 사업</div>
      </div>
    </div>
  );
};

export default ProjectPopup;
