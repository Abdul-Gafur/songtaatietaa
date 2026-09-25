import { motion } from 'framer-motion'
import { staff } from '../../data/staff'

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const OurTeamMembers = () => {
  return (
    <section className="relative bg-[#fdfdfd] py-20 px-6 md:px-[8%] overflow-hidden">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Meet Our Team
        </h1>
        <p className="text-gray-500 text-lg mt-4">
          A blend of brilliance, dedication, and heart.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-14 relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {staff.team.map((member, index) => {
          // Randomize sizes/position for organic layout
          const sizeVariants = [
            'h-64 w-64', // small
            'h-72 w-72', // medium
            'h-80 w-80', // large
          ]
          const randSize = sizeVariants[index % sizeVariants.length]

          const isOffset = index % 3 === 0 || index % 5 === 0
          const offsetClass = isOffset ? 'translate-y-6 md:translate-y-12' : ''

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`relative flex flex-col items-center ${offsetClass}`}
            >
              <div
                className={`rounded-full overflow-hidden border-[3px] border-primary shadow-xl ${randSize}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover h-full w-full"
                />
              </div>

              {member.role && (
                <span className="mt-4 bg-secondary text-white px-4 py-2.5 rounded-md text-sm  font-semibold shadow-sm">
                  {member.role}
                </span>
              )}

              <div className="text-center mt-3">
                <p className="text-xl font-bold text-primary">{member.name}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default OurTeamMembers
