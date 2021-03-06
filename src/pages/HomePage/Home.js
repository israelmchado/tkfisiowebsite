import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from "./Data"
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection { ...homeObjOne}/>
            <InfoSection { ...homeObjTwo } />
            <InfoSection { ...homeObjThree} />
            <InfoSection { ...homeObjFour} />
            <InfoSection { ...homeObjFive} />

        </>
    )
}

export default Home
