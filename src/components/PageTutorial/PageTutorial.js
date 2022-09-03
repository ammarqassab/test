import React from 'react'
import CommonSEO from '../SEO/SEO'
import SidebarStickyTutorial from './SidebarTutorial/SidebarStickyTutorial'
import SidebarTutorial from './SidebarTutorial/SidebarTutorial'

const PageTutorial = ({ children, pages, title, description, keywords}) => {

    const [taggle, settaggle] = React.useState(false);

    const functaggle = () => {
        if(taggle) {
            settaggle(false);
            document.getElementById("idtutorual").style.marginRight = "0px";
        } else {
            settaggle(true);
            document.getElementById("idtutorual").style.marginRight = "200px";
            window.scrollTo({top:0,behavior:"smooth",});
        }
    }

    React.useEffect(() => {
        let media = window.matchMedia("(max-width: 992px)")
        if(!media.matches) {functaggle()}
    },[])

    return (
        <>
            <CommonSEO title={title} description={description} keywords={keywords}/>
            <div className=' display-container'>
                <div id='idtutorual' className=' height-con width-mdx' >
                    <SidebarStickyTutorial pages={pages} functaggle={functaggle}/>
                    <nav className='center'>
                        <div>
                            <div className='row'>
                                <div className='col s100'>
                                    <h1 className='xxlarge margin-left margin-right' >{title}</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className='row'>
                        <div className='col s100 center'>
                            <p className=' xlarge textc-4 margin-left margin-right'>أحمد الله رب العالمين و أصلي و أسلم على سيدنا محمد و على آله و صحبه أجمعين .</p>
                        </div>
                    </div>
                    <div className='mdx'>
                        {children}
                    </div>
                </div>
                {taggle && <SidebarTutorial pages={pages} functaggle={functaggle}/>}
            </div>
        </>
    )
}

export default PageTutorial