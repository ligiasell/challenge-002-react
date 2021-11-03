import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

export const buttonTheme = {
  GREEN: 'green',
  WHITE: 'white',
  PURPLE: 'purple',
  TRANSPARENT: 'transparent',
}

const Button = ({ onClick, className, label, description, icon, theme }) => (
  <button type="button" aria-pressed="false" className={classnames(className, styles.button, styles[theme])} onClick={onClick}>
    {icon && (
      <svg className={styles.icon} aria-hidden="true">
        <use xlinkHref={icon} />
      </svg>
    )}
    <div className={styles.texts}>
      <h6 className={styles.label}>{label}</h6>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(buttonTheme)),
}

Button.defaultProps = {
  onClick: () => {},
  className: '',
  label: '',
  description: '',
  icon: '',
  theme: buttonTheme.TRANSPARENT,
}

export default Button
