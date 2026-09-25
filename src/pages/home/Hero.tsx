import { motion } from 'framer-motion'
import heroVid from '../../assets/hero-Bg.mp4'

const Hero = () => {
  return (
    <main className="relative h-[90vh] overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVid}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero Text */}
      <motion.div
        className="relative z-20 p-6 md:p-16 text-center max-w-5xl mx-auto "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl md:text-6xl font-bold leading-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {' '}
          Empowering Communities Through Sustainable Agriculture
        </motion.h1>

        <motion.h2
          className="mt-6 text-xl md:text-4xl font-medium text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Song-Taa Tie-Taa Company Ltd
        </motion.h2>

        <motion.p
          className="mt-4 text-base md:text-2xl text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Nourishing Ghana, Empowering Futures.
        </motion.p>
      </motion.div>
    </main>
  )
}

export default Hero
