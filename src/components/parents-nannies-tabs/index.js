import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button, { buttonTheme } from '_components/button'

import styles from './styles.css'

export const headingsTabParents = ['Setting up your nanny share', 'Setting an hourly rate', 'Your weekly total and receiving funds', 'Verification and qualifications']

export const descriptionsTabParents = [
  'Discuss with your nanny any increase in pay, your own reduction in costs and the number of children you might take on. Hapu makes it easy to add more than one child, though you and your nanny may wish to limit to one. We give you the option of open places beyond one as you may find the perfect family who have two little ones. This means a greater reduction in costs for you and a higher increase in pay for your nanny.',
  'You set the rate you want. And this may be more than half. It’s up to you to determine the amount you and your nanny want to see at the end of the week. You can take into account existing costs you’ve already incurred in employing your nanny, your home as the location and so on. Do what works for you and your nanny. Once set Hapu automatically calculates the weekly cost to be paid. You can also use our automated shared rates if you are open to taking on more than one additional child. Shared rates makes it easy to split costs.',
  'Your days are set as the days you’re employing your nanny. Hapu doesn’t work off a calendar and we don’t want to complicate things as you’re not running a business. You simply set the days that you currently employ your nanny. Setting your days combines with your hourly rate(s) and the number of hours you set to calculate the total cost per week for sharers. You enter your bank account as the receiver of funds and pay your nanny at the end of the week as you currently do.',
  'Hapu is essentially a parent to parent app with our goal to connect families and provide tools to manage payments and attendance for nanny share. In doing so we allow parents to perform their own due diligence in verifying qualifications and references. You must present to any sharing parents your nanny’s Working With Children Check (WWCC) and you can select in your share to present any educational qualifications, first aid and references.',
]

export const headingsNannies = ['Nannies: Setting up your nanny share', 'Setting an hourly rate', 'Your weekly total and receiving funds', 'Verification and qualifications']

export const descriptionsTabNannies = [
  'Discuss with your employer their reduction in costs and what you’d like to charge sharers and the number of children you might take on, one might be ideal. However, you can set more than one available place giving your share the option to grow and increase your income further. There might just be the perfect family who have two little ones. And it’s always best to be open to possibilities. Hapu makes it easier to take payments and manage families so you never know where your share may go and what overall increase in income you might reach.',
  'You set the rate you want. And this may be a higher rate than what you charge your host family. It’s up to you to determine the amount you want to see at the end of the week. You can set an attractive low rate that ultimately balances out when combined with the hours you set for a great day rate. You can also use our shared rate system that automatically reduces costs and increases your income if your share grows beyond one additional child.',
  'Your days are set as the days you’re employed by your family. Hapu doesn’t work off a calendar. You simply set the days that you’re currently employed. Setting your days combines then with your hourly rate(s) and the number of hours you set to calculate the total cost per week for sharers. In creating and managing the nanny share you have the option of entering your bank account or your employer’s as the receiver of funds. If you enter your employer’s account they will pay you as they currently do.',
  'Hapu is essentially a parent to parent app with our goal to connect families and provide tools to manage payments and attendance for nanny share. In doing so we allow parents to perform their own due diligence in verifying qualifications and references. You must present to any sharing parents your nanny’s Working With Children Check (WWCC) and you can select in your share to present any educational qualifications, first aid and references.',
]

class ParentsNanniesTabs extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    title: '',
  }

  state = {
    isParentOpen: true,
  }

  onNannyButtonClick = () => {
    this.setState({
      isParentOpen: false,
    })
  }

  onParentButtonClick = () => {
    this.setState({
      isParentOpen: true,
    })
  }

  renderSection = (headings, descriptions) =>
    headings.map((heading, index) => (
      <div key={heading}>
        <h3 className={styles.heading}>{heading}</h3>
        <h6 className={styles.description}>{descriptions[index]}</h6>
      </div>
    ))

  render() {
    const { className, title } = this.props
    const { isParentOpen } = this.state

    return (
      <div className={classnames(className, styles.content)}>
        <h2 className={styles.title}>{title}</h2>
        <Button
          className={classnames(styles['parent-button'], { [styles.inactive]: !isParentOpen })}
          onClick={this.onParentButtonClick}
          theme={buttonTheme.WHITE}
          label="Parents"
        />
        <Button className={classnames(styles['nannie-button'], { [styles.inactive]: isParentOpen })} onClick={this.onNannyButtonClick} theme={buttonTheme.WHITE} label="Nannies" />
        <div className={styles.sections}>
          {isParentOpen ? this.renderSection(headingsTabParents, descriptionsTabParents) : this.renderSection(headingsNannies, descriptionsTabNannies)}
        </div>
      </div>
    )
  }
}

export default ParentsNanniesTabs
