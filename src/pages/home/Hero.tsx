import { motion } from 'framer-motion'
import { assets } from '../../assets/_static-assets'
import heroVid from '../../assets/hero-Bg.mp4'

const Hero = () => {
  return (
    <main className="relative h-[80vh] overflow-hidden text-white">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVid} // Video from assets variable
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Logo Animation */}
      <motion.img
        src={assets.logo} // Logo from assets variable
        alt="logo"
        className="h-12, rounded-xl bg-primary absolute top-4 left-4 z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 p-[5%] text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          Empowering Communities Through Sustainable Agriculture
        </h1>
        <motion.h2
          className="text-2xl md:text-4xl mt-6 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Song-Taa Tie-Taa Company Ltd
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          NOURISHING GHANA, EMPOWERING FUTURES.
        </motion.p>
      </motion.div>
    </main>
  )
}

export default Hero
