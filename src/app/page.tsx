import About from '@/sections/about'
import Services from '@/sections/services'
import Header from '@/sections/header'
import Faq from '@/sections/faq'
import Pricing from '@/sections/pricing'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Faq />
      <Pricing />
      <Footer />
    </>
  )
}
