import needy1 from '../assets/needy/needy1.jpg'
import { IoInformationCircle } from 'react-icons/io5'

const TheProblem = () => {
  return (
    <div className="px-6 py-12 ">
      <div className="flex flex-col md:flex-row items-start gap-10 max-sm:flex-wrap">
        {/* Text Section */}
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            The Problem
          </h1>
          <div className="bg-primary p-3 rounded-md flex items-center gap-4 mb-6 text-white w-fit shadow-md">
            <IoInformationCircle size={28} />
            <p className="text-lg">A Brief About The Problem</p>
          </div>
          <p className="text-lg leading-8 text-gray-700">
            In Ghana, <strong>24.2%</strong> of the population lives below the
            poverty line, with 2.1 million people facing food insecurity. Women
            and children are disproportionately affected, leading to{' '}
            <strong>28%</strong> of children under five suffering from{' '}
            <strong>stunted growth due to malnutrition.</strong>
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src={needy1}
            alt="Visual representation of the problem"
            className="rounded-xl shadow-lg h-[450px] "
          />
        </div>
      </div>
    </div>
  )
}

export default TheProblem
