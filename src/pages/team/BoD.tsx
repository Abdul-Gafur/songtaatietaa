
import { staff } from '../../data/staff'

const BoardOfDirectors = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold">Board of Directors</h1>

      <ul className='flex flex-wrap gap-10 my-6'>
        {staff.directors.map((director, index) => {
          return (
            <li
              key={index}
              className="flex flex-col justify-center items-center w-fit m-auto"
            >
              <img
                src={director.image}
                alt="staff"
                className="h-44 w-44 md:h-72 md:w-72 rounded-full "
              />
              <div hidden={!director.role} className="bg-primary text-white -mt-6 z-10 py-2 px-3 rounded-md w-fit font-semibold">
                {director.role}
              </div>

              <div className="font-semibold mt-3 text-center">
                <p className="text-primary">{director.name}</p>
                <p className="mt-2">{director.position}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BoardOfDirectors
