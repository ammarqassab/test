import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

const SidebarStickyTutorial = ({functaggle}) => {

    const pages = useSelector(state => state.navigation.pages)
    const pname = useRouter().asPath;
    let NavName = [];

    for(let i in pages) {
        if(pages[i].link == pname) {
            NavName.push(pages[i]);
            break;
        }
    }

    return (
        <>
            <div className="sidebar-sticky bgc-1 center">
                <div className="bar transparent" >
                    {NavName &&
                    NavName.map((iteme, index) => (
                        iteme.link == pname &&
                        <div key={index}>
                            <nav className=' row'>
                                {iteme.nextpage ? 
                                <Link href={iteme.nextpage}><a className='bar-item btn margin round-xlarge text-decoration-none large'>التالي</a></Link>
                                :
                                <div className='bar-item btn margin round-xlarge hover-app-box-shadow-on large'>التالي</div>
                                }

                                <div className="bar-item btn margin round-xlarge large" onClick={() => functaggle()} >☰</div>

                                {iteme.prevpage ? 
                                <Link href={iteme.prevpage}><a className='bar-item btn margin round-xlarge text-decoration-none large'>السابق</a></Link>
                                :
                                <div className='bar-item btn margin round-xlarge hover-app-box-shadow-on large'>السابق</div>
                                }
                            </nav>
                        </div>
                    ))
                    }
                </div>
            </div>
            <nav className='center'>
                {NavName &&
                    NavName.map((iteme, index) => (
                        iteme.link == pname &&
                        <div key={index}>
                            <div className='row'>
                                <div className='col s100'>
                                    <h1 className='xxlarge' >{iteme.name}</h1>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </nav>
            <div className='row'>
                <div className='col s100 center'>
                    <p className=' xlarge textc-4'>أحمد الله رب العالمين و أصلي و أسلم على سيدنا محمد و على آله و صحبه أجمعين .</p>
                </div>
            </div>
        </>
    )
}

export default SidebarStickyTutorial