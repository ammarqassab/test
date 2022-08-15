import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const QuranPage = ({ children }) => {

    const quranalkarim = useSelector(state => state.quranalkarim.pages)

    const pname = useRouter().asPath;
    let pageinf = [];

    if(quranalkarim) {
        for(let i in quranalkarim) {
            if(quranalkarim[i].link == pname) {
                pageinf.push(quranalkarim[i]);
                break;
            }
        }
    }

    return (
        <div className=' margin padding rtl'>
            <div className='center xxlarge margin-bottom padding'>
                {pageinf.length > 0 &&<h1>{`(${pageinf[0].number})`} {pageinf[0].name}</h1>}
            </div>
            <div className=' app-box-shadow padding'>
                <div className='center xxlarge textc-4 padding'> بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ </div>
                <div className=' margin-bottom xlarge quran padding'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default QuranPage