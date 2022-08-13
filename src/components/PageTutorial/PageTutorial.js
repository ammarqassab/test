import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { appName, FetchApi } from '../../Api/FetcherApi'
import { addPages } from '../../Store/navigationSlice'
import SidebarStickyTutorial from './SidebarTutorial/SidebarStickyTutorial'
import SidebarTutorial from './SidebarTutorial/SidebarTutorial'
import CommonSEO from '../SEO/SEO'

const PageTutorial = ({ children,  apiLocalUrl}) => {

    const pages = useSelector(state => state.navigation.pages)
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
            window.scrollTo({top:0,behavior:"smooth",});
        } else {
            settaggle(true);
            document.getElementById("idtutorual").style.marginRight = "200px";
            window.scrollTo({top:0,behavior:"smooth",});
        }
    }

    const pname = useRouter().asPath;
    let pageinf = [];

    if(pages) {
        for(let i in pages) {
            if(pages[i].link == pname) {
                pageinf.push(pages[i]);
                break;
            }
        }
    }

    return (
        <>
            {pageinf.length >0 && <CommonSEO title={`${appName} - ${pageinf[0].name}`} description={`${pageinf[0].description}`} keywords={`${pageinf[0].name}, ${pageinf[0].sections}, ${pageinf[0].tutorial}`}/>}
            <div className=' display-container'>
                <div id='idtutorual' className=' height-con' >
                    <SidebarStickyTutorial functaggle={functaggle}/>
                    {children}
                </div>
                {taggle && <SidebarTutorial/>}
            </div>
        </>
    )
}

export default PageTutorial