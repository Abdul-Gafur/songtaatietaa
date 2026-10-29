import needy1 from '../assets/needy/needy1.png'
import needy2 from '../assets/needy/needy2.png'
import needy3 from '../assets/needy/needy3.png'

const InvestmentAsk = () => {
  return (
    <div>
      <div className="flex items-start gap-6 max-sm:flex-wrap">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-10">
            Investment Ask
          </h1>
          <p>
            Songtaa Tietaa Company Ltd is seeking an investment of
            <strong>$499,898</strong> to accelerate our mission of delivering
            nutritious, locally sourced breakfast cereals to communities across
            Ghana.
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

export default InvestmentAsk
