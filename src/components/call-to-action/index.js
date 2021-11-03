import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button, { buttonTheme } from '_components/button'
import CalendarIcon from '_assets/calendar_icon.svg'

import styles from './styles.css'

const CallToAction = ({ className, title, description, link, linkLabel }) => {
  return (
    <div className={classnames(className, styles.content)}>
      <h2 className={styles.title}>{title}</h2>
      <h6 className={styles.description}>{description}</h6>
      <Button className={styles.button} icon={CalendarIcon} theme={buttonTheme.PURPLE} label="Create Your Nanny Share" description="Takes less than 5 minutes" />
      <a href={link} className={styles['link-label']}>
        {linkLabel}
      </a>
    </div>
  )
}

CallToAction.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
}

CallToAction.defaultProps = {
  className: '',
  title: '',
  description: '',
  link: '',
  linkLabel: '',
}

export default CallToAction
