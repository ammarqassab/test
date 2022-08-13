import React from 'react'
import Head from 'next/head'
import { appName } from '../../src/Api/FetcherApi'
import Sections from '../../src/components/Sections/Sections'

const Tutorial = () => {
    return (
        <>
        <Head>
            <meta name="keywords" content={`${appName}, App, Programming, دورات تعليمية, كورسات برمجة`}></meta>
            <meta name="description" content={`دورات تعليمية للبرمجة`} />
            <title>tutorial - {appName}</title>
            <meta property="og:description" content={`دورات تعليمية للبرمجة`} />
            <meta property="og:title" content={`tutorial - ${appName}`} />
        </Head>
        
        <div className=' height-con'>
            <Sections/>
        </div>
        </>
    )
}

export default Tutorial