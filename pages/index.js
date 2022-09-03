import React from 'react'
import { getQuran } from '../data/dataQuran';
import { getSections, getTutorialSections } from '../data/dataSections';
import { appName } from '../src/Api/FetcherApi';
import QuranSections from '../src/components/QuranSections/QuranSections';
import Sections from '../src/components/Sections/Sections';
import CommonSEO from '../src/components/SEO/SEO';

const Home = ({ sections, tutorialSections, quran }) => {

    return (
        <>
            <CommonSEO title={`${appName}`} description={`${appName}, تعلم البرمجة بكل سهولة مع أول موقع عربي يشرح مستندات التقنيات و لغات البرمجة باللغة العربية مجاناً `} keywords={`${appName}, App, Programming, دورات تعليمية, كورسات برمجة`}/>

            <header>

                <div className=' row bgc-header height-header text-overflow2' style={{marginBottom:'-2px'}} >
                    <div className=' col s75 margin-auto padding' >
                        <div className='row ' >
                            <div className='col s100 textc-2 xlarge center' >
                                <h1 className=' textc-4 xxxlarge'>تعلم البرمجة</h1>
                                <p className=' animate-left'>بكل سهولة مع أول موقع عربي يشرح مستندات التقنيات و لغات البرمجة باللغة العربية مجاناً .</p>
                                <p className=' animate-right'>أحمد الله رب العالمين و أصلي و أسلم على سيدنا محمد و على آله و صحبه أجمعين .</p>
                            </div>
                        </div>
                    </div>
                </div>

                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg"><path d="M 0,400 C 0,400 0,200 0,200 C 102.03571428571428,229.67857142857142 204.07142857142856,259.35714285714283 339,273 C 473.92857142857144,286.64285714285717 641.7499999999999,284.25 778,253 C 914.2500000000001,221.74999999999997 1018.9285714285716,161.64285714285714 1124,148 C 1229.0714285714284,134.35714285714286 1334.5357142857142,167.17857142857144 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" fill="#0070b1" transform="rotate(-180 720 200)"></path></svg>

            </header>
            <Sections sections={sections} tutorialSections={tutorialSections}/>
            <QuranSections quran={quran}/>
        </>
    )
}
export default Home

const getStaticProps = async () => {
    const sections = getSections();
    const tutorialSections = getTutorialSections();
    const quran = getQuran();

        return {
        props: {
            sections,
            tutorialSections,
            quran
        }
        }
}

export { getStaticProps }