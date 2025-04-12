import { motion } from 'framer-motion'
import needy1 from '../assets/needy/songtaa.png'

const TheProblem = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2  items-center">
        {/* Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <img
            src={needy1}
            alt="Visual representation of the problem"
            className=" md:w-[60%] object-cover"
          />
        </motion.div>

        {/* Text with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            Addressing Real Needs with Nutrient-Rich Products
          </h2>
          <p className="text-lg leading-relaxed">
            Songtaa Tietaa Company Ltd is committed to delivering{' '}
            <strong>nutritious</strong> and{' '}
            <strong>delicious breakfast cereals</strong> tailored to diverse
            customers — nursing mothers, hotels, individual households,
            exporters, and schools.
            <br />
            <br />
            Our products — Tombrown, groundnut paste, Dawadawa, and shea butter
            — are made from the <strong>finest raw materials</strong>,
            sustainably sourced from local farmers and empowered women’s groups
            in Lawra and Zambo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TheProblem
