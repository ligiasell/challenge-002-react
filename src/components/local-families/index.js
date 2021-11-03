import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import LocalFamiliesMapDesktop from '_assets/local_families_image.png'
import LocalFamiliesMapMobile from '_assets/local_families_image_mobile.png'

import styles from './styles.css'

const LocalFamilies = ({ className }) => (
  <div className={classnames(className, styles.content)}>
    <hr className={styles['top-line']} />
    <h2 className={styles.title}>Local families need you!</h2>
    <h6 className={styles.description}>
      Families in your area need childcare. There simply is not enough to go around. They need it locally and at a rate they can afford. In short, they need you. And you need to
      reduce costs or if a nanny, increase your pay. It’s a win, win, win! But first families need to find you. Go on, reach out to your neighbourhood today with a Hapu nanny
      share.
    </h6>
    <a href="#" className={styles.link}>
      Create your nanny share today
    </a>
    <img src={LocalFamiliesMapDesktop} className={styles['image-desktop']} alt="Map showing parents and nannies location and conversation" />
    <img src={LocalFamiliesMapMobile} className={styles['image-mobile']} alt="Map showing parents and nannies location and conversation" />
    <hr className={styles['bottom-line']} />
  </div>
)

LocalFamilies.propTypes = {
  className: PropTypes.string,
}

LocalFamilies.defaultProps = {
  className: '',
}

export default LocalFamilies
