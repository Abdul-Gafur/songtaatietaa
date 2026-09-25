import competitiveAdv from '../assets/competitive_adv.png'

const CompetitiveAdvantage = () => {
  return (
    <div className="flex gap-16 max-sm:flex-wrap ">
      <section>
        <h1 className="text-4xl md:text-6xl font-bold mb-10">
          Competitive Advantage
        </h1>
        <img
          src={competitiveAdv}
          alt="needy"
          className="min-h-40 w-auto rounded-xl"
        />
      </section>

      <div className="bg-primary text-white rounded-2xl p-4  md:max-w-[30vw]">
        <table>
          <tbody>
            <tr>
              <td className="text-2xl font-semibold pr-12 pb-12">Niche</td>
              <td className='pb-12'>
                We offer unique blends that not only stand out in the market but
                also provide delicious and healthy options for consumers
              </td>
            </tr>
            <tr>
              <td className="text-2xl font-semibold pr-12 pb-12">Nutritional Benefits</td>
              <td className='pb-12'>
                Our cereals are packed with essential nutrients, catering
                specifically to health-conscious families and children.
              </td>
            </tr>

            <tr>
              <td className="text-2xl font-semibold pr-12 pb-12">Availability</td>
              <td className='pb-12'>
                Our products are readily available both in stores and online,
                simplifying the journey to healthy eating for everyone.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompetitiveAdvantage
