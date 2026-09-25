import { assets } from '../assets/_static-assets'

const TargetAudience = () => {
  return (
    <div
      className="h-[80vh] w-full p-6"
      style={{
        background: `url(${assets.missionVision})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode:'darken'
      }}
    >
      <h1 className="h1">Target Audience</h1>

      <div className="grid max-sm:gap-10 md:grid-cols-2 text-white text-xl font-semibold mt-8">
        <div className="md:h-60 border-primary md:border-r ">
          <p className=" bg-primary/30 rounded-full p-2 w-fit">NURSING MOTHERS</p>{' '}
        </div>
        <div className="md:h-60 md:pl-6">
          <p className=" bg-primary/30 rounded-full p-2 w-fit">FAMILIES</p>
        </div>
        <div className="md:h-60 border-primary md:border-t md:border-r md:pt-6">
          <p className=" bg-primary/30 rounded-full p-2 w-fit">HEALTH-CONSCIOUS INDIVIDUALS</p>
          
        </div>
        <div className="md:h-60 border-primary md:border-t md:pt-6 md:pl-6">
          <p className="w-fit bg-primary/30 rounded-full p-2 ">EDUCATIONAL INSTITUTIONS</p>{' '}
        </div>
      </div>
    </div>
  )
}

export default TargetAudience
