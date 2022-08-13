import React from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Upscroll from '../Upscroll/Upscroll'
import { FetchApi } from '../../Api/FetcherApi'
import { useDispatch } from 'react-redux'
import { addSections, addTutorial } from '../../Store/navigationSlice'

const AppLayout = ({ children }) => {

    const dispatch = useDispatch();

    const sections = FetchApi('sections');
    const tutorial = FetchApi('tutorial');

    React.useEffect(() => {
        if(sections.data && sections.isLoading == false) {dispatch(addSections(sections.data.data))}
        if(tutorial.data && tutorial.isLoading == false) {dispatch(addTutorial(tutorial.data.data))}
    },[sections,tutorial])

    return (
        <div className=' display-container bgc-1 height-100vh rtl textc-2'>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header/>
            <Upscroll/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout