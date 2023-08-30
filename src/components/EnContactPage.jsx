import React from 'react'
import EnNavbar from './EnNavbar'
import EnContact from './EnContact'
import EnFooter from './EnFooter'

const EnContactPage = () => {
  return (
    <div>
        <EnNavbar />
        <div className="pt-16">
            <EnContact />
        </div>
        <EnFooter />
    </div>
  )
}

export default EnContactPage