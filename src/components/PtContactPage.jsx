import React from 'react'
import PtNavbar from './PtNavbar'
import PtContact from './PtContact'
import PtFooter from './PtFooter'

const PtContactPage = () => {
  return (
    <div>
        <PtNavbar />
        <div className="pt-16">
            <PtContact />
        </div>
        <PtFooter />
    </div>
  )
}

export default PtContactPage