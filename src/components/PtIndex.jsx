import React from 'react'
import PtHomeNavBar from './PtHomeNavBar'
import PtHero from './PtHero'
import PtAbout from './PtAbout'
import PtLanguages from './PtLanguages'
import PtProjects from './PtProjects'
import PtContact from './PtContact'
import PtFooter from './PtFooter'


const PtIndex = () => {
  return (
    <div>
      <PtHomeNavBar />
      <PtHero />
      <PtAbout />
      <PtLanguages />
      <PtProjects />
      <PtContact />
      <PtFooter />
 
    </div>
  )
}

export default PtIndex