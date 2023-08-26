import React from 'react'
import EnHero from './EnHero'
import EnNavbar from './EnNavbar'
import EnAbout from './EnAbout'
import EnLanguages from './EnLanguages'
import EnProjects from './EnProjects'
import EnContact from './EnContact'
import EnFooter from './EnFooter'


const EnIndex = () => {
  return (
    <div>
      <EnNavbar />
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