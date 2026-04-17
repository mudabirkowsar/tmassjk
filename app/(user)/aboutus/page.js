import React from 'react'
import { PiScrollLight } from "react-icons/pi";
import AboutLegacy from './components/AboutLegacy'
import VisionMission from './components/VisionMission'
import HadithSpotlight from '../components/otherComponents/HadithSpotlight'
import RegionalReach from './components/RegionalReach';
import FaithFoundation from './components/FaithFoundation';

function page() {
    return (
        <>
            <AboutLegacy />
            <VisionMission />
            <FaithFoundation />
            <RegionalReach />
            <HadithSpotlight
                label="Spiritual Wisdom"
                textBefore="The best among you are those who have"
                highlight="the best manners and character"
                textAfter="towards others."
                reference="Sahih Al-Bukhari"
                BgIcon={PiScrollLight}
            />
        </>
    )
}

export default page