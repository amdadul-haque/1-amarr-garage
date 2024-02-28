// import banner from '@/images/banner.webp'

import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[300px] sm:h-[75vh] bg-banner bg-cover bg-no-repeat bg-center" id="home">
      {/* <Image src='/images/banner.webp' fill alt="banner" /> */}
    </div>
  )
}

export default Hero