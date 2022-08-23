import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { appName } from '../Api/FetcherApi';

const ApplicationLogo = () => {
    return (
    <span className="pointer hover-textc-2 animate-opacity" >
        <span className='' style={{verticalAlign:'middle'}}  >
            <Image src='/pngapp.png' width={'40px'} height={'50px'} alt='app' className=' display-inline bgc-4 round-large display-position'/>
        </span>
        <Link href='/' >
            <span className='text-decoration-none sofia margin-left ripple'> {appName}</span>
        </Link>
    </span>
    );
}

export default ApplicationLogo
