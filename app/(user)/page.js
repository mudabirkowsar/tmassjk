import HeroSection from "./homePageComponents/HeroSection";
import OurMission from "./homePageComponents/OurMission";
import Founder from "./homePageComponents/Founder";
import TimeLinePage from "./homePageComponents/TimeLinePage";
import EventsCTA from "./components/otherComponents/EventsCTA";
import WisdomBanner from "./components/otherComponents/WisdomBanner";


export default function Home() {
  return (
    <div className="bg-brand-background">
      <HeroSection />
      <OurMission />
      <EventsCTA />
      <Founder />
      <WisdomBanner />
      <TimeLinePage />
    </div>
  );
}
