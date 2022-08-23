import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import ApplicationLogo from '../ApplicationLogo'

const Header = () => {

  const sections = useSelector(state => state.navigation.sections)
  const tutorial = useSelector(state => state.navigation.tutorial)

  const [handle, sethandle] = React.useState(false)

  const funHandle = () => {handle ? sethandle(false) : sethandle(true)}

  return (
    <>
      <header className=' row border-bottom borderc-4'>
          <div className=' col m66 text-decoration-none xxlarge sofia textc-4' style={{padding:'16px 32px'}} ><ApplicationLogo/></div>
          <div className=' col m33 textc-4 center large pointer' style={{padding:"34px 0px"}} onClick={() => funHandle()}>الدورات التعليمية  <span className='arrow'></span> </div>
      </header>
      {handle &&
        <nav>
          <div className="modal ltr">
            <div className="modal-content padding">
              <div className='center'>
                <div className='fas fa-times textc-2 border borderc-2 hover-borderc-3 button round-large xlarge ' onClick={() => funHandle()}></div>
              </div>
              <div className=' row margin-top' >
              {sections &&
              sections.map((iteme, index) => (
              <div className=' col m50 l25 padding' key={index}>
                <div className=" textc-4 xlarge left-align" >{iteme.name} :</div>
                <ul className='ul left-align'>
                  {tutorial &&
                  tutorial.map((itemet, indext) => (
                    itemet.sections == iteme.name &&
                      <li className=' textc-2 large text-decoration-none hover-textc-4' key={indext}>
                        <Link href={itemet.link}>
                          <a className=' text-decoration-none hover-textc-4' onClick={() => funHandle()}>{itemet.name}</a>
                        </Link>
                      </li>
                  ))
                  }
                </ul>
              </div>
              ))
              }
              </div>
            </div>
          </div>
        </nav>
      }
    </>
  )
}

export default Header