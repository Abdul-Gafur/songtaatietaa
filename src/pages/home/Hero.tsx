import { assets } from '../../assets/_static-assets'

const Hero = ({}: { className?: string }) => {
  return (
    <main className="relative h-[80vh] text-white ">
      <img
        src={assets.logo}
        alt="logo"
        className="h-40 w-40 rounded-xl border-s bg-primary absolute top-2 md:-top-[9vh] left-[2vw] max-sm:z-[-1]"
      />

      <div
        className="absolute inset-0  z-0"
        style={{
          background: `url(${assets.missionVision})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: -2,
        }}
      ></div>
      <div className="z-10 p-[5%] font-semibold bg-black/30 h-full w-full">
        <h1 className="max-sm:text-4xl text-7xl mt-6 text-right">
          Empowering Communities Through Sustainable Agriculture
        </h1>
        <h2 className="max-sm:text-2xl text-4xl mt-10">
          Song-Taa Tie-Taa Company Ltd
        </h2>
        <p className="max-sm:text-xl text-2xl mt-6">
          NOURISHING GHANA, EMPOWERING FUTURES.
        </p>
      </div>
    </main>
  )
}

export default Hero
