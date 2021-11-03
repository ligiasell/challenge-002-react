import React, { Fragment } from 'react'

import Header from '_components/header'
import Profile from '_components/profile'
import parentsPicture from '_assets/parents_profile_picture.png'
import nanniesPicture from '_assets/nannies_profile_picture.png'
import ParentsNanniesTabs from '_components/parents-nannies-tabs'
import LocalFamilies from '_components/local-families'
import CallToAction from '_components/call-to-action'
import Footer from '_components/footer'

import styles from './styles.css'

const listItemsParents = [
  'Set the rates in partnership with your nanny',
  'Be found by local families on the Hapu map',
  'Easily connect and chat with new sharers',
  'Protect your incomings with 2 weeks notice for cancellations',
  'Process late fees at the click of a button',
]

const listItemsNannies = [
  'You set up and manage the nanny share on behalf of your host family',
  'You set the rates',
  'Protect your income with 2 weeks notice for cancellations',
  'Process late fees at the click of a button',
]

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.content}>
        <div className={styles.profiles}>
          <Profile
            className={styles['profile-parents']}
            source={parentsPicture}
            title="Parents"
            phrase="“I have a fantastic home, a fantastic nanny and I want to reduce my costs!”"
            description="Your home and a great relationship with your nanny is an asset you can leverage to significantly reduce your childcare costs. All the while increasing your nannies pay."
            listItems={listItemsParents}
          />
          <Profile
            className={styles['profile-nannies']}
            source={nanniesPicture}
            title="Nannies"
            phrase="“I work for a great family in a great home and I want to increase my income and control!”"
            description="Now you can partner with your existing family and employer to reduce their costs and increase your pay. All the while gaining a new level of control that ensures any share arrangement is as beneficial to you as to the families involved. You start the share, you run the share."
            listItems={listItemsNannies}
          />
        </div>
        <LocalFamilies className={styles['local-families']} />
        <ParentsNanniesTabs className={styles['parents-nannies-tabs']} title="How it works: Some tips and insights" />
      </div>
      <CallToAction
        className={styles['call-to-action-desktop']}
        link="#"
        title="Become a nanny share host today!"
        description="Takes less than 5 minutes to get started"
        linkLabel="Or browse local nanny-shares"
      />
      <CallToAction
        className={styles['call-to-action-mobile']}
        link="#"
        title="Become a nanny share host"
        description="Takes less than 5 minutes to get started"
        linkLabel="Or browse local nanny-shares"
      />
      <Footer />
    </Fragment>
  )
}

export default App
