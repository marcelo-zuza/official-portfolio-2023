import React from 'react'
import EnHero from './EnHero'
import EnHomeNavBar from './EnHomeNavBar'
import EnAbout from './EnAbout'
import EnLanguages from './EnLanguages'
import EnProjects from './EnProjects'
import EnContact from './EnContact'
import EnFooter from './EnFooter'


const EnIndex = () => {
  return (
    <div>
      <EnHomeNavBar />
      <EnHero />
      <EnAbout />
      <EnLanguages />
      <EnProjects />
      <EnContact />
      <EnFooter />
    </div>
  )
}

export default EnIndex