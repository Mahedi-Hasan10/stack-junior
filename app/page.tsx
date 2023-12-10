import Image from 'next/image'
import Hero from './components/hero/hero'
import HeroCount from './components/hero/heroCount'
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs'
import QuickTutorials from './components/quickTutorials/QuickTutorials'
export default function Home() {
  return (
    <main className=''>
      <Hero/>
      <HeroCount/>
      <WhyChooseUs/> 
      <QuickTutorials/> 
    </main>
  )
}
