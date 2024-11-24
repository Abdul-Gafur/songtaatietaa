import { motion } from 'framer-motion'
import { FaUsers, FaHome, FaSchool, FaBox, FaHeartbeat } from 'react-icons/fa'

// Import images for partners from assets folder
import mofaLogo from '../assets/partners/p1.png'
import wfpLogo from '../assets/partners/p2.png'
import fdaLogo from '../assets/partners/tradeline.svg'
import gsaLogo from '../assets/partners/p3.png'
import geaLogo from '../assets/partners/p4.png'
import P5 from '../assets/partners/p5.png'

const PartnersAndClientsSection = () => {
  const partners = [
    { logo: mofaLogo, name: 'MoFA (Ministry of Food and Agriculture)' },
    { logo: wfpLogo, name: 'WFP (World Food Programme)' },
    { logo: P5, name: 'GEA (Ghana Export Promotion Authority)' },
    { logo: gsaLogo, name: 'GSA (Ghana Standards Authority)' },
    { logo: geaLogo, name: 'GEA (Ghana Export Promotion Authority)' },
    { logo: fdaLogo, name: 'FDA (Food and Drugs Authority)' },
  ]

  const clients = [
    {
      icon: <FaUsers />,
      name: 'Nursing Mothers',
      description:
        'We provide solutions to support the nutritional needs of nursing mothers.',
    },
    {
      icon: <FaHome />,
      name: 'Households',
      description:
        'Our products cater to everyday households seeking healthy, sustainable options.',
    },
    {
      icon: <FaSchool />,
      name: 'Schools & Hotels',
      description:
        'We provide nutritious options for schools and hospitality businesses.',
    },
    {
      icon: <FaBox />,
      name: 'Local Exporters',
      description:
        'We support local exporters with products that meet international standards.',
    },
    {
      icon: <FaHeartbeat />,
      name: 'Health-conscious Consumers',
      description:
        'We cater to health-conscious consumers seeking organic and wholesome products.',
    },
  ]

  // Define animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  }

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <>
      {/* Our Partners Section */}
      <motion.div
        className=" mt-12"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3 className="text-3xl font-extrabold text-gray-900">Our Partners</h3>
        <p className="mt-4 text-lg text-gray-700">
          We work with various stakeholders to achieve our mission of promoting
          sustainable agriculture and food security:
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-start items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <hr className="my-12 border-gray-300" />

      {/* Our Clients Section */}
      <motion.div
        className=" mt-12"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3 className="text-3xl font-extrabold text-gray-900">Our Clients</h3>
        <p className="mt-4 text-lg text-gray-700">
          Marvmay products are trusted by a diverse group of customers,
          including:
        </p>

        {/* Timeline Design for Clients */}
        <div className="mt-8 grid md:grid-cols-3 gap-x-4 space-y-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-primary text-4xl">{client.icon}</div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {client.name}
                </h4>
                <p className="mt-2 text-gray-600 text-sm">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default PartnersAndClientsSection
