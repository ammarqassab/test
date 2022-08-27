import React from 'react'
import { useDispatch } from 'react-redux'
import { FetchApi } from '../../Api/FetcherApi'
import { addPages } from '../../Store/navigationSlice'
import SidebarStickyTutorial from './SidebarTutorial/SidebarStickyTutorial'
import SidebarTutorial from './SidebarTutorial/SidebarTutorial'

const PageTutorial = ({ children,  apiLocalUrl, namePage}) => {
    const dispatch = useDispatch();

    const api = FetchApi(apiLocalUrl);
    
    React.useEffect(() => {
        if(api.data && api.isLoading == false) dispatch(addPages(api.data.data))
    },[api])

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

    return (
        <>
            <div className=' display-container width-mdx'>
                <div id='idtutorual' className=' height-con' >
                    <SidebarStickyTutorial functaggle={functaggle}/>
                    <nav className='center'>
                        <div>
                            <div className='row'>
                                <div className='col s100'>
                                    <h1 className='xxlarge' >{namePage}</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className='row'>
                        <div className='col s100 center'>
                            <p className=' xlarge textc-4'>أحمد الله رب العالمين و أصلي و أسلم على سيدنا محمد و على آله و صحبه أجمعين .</p>
                        </div>
                    </div>
                    {children}
                </div>
                {taggle && <SidebarTutorial functaggle={functaggle}/>}
            </div>
        </>
    )
}

export default PageTutorial