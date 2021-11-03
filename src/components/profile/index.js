import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button, { buttonTheme } from '_components/button'

import styles from './styles.css'

const renderList = listItems => listItems.map(item => <li key={item}>{item}</li>)

const Profile = ({ className, source, title, phrase, description, listItems }) => {
  return (
    <div className={classnames(className, styles.content)}>
      <img className={styles.picture} src={source} alt={`${title} picture`} />
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.phrase}>{phrase}</h3>
      <h6 className={styles.description}>{description}</h6>
      <Button className={styles.button} theme={buttonTheme.TRANSPARENT} label="Create Your Nanny Share Today" description="Takes less than 5 minutes" />
      <ul className={styles.list}>{renderList(listItems)}</ul>
    </div>
  )
}

Profile.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  title: PropTypes.string,
  phrase: PropTypes.string,
  description: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Profile.defaultProps = {
  className: '',
  title: '',
  phrase: '',
  description: '',
}

export default Profile
