import type { NextPage } from 'next'
import Head from 'next/head'

import { BrandsClients } from '../components/BrandsClients'
import { CleanAndModernDesign } from '../components/CleanAndModernDesign'
import { ContactUs } from '../components/ContactUs'
import { FeaturedWorks } from '../components/FeaturedWorks'
import { HowWeDoIt } from '../components/HowWeDoIt'
import { MeetOurTeam } from '../components/MeetOurTeam'
import { MobileDesign } from '../components/MobileDesign'
import NewsAndArticles from '../components/NewsAndArticles'
import { OurSpecialty } from '../components/OurSpecialty'
import { PricingTables } from '../components/PricingTables'
import { SalemIntro } from '../components/SalemIntro'
import { SatisfactionStatistics } from '../components/SatisfactionStatistics'
import { Superpowers } from '../components/Superpowers'
import Testimonials from '../components/Testimonials'

const Home: NextPage = () => {


  return (

    <div className="flex flex-col max-w-7xl font-sans mx-auto antialiased">
      <Head>
        <title>Salem Theme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SalemIntro />

      <Superpowers />

      <OurSpecialty />

      <MeetOurTeam />

      <HowWeDoIt />

      <SatisfactionStatistics />

      <CleanAndModernDesign />

      <FeaturedWorks />

      <BrandsClients />

      <Testimonials />

      <MobileDesign />

      <PricingTables />

      <NewsAndArticles />

      <ContactUs />

      <footer className="p-2 bg-stone-900 text-white sm:p-4 md:p-9">

        <div className='uppercase flex flex-wrap text-xs gap-y-3 gap-x-4 font-medium my-3 md:gap-0 md:justify-between'>
          <a className='hover:-translate-y-1 transition-all ease-in-out' href='#our-specialty'>our specialty</a>
          <a className='hover:-translate-y-1 transition-all ease-in-out' href='#meet-our-team'>meet our team</a>
          <a className='hover:-translate-y-1 transition-all ease-in-out' href='#how-we-doit'>how we do it</a>
          <a className='hover:-translate-y-1 transition-all ease-in-out' href='#brands-clients'>brands & clients</a>
          <a className='hover:-translate-y-1 transition-all ease-in-out' href='#works'>works</a>
          <a className='hover:-translate-y-1 transition-all ease-in-out' href='#news-articles'>news & articles</a>
          <a className='hover:-translate-y-1 transition-all ease-in-out' href='#contact'>contact</a>
        </div>

        <div>
          <input type="email" placeholder='Email Address'
            className='w-full py-2 bg-transparent border-b-2 border-stone-600 placeholder:text-2xl placeholder:text-stone-600 placeholder:font-semibold
            appearance-none focus:outline-none text-stone-400 text-2xl max-w-2xl'
          />
        </div>

        <p className='font-light text-sm mt-1'>
          Recieve tips, tricks and freebies right into your inbox. Enter your email and hit enter!
        </p>

        <p className='mt-9 text-sm font-light'>
          Copiright 2015 | All Rights Reserved By Salem Theme
        </p>

      </footer>
    </div>
  )
}

export default Home
