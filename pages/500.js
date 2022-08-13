import React from 'react';
import Link from 'next/link'
// import { useRouter } from 'next/router'

const Custom500 = () => {

    // const router = useRouter();

    // React.useEffect(() => {
    //     setTimeout(() => {router.push('/')},5000)
    // },[]);

    return (
        <div className=' height-con display-container' >
            <div className=' display-middle xlarge textc-2 center'>
                <div className='margin-bottom'>500 | الصفحة غير موجودة</div>
                <div>
                    <Link href={'/'}>
                        <a className='fas fa-home xlarge text-decoration-none btn round'> العودة إلى الصفحة الرئيسية</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Custom500