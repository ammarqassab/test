import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Upscroll from '../Upscroll/Upscroll'

const AppLayout = ({ children, sections, tutorialSections }) => {

    return (
        <div className=' display-container bgc-1 height-100vh rtl textc-2'>
            <Header sections={sections} tutorialSections={tutorialSections}/>
            <Upscroll/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout