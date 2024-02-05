//import Image from 'next/image'
import Hero from "./components/Hero"
import Header from "./components/Header"
import AboutComp from "./components/AboutComp"
import SmGallery from "./components/SmGallery"
import Widget from "./components/Widget"
import Amenities from "./components/Amenities"
export default function Home() {
  return (
    <main className="main">
      
      <Hero />
      <div className="theRest">
        <Widget />
        <AboutComp />
        <SmGallery />
        <Amenities />
      </div>
    </main>
  )
}
