import React from 'react'
import classnames from 'classnames'

import Logo from '_assets/hapu_gray_logo.svg'
import Facebook from '_assets/facebook_icon.svg'
import Twitter from '_assets/twitter_icon.svg'
import Instagram from '_assets/instagram_icon.svg'

import styles from './styles.css'

const Footer = () => (
  <footer>
    <div className={styles.footer}>
      <svg aria-hidden="true" className={styles.logo}>
        <use xlinkHref={Logo} />
      </svg>
      <div className={styles.links}>
        <a href="#" className={classnames(styles.link, styles['first-link-desktop'])}>
          Create Your Nanny Share
        </a>
        <a href="#" className={classnames(styles.link, styles['first-link-mobile'])}>
          Share Your Nanny
        </a>
        <a href="#" className={classnames(styles.link, styles['second-link-desktop'])}>
          Browse Nanny Shares
        </a>
        <a href="#" className={classnames(styles.link, styles['second-link-mobile'])}>
          Browse Shares
        </a>
        <a href="#" className={styles.link}>
          Become A Nanny Share Host
        </a>
        <a href="#" className={classnames(styles.link, styles['fourth-link-mobile'])}>
          Terms & Privacy
        </a>
      </div>
      <div className={styles.icons}>
        <a href="#" aria-label="Facebook">
          <svg className={styles.icon}>
            <use xlinkHref={Facebook} />
          </svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg className={styles.icon}>
            <use xlinkHref={Twitter} />
          </svg>
        </a>
        <a href="#" aria-label="Instagram">
          <svg className={styles.icon}>
            <use xlinkHref={Instagram} />
          </svg>
        </a>
      </div>
    </div>
    <hr className={styles.line} />
    <p className={styles.copyright}>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
  </footer>
)

export default Footer
