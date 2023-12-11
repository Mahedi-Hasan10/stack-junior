import Hero from './components/hero/hero'
import HeroCount from './components/hero/heroCount'
import WhyChooseUs from './components/hero/whyChooseUs/WhyChooseUs'
import QuickTutorials from './components/hero/quickTutorials/QuickTutorials'
import FeatureIncluded from './components/hero/features/FeatureIncluded.jsx'
import Review from './components/hero/review/Review'
import DownloadApp from './components/hero/downloadApp/DownloadApp'

export default function Home() {
  return (
    <main className=''>
      <Hero/>
      <HeroCount/>
      <WhyChooseUs/> 
      <QuickTutorials/> 
      <FeatureIncluded/>
      <Review/>
      <DownloadApp/>
    </main>
  )
}
