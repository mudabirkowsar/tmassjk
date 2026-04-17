import React from 'react'
import { PiScrollLight } from "react-icons/pi";
import SacredGatherings from './components/SacredGatherings'
import UpcomingEvents from './components/UpcomingEvents'
import EventMagazineHighlight from '../components/otherComponents/EventMagazineHighlight'
import HadithSpotlight from '../components/otherComponents/HadithSpotlight'

// ✅ SEO / Page Title
export const metadata = {
  title: "TMA Sufi Events",
  description:
    "Explore sacred gatherings, upcoming events, and spiritual programs organized by Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K.",
};

function page() {
    return (
        <>
            <SacredGatherings />
            <UpcomingEvents />
            {/* <EventMagazineHighlight /> */}
            <HadithSpotlight
                label="Spiritual Wisdom"
                textBefore="Verily, actions are judged by"
                highlight="intentions"
                textAfter="and every man shall have but that which he intended."
                reference="Sahih Al-Bukhari"
                BgIcon={PiScrollLight}
            />

        </>
    )
}

export default page