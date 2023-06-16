import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./drawer-menu.module.css";

type DrawerMenuType = {
  onClose?: () => void;
};

const DrawerMenu: NextPage<DrawerMenuType> = ({ onClose }) => {
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
    <div className={styles.drawerMenu} data-animate-on-scroll>
      <div className={styles.navigationLink}>
        <h2 className={styles.ourApproach}>Our Approach</h2>
        <b className={styles.works}>Works</b>
        <b className={styles.projects}>Projects</b>
        <b className={styles.projects}>Our Team</b>
        <b className={styles.projects}>Service</b>
      </div>
      <div className={styles.memberSection}>
        <button className={styles.button}>
          <div className={styles.register}>Sign in</div>
        </button>
        <button className={styles.button1}>
          <div className={styles.logIn}>Log in</div>
        </button>
      </div>
    </div>
  );
};

export default DrawerMenu;
