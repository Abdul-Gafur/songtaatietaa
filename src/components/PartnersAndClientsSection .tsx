import { motion } from 'framer-motion'
import { FaUsers, FaHome, FaSchool, FaBox, FaHeartbeat } from 'react-icons/fa'
import { useEffect, useState } from 'react'

// Import images for partners
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
      color: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
    },
    {
      icon: <FaHome />,
      name: 'Households',
      description:
        'Our products cater to everyday households seeking healthy, sustainable options.',
      color: 'bg-gradient-to-r from-green-400 to-blue-500',
    },
    {
      icon: <FaSchool />,
      name: 'Schools & Hotels',
      description:
        'We provide nutritious options for schools and hospitality businesses.',
      color: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    },
    {
      icon: <FaBox />,
      name: 'Local Exporters',
      description:
        'We support local exporters with products that meet international standards.',
      color: 'bg-gradient-to-r from-blue-500 to-purple-600',
    },
    {
      icon: <FaHeartbeat />,
      name: 'Health-conscious Consumers',
      description:
        'We cater to health-conscious consumers seeking organic and wholesome products.',
      color: 'bg-gradient-to-r from-pink-400 to-red-500',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatically navigate through carousel items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [partners.length])

  const visiblePartners = 4 // Number of partners visible at once

  return (
    <div className="py-16 px-6 sm:px-12 bg-gray-50">
      {/* Partners Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Partners</h2>
        <p className="mt-4 text-lg text-gray-600">
          Collaborating with industry leaders to promote sustainable agriculture
          and food security.
        </p>
        <div className="relative mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visiblePartners}%)`,
            }}
          >
            {partners
              .concat(partners) // Duplicate items to create infinite loop effect
              .map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/4 flex justify-center px-4"
                  style={{ maxWidth: `${100 / visiblePartners}%` }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 object-contain mx-auto"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      <hr className="my-16 border-gray-300" />

      {/* Clients Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Clients</h2>
        <p className="mt-4 text-lg text-gray-600">
          Trusted by diverse customers for their healthy and sustainable needs.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
              }}
              className="bg-white rounded-lg shadow-lg p-6 text-left"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-3xl ${client.color}`}
              >
                {client.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                {client.name}
              </h4>
              <p className="mt-2 text-gray-600">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PartnersAndClientsSection
