import React from 'react'

import Button, { buttonTheme } from '_components/button'
import Logo from '_assets/hapu_green_logo.png'

import styles from './styles.css'

const OI = 'Become a nanny share host'

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img src={Logo} className={styles.logo} alt="" />
        <a href="#" className={styles.link}>
          Create Your Nanny Share
        </a>
        <a href="#" className={styles.link}>
          Browse Nanny Shares
        </a>
        <a href="#" className={styles.link}>
          Our Story
        </a>
      </div>
      <div className={styles.container}>
        <Button className={styles.button} theme={buttonTheme.GREEN} label="Become A Nanny Share Host" />
        <a href="#" className={styles.link}>
          Sign In
        </a>
      </div>
    </nav>
    <div className={styles.banner}>
      <h1 className={styles.title}>{OI} + eu</h1>
      <h3 className={styles.subtitle}>Reduce costs, increase incomes and change childcare forever</h3>
    </div>
  </header>
)

export default Header
