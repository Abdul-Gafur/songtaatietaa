import ListItem from './ListItem'

const IntroText = () => {
  return (
    <section className="max-w-6xl  mx-auto px-4 md:px-0">
      {/* Company Name */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary border-b border-primary/30 pb-2 mb-6">
        Songtaa Tietaa Company Ltd
      </h2>

      {/* Introduction */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
        We are an agro-processing firm committed to producing premium breakfast
        cereals that blend{' '}
        <strong className="text-black font-semibold">nutrition</strong> and{' '}
        <strong className="text-black font-semibold">flavor</strong>—made with
        care to nourish Ghana and empower futures.
      </p>

      {/* List Section */}
      <ul className="space-y-4 pl-4 border-l-4 border-primary/20 ml-1">
        <ListItem>
          <span className="text-gray-800">
            <strong className="text-primary">Products</strong>: Tombrown,
            Groundnut Paste, Dawadawa, Shea Butter
          </span>
        </ListItem>
        <ListItem>
          <span className="text-gray-800">
            <strong className="text-primary">Customers</strong>:
            Health-conscious consumers, nursing mothers, hotels, households,
            schools
          </span>
        </ListItem>
      </ul>
    </section>
  )
}

export default IntroText
