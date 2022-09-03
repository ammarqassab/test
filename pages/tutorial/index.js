import React from 'react'
import { getSections, getTutorialSections } from '../../data/dataSections'
import { appName } from '../../src/Api/FetcherApi'
import Sections from '../../src/components/Sections/Sections'
import CommonSEO from '../../src/components/SEO/SEO'

const Tutorial = ({ sections, tutorialSections }) => {
    return (
        <>
        <CommonSEO title={`${appName} - tutorial`} description={`دورات تعليمية للبرمجة`} keywords={`كورسات, برمجة, دورات تعليمية`}/>
        
        <div className=' height-con'>
            <Sections sections={sections} tutorialSections={tutorialSections}/>
        </div>
        </>
    )
}

export default Tutorial

const getStaticProps = async () => {
    const sections = getSections();
    const tutorialSections = getTutorialSections();

        return {
        props: {
            sections,
            tutorialSections
        }
        }
}

export { getStaticProps }