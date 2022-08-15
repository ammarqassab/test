import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Upscroll from '../Upscroll/Upscroll'
import { FetchApi } from '../../Api/FetcherApi'
import { useDispatch } from 'react-redux'
import { addSections, addTutorial } from '../../Store/navigationSlice'
import { addaQuranalkarimSlice } from '../../Store/QuranalkarimSlice'
import QuranSections from '../QuranSections/QuranSections'

const AppLayout = ({ children }) => {

    const dispatch = useDispatch();

    const sections = FetchApi('sections');
    const tutorial = FetchApi('tutorial');

    React.useEffect(() => {
        if(sections.data && sections.isLoading == false) {dispatch(addSections(sections.data.data))}
        if(tutorial.data && tutorial.isLoading == false) {dispatch(addTutorial(tutorial.data.data))}
    },[sections,tutorial])

    const quranalkarim = FetchApi('quranalkarim');

    React.useEffect(() => {
        if(quranalkarim.data && quranalkarim.isLoading == false) {dispatch(addaQuranalkarimSlice(quranalkarim.data.data))}
    },[quranalkarim])

    return (
        <div className=' display-container bgc-1 height-100vh rtl textc-2'>
            <Header/>
            <Upscroll/>
            <main>
                {children}
            </main>
            <QuranSections/>
            <Footer/>
        </div>
    )
}

export default AppLayout