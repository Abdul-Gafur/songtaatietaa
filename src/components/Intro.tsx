import ListItem from './Li'

const IntroText = () => {
  return (
    <div>
      <h2 className="flex gap-2 font-semibold border-b border-secondary mb-3">
        <span>S o n g - T a a T i e - T a a</span> <span>C o m p a n y</span>{' '}
        <span>L t d</span>
      </h2>

      <p className="">
        An agro-processing firm producing premium breakfast cereals that blend
        <strong> nutrition</strong> and <strong>flavor</strong>.
      </p>
      <ul>
        <ListItem>
          <strong>Products</strong>: Tombrown, Groundnut Paste, Dawada, Shea
          Butter{' '}
        </ListItem>
        <ListItem>
          <strong>Customers</strong>: Health-conscious consumers, nursing
          mothers, hotels, households, schools.
        </ListItem>

        <ListItem>
          <p>
            We produce high-quality breakfast cereals, including{' '}
            <span className="font-semibold text-secondary">Tombrown</span>,{' '}
            <span className="font-semibold text-secondary">
              Groundnut Paste
            </span>
            , <span className="font-semibold text-secondary">Dawada</span>, and{' '}
            <span className="font-semibold text-secondary">Shea Butter</span>,
            using locally sourced ingredients from smallholder farmers and
            women&apos;s groups in the Upper West Region of Ghana.
          </p>
        </ListItem>
      </ul>
    </div>
  )
}

export default IntroText
