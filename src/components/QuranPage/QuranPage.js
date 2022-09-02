import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import CommonSEO from '../SEO/SEO'

const QuranPage = ({ children, title, description, keywords }) => {

    const quranalkarim = useSelector(state => state.quranalkarim.pages)

    const pname = useRouter().asPath;
    let pageinf = [];
    let pagenext = null;
    let pageprev = null;

    if(quranalkarim) {
        for(let i in quranalkarim) {
            if(quranalkarim[i].link == pname) {
                if(i > 0) {
                    pageprev = [];
                    pageprev.push(quranalkarim[i - 1]);
                }
                pageinf.push(quranalkarim[i]);
                if(quranalkarim.length - 1 > i) {
                    pagenext = [];
                    pagenext.push(quranalkarim[++i]);
                }
                break;
            }
        }
    }

    return (
        <>
            <CommonSEO title={title} description={description} keywords={keywords} />
            <div className=' margin padding rtl'>
                <div className='center xxlarge margin-bottom padding'>
                    <h1>{pageinf.length > 0 ? `(${pageinf[0].number})` : ''} {title || 'سورة'}</h1>
                </div>
                <div className=' app-box-shadow padding'>
                    <div className='center xxlarge textc-4 padding'> بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ </div>
                    <div className=' margin-bottom xlarge quran'>
                        {children}
                    </div>
                </div>
            </div>
            <div className='center margin-top'>
                <div className=' bar'>
                    <nav className=' row flex-nowrap'>
                        {pagenext ?
                        <Link href={pagenext[0].link}><a className='bar-item btn margin round-xlarge text-decoration-none medium'>{`(${pagenext[0].number})`} قراءة {pagenext[0].name}</a></Link>
                        :
                        <a className='bar-item btn margin round-xlarge text-decoration-none medium'>لا يوجد سورة تالية</a>
                        }
                        {pageprev ?
                        <Link href={pageprev[0].link}><a className='bar-item btn margin round-xlarge text-decoration-none medium'>{`(${pageprev[0].number})`} قراءة {pageprev[0].name}</a></Link>
                        :
                        <a className='bar-item btn margin round-xlarge text-decoration-none medium'>لا يوجد سورة سابقة</a>
                        }
                    </nav>
                </div>
            </div>
        </>
    )
}

export default QuranPage