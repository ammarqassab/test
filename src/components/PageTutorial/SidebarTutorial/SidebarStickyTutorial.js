import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SidebarStickyTutorial = ({ pages, functaggle }) => {

    const pname = useRouter().asPath;
    let NavName = [];
    let nextpage = null;
    let prevpage = null;

    if(pages) {
        for(let i in pages) {
            if(pages[i].link == pname) {
                if(i > 0) {
                    prevpage = [];
                    prevpage.push(pages[i - 1]);
                }
                NavName.push(pages[i]);
                if(pages.length - 1 > i) {
                    nextpage = [];
                    nextpage.push(pages[++i]);
                }
                break;
            }
        }
    }

    return (
        <>
            <nav className="sidebar-sticky bgc-1 center">
                <div className="bar transparent" >
                    {NavName.length > 0 &&
                    NavName.map((iteme, index) => (
                        iteme.link == pname &&
                        <div key={index}>
                            <nav className=' row flex-nowrap'>
                                {nextpage ? 
                                <Link href={nextpage[0].link}><a className='bar-item btn margin round-xlarge text-decoration-none large'>التالي</a></Link>
                                :
                                <div className='bar-item btn margin round-xlarge hover-app-box-shadow-on large'>التالي</div>
                                }

                                <div className="bar-item btn margin round-xlarge large" onClick={() => functaggle()} >☰</div>

                                {prevpage ? 
                                <Link href={prevpage[0].link}><a className='bar-item btn margin round-xlarge text-decoration-none large'>السابق</a></Link>
                                :
                                <div className='bar-item btn margin round-xlarge hover-app-box-shadow-on large'>السابق</div>
                                }
                            </nav>
                        </div>
                    ))
                    }
                </div>
            </nav>
        </>
    )
}

export default SidebarStickyTutorial