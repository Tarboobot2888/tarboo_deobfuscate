import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>الرئيسية - TARBOO</title>
        <meta name="description" content="فك التشفير برؤية جديدة" />
      </Head>
      <HeroSection />
      <FeaturesSection />
    </>
  )
}
