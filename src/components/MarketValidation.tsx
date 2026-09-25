import marketValidation from '../assets/marketValidation.png'
import ScrollRevealCounter from './countup'

const MarketValidation = () => {
  const statistics = [
    { title: 'Smallholder Farmers', subtitle: 'Total Users', value: 1500 },
    { title: 'Bulk Purchase Customers', subtitle: 'Total Users', value: 152 },
    { title: 'VSLA Groups', subtitle: 'Total Users', value: 48 },
  ]
  return (
    <div>
      <div className="flex max-sm:flex-col-reverse items-start gap-8">
        <img
          src={marketValidation}
          alt="market validation"
          className="h-72 w-auto rounded-3xl"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-10">
          Market Validation
        </h1>
      </div>

      <div>
        <ul className="mt-10 bg-primary p-6 text-white rounded-3xl flex justify-around items-start gap-6 md:gap-16">
          {statistics.map((stat, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center text-sm sm:text-lg"
            >
              <div className="h-1 bg-white w-20 my-12"></div>
              <p className='line-clamp-3 h-20 '>{stat.title}</p>
              <ScrollRevealCounter
                className="text-3xl font-semibold"
                endValue={stat.value}
              />
              {/* <p className="text-3xl font-semibold">
                {stat.value.toLocaleString()}
              </p> */}
              <p>{stat.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MarketValidation
