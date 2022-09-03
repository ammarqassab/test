import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Upscroll from '../Upscroll/Upscroll'
import { FetchApi } from '../../Api/FetcherApi'
import { useDispatch } from 'react-redux'
import { addaQuranalkarimSlice } from '../../Store/QuranalkarimSlice'

const AppLayout = ({ children, sections, tutorialSections }) => {

    const dispatch = useDispatch();

    const quranalkarim = FetchApi('quranalkarim');

    React.useEffect(() => {
        if(quranalkarim.data && quranalkarim.isLoading == false) {dispatch(addaQuranalkarimSlice(quranalkarim.data.data))}
    },[quranalkarim])

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