
import { staff } from '../../data/staff'

const OurTeamMembers = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold">Our Team</h1>

      <ul className='flex flex-wrap gap-10 my-6'>
        {staff.team.map((member, index) => {
          return (
            <li
              key={index}
              className="flex flex-col justify-center items-center w-fit m-auto"
            >
              <img
                src={member.image}
                alt="staff"
                className="h-44 w-44 md:h-72 md:w-72 rounded-full "
              />
              <div hidden={!member.role} className="bg-primary text-white -mt-6 z-10 py-2 px-3 rounded-md w-fit font-semibold">
                {member.role}
              </div>

              <div className="font-semibold mt-3 text-center">
                <p className="text-primary">{member.name}</p>
                <p className="mt-2">{member.specialRole}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default OurTeamMembers
