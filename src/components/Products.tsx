import { motion } from 'framer-motion'
import { HiInformationCircle } from 'react-icons/hi'
import prod1 from '../assets/products/product1.png'
import prod2 from '../assets/products/product2.png'
import prod3 from '../assets/products/product3.png'
import prod4 from '../assets/products/product4.png'

const products = [
  { image: prod1, name: 'Raw Shea Butter' },
  { image: prod2, name: 'Groundnut Paste' },
  { image: prod3, name: 'Tombrown' },
  { image: prod4, name: 'Banku Mix Flour' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const ProductsPortfolio = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-[10%]">
      <motion.div
        className="text-center mb-14 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
          variants={item}
        >
          Our Premium Products
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 flex items-center justify-center gap-2"
          variants={item}
        >
          <HiInformationCircle size={24} className="text-primary" />
          Carefully crafted to nourish homes and inspire healthy living.
        </motion.p>
      </motion.div>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {products.map((product, index) => (
          <motion.li
            key={index}
            variants={item}
            className="group relative overflow-hidden rounded-3xl shadow-xl bg-white border border-gray-100 hover:scale-[1.03] transition-transform duration-300 ease-out"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
            <div className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-lg">
              {product.name}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default ProductsPortfolio
