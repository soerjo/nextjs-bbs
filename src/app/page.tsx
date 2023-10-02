import ContextComp from '@/components/atoms/ContextComp'
import BottomNav from '@/components/atoms/NavBotom'
import Footer from '@/components/sections/Footer'
import SectionHome from '@/components/sections/HomeSection'
import PeopleSection from '@/components/sections/PeopleSection'
import SectionContact from '@/components/sections/SectionContact'
import ServiceSection from '@/components/sections/ServiceSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <ContextComp>
        <SectionHome />
        <ServiceSection />
        <PeopleSection />
        <SectionContact />
        <Footer />
      </ContextComp>
      <BottomNav />
    </main>

  )
}
