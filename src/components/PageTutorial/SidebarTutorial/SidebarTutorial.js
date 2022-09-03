import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SidebarTutorial = ({ pages, functaggle }) => {

    const pname = useRouter().asPath;

    return (
        <div>
            <div className="sidebar bar-block leftbar borderc-3 large">
                <a className='fas fa-times bar-item button border-bottom textc-2 hover-textc-2 center borderc-3  text-decoration-none' onClick={() => functaggle()}></a>
                <Link href='/'>
                    <a className='fas fa-home bar-item button border-bottom textc-2 hover-textc-2 center borderc-3  text-decoration-none'> Home</a>
                </Link>
                {pages &&
                pages.map((iteme, index) => (
                    <Link href={iteme.link} prefetch={false} key={index}>
                        <a className={`bar-item button border-bottom textc-2 hover-textc-2 rtl borderc-3  text-decoration-none ${iteme.link == pname ? ' bgc-3':''}`}>{iteme.name}</a>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}

export default SidebarTutorial