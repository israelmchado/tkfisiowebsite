import React from 'react'
import { homeObjThree, homeObjFour, homeObjFive } from "./Data"
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>

          
            <InfoSection { ...homeObjThree} />
            <InfoSection { ...homeObjFour} />
            <InfoSection { ...homeObjFive} />

        </>
    )
}

export default Home
