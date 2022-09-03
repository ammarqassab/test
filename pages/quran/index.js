import React from 'react'
import { getQuran } from '../../data/dataQuran'
import QuranSections from '../../src/components/QuranSections/QuranSections'

const Quran = ({ quran }) => {
    return (
        <>
            <QuranSections quran={quran}/>
        </>
    )
}

export default Quran

const getStaticProps = async () => {
    const quran = getQuran();

        return {
        props: {
            quran
        }
        }
}

export { getStaticProps }