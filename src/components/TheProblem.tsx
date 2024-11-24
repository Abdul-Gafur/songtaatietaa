import needy1 from '../assets/needy/needy1.png'
import needy2 from '../assets/needy/needy2.png'
import needy3 from '../assets/needy/needy3.png'
import { IoInformationCircle } from 'react-icons/io5'

const TheProblem = () => {
  return (
    <div>
      <div className="flex items-start gap-6 max-sm:flex-wrap">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-10">The Problem</h1>
          <p className="bg-primary p-2 rounded-md px-5 text-white flex gap-6 w-fit mb-6">
            <IoInformationCircle size={30}/> A Brief About The Problem
          </p>
          <p>
            In Ghana, <strong>24.2%</strong> of the population lives below the
            poverty line, with 2.1 million people facing food insecurity; women
            and children are disproportionately affected, leading to 28% of
            children under five suffering from{' '}
            <strong>stunded growth due to malnutrition.</strong>
          </p>
          <div className="flex justify-center gap-10 flex-wrap mt-7">
            <img
              src={needy2}
              alt="needy"
              className="h-52 w-52 md:h-72 md:w-auto rounded-xl"
            />
            <img
              src={needy3}
              alt="needy"
              className="h-52 w-52 md:h-72 md:w-auto rounded-xl"
            />
          </div>
        </div>
        <img
          src={needy1}
          alt="needy"
          className="rounded-xl min-h-60 h-[50vh] min-w-60 w-auto"
        />
      </div>
    </div>
  )
}

export default TheProblem
