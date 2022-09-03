import React from 'react'
import Link from 'next/link'

const QuranSections = ({ quran }) => {

    return (
        <main className=' margin padding'>
            <div className="center margin-bottom" >
                <div className="bar margin-top display-container" >
                    <h2 className="bar-item xlarge textc-4 bottombar borderc-4 bold">القرآن الكريم</h2>
                </div>
            </div>
            <div className='row app-box-shadow text-overflow2 padding'>
                {quran &&
                quran.map((iteme, index) => (
                    <div className='col m50 l25 padding center xlarge textc-5 hover-textc-2' key={index}>
                        <Link href={iteme.link} prefetch={false}>
                            <div className='app-box-shadow hover-app-box-shadow padding-small round pointer'>
                                <a className=' text-decoration-none'>{`(${iteme.number})`} قراءة {iteme.name}</a>
                            </div>
                        </Link>
                    </div>
                ))
                }
            </div>
        </main>
    )
}

export default QuranSections