import React from 'react'
import { appName } from '../../src/Api/FetcherApi'
import Sections from '../../src/components/Sections/Sections'
import CommonSEO from '../../src/components/SEO/SEO'

const Tutorial = () => {
    return (
        <>
        <CommonSEO title={`${appName} - tutorial`} description={`دورات تعليمية للبرمجة`} keywords={`كورسات, برمجة, دورات تعليمية`}/>
        
        <div className=' height-con'>
            <Sections/>
        </div>
        </>
    )
}

export default Tutorial