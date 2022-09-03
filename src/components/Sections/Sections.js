import React from 'react'
import Link from 'next/link'

const CartMySections = ({name, tutorialSections}) => {

    const tutorial = tutorialSections

    return (
        <>
            {tutorial &&
            tutorial.map((iteme, index) => (
                iteme.sections == name ?
                    <div className=' col l50 padding center' key={index}>
                        <div className='row app-box-shadow hover-app-box-shadow' style={{minHeight:'200px'}} >
                            <h2 className='col s100 margin textc-4 xlarge bold' style={{minHeight:'30px'}} > {iteme.name}</h2>
                            <p className=' col s100 margin textc-2 large' style={{minHeight:'80px'}}>{iteme.description}</p>
                            <div className=' col s100' style={{minHeight:'76px'}} >
                                <div className=' center' >
                                    <Link href={iteme.link} className=' text-decoration-none' >
                                        <a className='btn large round'> تعلم {iteme.name} الأن مجاناً</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                :null
            ))
            }
        </>
    );
}

const Sections = ({ sections, tutorialSections }) => {

    return (
        <>
            {sections &&
            sections.map((iteme, index) => (
            <div className=' margin padding' key={index}>
                <div className="center margin-bottom" >
                    <div className="bar margin-top display-container" >
                        <h2 className="bar-item xlarge textc-4 bottombar borderc-4 bold">{iteme.name}</h2>
                    </div>
                </div>
                <div className='app-box-shadow text-overflow2' style={{padding:'18px'}} >
                    <div className=' row'>
                        <CartMySections name={iteme.name} tutorialSections={tutorialSections}/>
                    </div>
                </div>
            </div>
            ))
            }
        </>
    )
}

export default Sections
