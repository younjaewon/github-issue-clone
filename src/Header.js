import React from "react"
import styles from "./Header.module.css"
import Button from "./components/Button"
import Space from "./components/Space"
import Tabs from "./components/Tabs"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.subjectName}>
          <span>younjaewon</span>
          <span className={styles.slash}>/</span>
          <span>git-issue-clone</span>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Watch <div className={styles.circle}>1</div>
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Fork <div className={styles.circle}>1</div>
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Star <div className={styles.circle}>1</div>
          </Button>
        </div>
      </div>

      <Tabs />
    </div>
  )
}

export default Header
